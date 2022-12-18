import { FilterList } from "@mui/icons-material";

import React from "react";
import { Link } from "react-router-dom";
import AllQuestions from "./AllQuestions";
import "./css/Main.css";
// import {v4 as uuid} from 'uuid';

function Main({ questions }) {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2> All Questions</h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <p>{questions.length} questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link>Newest</Link>
              </div>
              <div className="main-tab">
                <Link>Active</Link>
              </div>
              <div className="main-tab">
                <Link>More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterList />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          {questions.map((_q,index) => (
            <>
              <div key = {index} className="question">
                <AllQuestions question={_q} />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
