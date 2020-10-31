import React from "react";

function Todayrank({ rank, rankInten, movieNm, audiAcc }) {
  return (
    <div>
      <ul className="boxofficelist">
        <li className="rank">{rank}</li>
        <li className={"rankInten" + (rankInten < 0 ? "down" : "up")}>
          {rankInten}
        </li>
        <li className="movieNm">
          {movieNm.slice(0, 17)}
          {movieNm.length > 17 ? "..." : ""}
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
