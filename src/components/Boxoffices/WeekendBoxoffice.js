import React, { useEffect, useState } from "react";
import axios from "axios";
import Todayrank from "./Todayrank";
import LoadingIcon from "../LoadingIcon";
import "./Boxoffice.css";

const WeekendBoxoffice = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getWeekendBoxoffice = async () => {
    try {
      let response = await axios.get(
        `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=373ddebd31b0a8811467c7be470256b2&targetDt=` +
          (getCurrentDate() - 7)
      );
      setMovies(response.data.boxOfficeResult.weeklyBoxOfficeList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoading === true) {
      getWeekendBoxoffice();
    }
    setIsLoading(false);
  }, [getWeekendBoxoffice, setIsLoading]);

  return (
    <body className="container">
      {isLoading ? (
        <div className="boxofficemovies">
          <div id="loading-icon">
            <LoadingIcon />
          </div>
        </div>
      ) : (
        <div className="boxofficemovies">
          <div className="boxofficemovie">
            <ul className="tboxofficelist">
              <li className="trank">순위</li>
              <li className="rankInten">변동</li>
              <li className="movieNm">영화 제목</li>
              <li className="audiAcc">관객 수</li>
            </ul>
          </div>
          <div>
            <hr />
          </div>
          {movies.map((movie) => (
            <div className="boxofficemovie">
              <Todayrank
                key={movie.rnum}
                rank={movie.rank} // 순위
                rankInten={movie.rankInten} // 순위 증감
                movieNm={movie.movieNm} // 제목
                rankOldAndNew={movie.rankOldAndNew} // 신규 진입 여부
                audiAcc={movie.audiAcc} // 관객 누적 수
              />
            </div>
          ))}
        </div>
      )}
    </body>
  );
};

export default WeekendBoxoffice;

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date < 10 ? `0${date}` : `${date}`}`;
}
