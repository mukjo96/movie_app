import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Todayrank from "./Todayrank";
import LoadingIcon from "../LoadingIcon";
import "./Boxoffice.css";

const TodayBoxoffice = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTodayBoxoffice = useCallback(async () => {
    try {
      let response = await axios.get(
        `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=373ddebd31b0a8811467c7be470256b2&targetDt=` +
          (getCurrentDate() - 1)
      );
      setMovies(response.data.boxOfficeResult.dailyBoxOfficeList);
      console.log(response.data.boxOfficeResult.dailyBoxOfficeList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (isLoading === true) {
      getTodayBoxoffice();
    }
    setIsLoading(false);
  }, [getTodayBoxoffice, setIsLoading, isLoading]);

  return (
    <body className="boxofficelist">
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
              <li className="trank" key="tbox_rank">순위</li>
              <li className="rankInten" key="tbox_rankInten">변동</li>
              <li className="movieNm" key="tbox_movieNm">영화 제목</li>
              <li className="audiAcc" key="tbox_audiAcc">관객 수</li>
            </ul>
          </div>
          <div>
            <hr />
          </div>
          {movies.map((movie) => (
            <div className="boxofficemovie" key={movie.rnum}>
              <Todayrank
                
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

export default TodayBoxoffice;

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date < 10 ? `0${date}` : `${date}`}`;
}
