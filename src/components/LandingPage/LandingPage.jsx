import React from "react";
import { Link } from 'react-router-dom';
import "./LandingPage.css";

export default function LandingPage() {
  return(
    <body>
      <section className="full">
          <div className="full-inner">
            <div className="content">
                <h1 className="phrase">Welcome to</h1>
                <h2>COUNTRIES APP</h2>
                <Link to ='/home' className="botton">
                  Let's Go
                </Link>
            </div>
          </div>
      </section>
    </body>
  )
}