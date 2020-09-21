import React from "react";
import "./MovieDetail.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieDetail({
  key,
  title,
  original_title,
  genres,
  poster_path,
  release_date,
  runtime,
  vote_average,
  vote_count,
  production_companies,
  production_countries,
  overview,
  homepage,
}) {
  return (
    <div className="movieDetail">
      <img
        src={"https://image.tmdb.org/t/p/w500" + poster_path}
        alt={original_title}
        title={original_title}
      />
      <div className="movieDetail__data">
        <div className="movieDetail__title">
          <a href={homepage}>
            <h1>{title}</h1>
          </a>
          <h4>{original_title}</h4>
        </div>
        <ul className="movieDetail__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre.name}
            </li>
          ))}
        </ul>
        <div className="movieDetail__details">
          <h4 className="movieDetail__prdtYear">개봉일자 : {release_date}</h4>
          <h5>상영시간 : {runtime}분</h5>
          <h5>
            관객평점 : {vote_average} ({vote_count}명)
          </h5>
          <ul className="movieDetail__nation">
            {production_countries.map((country, index) => (
              <li key={index} className="countries__country">
                {country.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="movieDetail__summary">
          <p>{overview}</p>
        </div>
        <div>
          <h4>제작사</h4>
          <ul className="movieDetail__companies">
            {production_companies.map((company, index) => (
              <li key={index} classNam="companies__company">
                {toImg(company)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
/*
Movie.propTypes = {
  rnum: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  rankInten: PropTypes.number.isRequired,
  movieCd: PropTypes.number.isRequired,
  movieNm: PropTypes.string.isRequired,
  rankOldAndNew: PropTypes.string.isRequired,
  audiAcc: PropTypes.number.isRequired,
};
*/

export default MovieDetail;

function toImg(s) {
  if (s.logo_path != null) {
    return (
      <img
        src={"https://image.tmdb.org/t/p/w500" + s.logo_path}
        alt={s.name}
        title={s.name}
      />
    );
  }
}
