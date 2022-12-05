import React from "react";
import { Link } from 'react-router-dom';
import "./LandingPage.css";

export default function LandingPage() {
  return(
    <body>
      <section className="full">
          <div className="full-inner">
            <div className="content">
            <h2 className="phrase">Welcome to</h2>
                <h1>COUNTRIES APP</h1>
                <Link to ='/home' className="botton">
                  Let's Go
                </Link>
            </div>
          </div>
      </section>
    </body>
  )
}