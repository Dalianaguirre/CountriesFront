import React, {useState, useEffect} from "react";
import { Link, useHistory } from 'react-router-dom';
import { postActivity, getActivities } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./ActivityCreate.css";

export function validate(input) {

    let errors = {};

    if (!input.name) {
      errors.name = "Name is required";
    }
    else if(isNaN(input.name) !== true){
      errors.name = 'Name cannot be a number'
    }    
    else if (!input.duration || isNaN(input.duration) !== false){
      errors.duration = 'Duration requires a number'
    }
    else if (!input.difficulty) {
      errors.difficulty = "Difficulty is required";
    }
    else if (!input.season) {
      errors.season = "Season is required";
    }
    else if (!input.countryId === []) {
      errors.countryId = "Select at least one country";
    }
    return errors;
}

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.allCountries);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: '',
    duration: '',
    difficulty: '',
    season: '',
    countryId: [],
  });

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value
      })
    );
  };

  function handleDelete(i) {
    setInput({
      ...input,
      countryId: input.countryId.filter((el => el !== i))
    })
  };

  function handleSelectCountries(e) {
    setInput({ 
      ...input,
      countryId: [...input.countryId, e.target.value]
    })
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (input.name === '' || input.duration === '' || input.difficulty === '' || input.season === '' || input.countryId.length === 0)
      return alert('You must complete the fields');
    if (!input.name === /^[A-Z]+$/i )
      return alert('This name is invalid')
    dispatch(postActivity(input));
    alert('Activity created successfully!');
    setInput({
      name: '',
      duration: '',
      difficulty: '',
      season: '',
      countryId: []
    })
    history.push('/home')
  };


  return (
    <div className="actContainer">

      <div className='activityBox'>        
        <form className="activityForm" onSubmit={handleSubmit}>
          <h3 className="formTitle">Create your tourist activity</h3>
          <div className="formInput">
            <label className="labelActivity">Activity:</label>
            <input
              className="formWrite"
              type='text'
              placeholder="Write an activity"
              value={input.name}
              name='name'
              onChange={handleInputChange}
              />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}

          <div className="formInput">
            <label> Duration: </label>
            <input
              className="formWrite"
              type='text'
              value={input.duration}
              name='duration'
              placeholder="Write a duration in minutes"
              onChange={handleInputChange}
            />
          </div>
          {errors.duration && <p className="error">{errors.duration}</p>}

          <div className="formInput">
            <label> Difficulty: </label>
            <select
              className="formSelect"
              name='difficulty'
              value={input.difficulty}
              onChange={(e) => handleInputChange(e)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
            </select>
          </div>
          {errors.difficulty && <p className="error">{errors.difficulty}</p>}
          
          <div className="formInput">
            <select
              className="formSelect"
              name="season"
              value={input.season}
              onChange={(e) => handleInputChange(e)}>
                <option>Season</option>
                <option>Winter</option>
                <option>Summer</option>
                <option>Autumn</option>  
                <option>Spring</option>
            </select>
            {errors.season && <p className="error">{errors.season}</p>}
          </div>
          {errors.countryId && <p className="error">{errors.countryId}</p>}

          <div className="formInput">
            <select className="formSelect" onChange={(e) => handleSelectCountries(e)}>
              <option className="op"> Add countries </option>
                {countries.map((v) => (
                  <option className="op" value={v.id}>{v.name}</option>
                ))}
            </select>
          </div>

          <div>
            {input.countryId.map((country) => (
              <div>
                <input className="formButton" type='button' value='X' onClick={() => handleDelete(country)}/>
                <p>{country}</p>
              </div>
            ))}
          </div>
          <div>
            <button className="formButton" type='submit'>Create Activity</button>
          </div>
        </form>
      </div>
    </div>
  )
}