import React from "react";
import "./MovieDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";

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
  backdrop_path,
}) {
  return (
    <div
      className="movieDetail"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
      }}
    >
      <div className="bg_filter">
        <img
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt={original_title}
          title={original_title}
          className="poster"
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
            <h5 className="movieDetail__prdtYear">개봉일자 : {release_date}</h5>
            <h5>상영시간 : {runtime}분</h5>
            <h5>
              관객평점 : <FontAwesomeIcon className="star" icon={faStar} />
              {vote_average} ({" "}
              <FontAwesomeIcon className="people" icon={faUser} />
              {" " + vote_count} )
            </h5>
            <ul className="movieDetail__nation">
              {production_countries.map((country, index) => (
                <li key={index} className="countries__country">
                  <h5>{nationtoKR(country.name)}</h5>
                </li>
              ))}
            </ul>
          </div>

          <div className="movieDetail__summary">
            <p>{overview}</p>
          </div>
          <div className="movieDetail__production">
            <h4>제작사</h4>
            <ul className="movieDetail__companies">
              {production_companies.map((company, index) => (
                <li key={index} className="companies__company">
                  {toImg(company)}
                </li>
              ))}
            </ul>
          </div>
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

function nationtoKR(s) {
  if (s === "United States of America") return "미국";
  else if (s === "China") return "중국";
  else if (s === "Bulgaria") return "불가리아";
  else if (s === "Estonia") return "에스토니아";
  else if (s === "United Kingdom") return "영국";
  else if (s === "Japan") return "일본";
  else if (s === "Belgium") return "벨기에";
  else if (s === "France") return "프랑스";
  else if (s === "South Korea") return "한국";
  else if (s === "Colombia") return "콜롬비아";
  else if (s === "Netherlands") return "네덜란드";
  else if (s === "Germany") return "독일";
  else if (s === "India") return "인도";
  else if (s === "Canada") return "캐나다";
  else if (s === "Russia") return "러시아";
  else if (s === "Ireland") return "아일랜드";
  else if (s === "New Zealand") return "뉴질랜드";
  else if (s === "Austrailia") return "호주";
  else if (s === "Italy") return "이탈리아";
  else if (s === "Switzerland") return "스위스";
  else if (s === "Georgia") return "조지아";
  else if (s === "Croatia") return "크로아티아";
  else if (s === "Serbia") return "세르비아";
  else return s;
}
