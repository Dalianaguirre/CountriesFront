import React from "react";
import "./Pagination.css";

export default function Pagination({ countriesPerPage, allCountries, pagination }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil( allCountries / countriesPerPage); i++) {   // 250/10 = 25 páginas
    pageNumbers.push(i+1);              // que no comience en 0
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers && pageNumbers.map((number) => (
            <li className="numbers" key={number}>
              <a className="abtn" onClick={() => pagination(number)}>{number}</a>
            </li>
        ))}
      </ul>
    </nav>
  );
}