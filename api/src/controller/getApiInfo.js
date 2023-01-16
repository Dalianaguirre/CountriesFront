const { Country, Activity } = require("../db.js");
const axios = require("axios");

async function getApiInfo() {
  const apiUrl = await axios.get("https://restcountries.com/v3/all"); // axios.get me devuelve una promesa
  const apiInfo = await apiUrl.data.map((c) => {
    return {
      id: c.cca3,
      name: c.name.common,
      flag: c.flags[0],
      continent: c.continents[0],
      capital: c.capital ? c.capital[0] : "There is no information",
      subregion: c.subregion ? c.subregion[0] : "There is no information",
      area: c.area,
      population: c.population,
    };
  });
  const keep = () => {
    apiInfo.map((i) => {
      Country.findOrCreate({
        where: {
          name: i.name,
          id: i.id,
        },
        defaults: {
          continent: i.continent,
          flag: i.flag,
          capital: i.capital,
          subregion: i.subregion,
          area: i.area,
          population: i.population,
        },
      }).catch((err) => {
        console.log(err);
      });
    });
  };
  keep();
  return apiInfo;
}

const getDbInfo = async () => {
  try {
    const dataInDb = await Country.count();
    if (dataInDb === 0)
      await getApiInfo(); // si no hay data en la db consulta a la API
    else {
      // sino hago la consulta directamente
      const aux = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: {
            attributes: [], // no quiero info de la tabla intermedia
          },
        },
      });
      return aux;
    }
  } catch (error) {
    return res.status(404).json({ message: "country not found" });
  }
};

const getActivities = async () => {
  try {
    const get = await Activity.findAll();
    return get;
  } catch (error) {
    return res.status(404).json({ message: "act not found" });
  }
};

module.exports = { getDbInfo, getActivities };
