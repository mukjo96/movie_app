import React from "react";
import { Link } from "react-router-dom";

function Todayrank({ rank, rankInten, movieNm, audiAcc }) {
  return (
    <div>
      <ul className="boxofficelist">
        <li className="rank">{rank}</li>
        <li className={"rankInten" + (rankInten < 0 ? "down" : "up")}>
          {rankInten}
        </li>
        <li className="movieNm">
          <Link
            to={{
              pathname: `/search?text=${movieNm.slice(0, 10)}`,
            }}
          >
            {movieNm.slice(0, 13)}
            {movieNm.length > 13 ? "..." : ""}
          </Link>
        </li>
        <li className="audiAcc">{numberWithCommas(audiAcc)}</li>
      </ul>
    </div>
  );
}
export default Todayrank;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
