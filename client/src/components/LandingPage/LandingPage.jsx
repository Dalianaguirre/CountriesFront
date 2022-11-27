import React from "react";
import { Link } from 'react-router-dom';
import "./LandingPage.css";

export default function LandingPage() {
  return(
    <body>
      <section className="full">
          <div className="full-inner">
            <div className="content">
                <h1>Country App</h1>
                <Link to ='/home' className="botton">
                  Let's Go
                </Link>
                <h2 className="phrase">Learn all about countries!</h2>
            </div>
          </div>
      </section>
    </body>
  )
}