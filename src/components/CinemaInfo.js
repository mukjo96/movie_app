import React from "react";
import "./CinemaInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import cgv from "../res/cgv.png";
import lottecinema from "../res/lottecinema.png";
import megabox from "../res/megabox.png";
import Map from "./Map";

function CinemaInfo({
  theater_id,
  theater_name,
  theater_brand,
  theater_location,
  theater_location_detail,
  vote_average,
  phone,
  place_url,
  road_address_name,
  id,
  x,
  y,
  distance,
}) {
  return (
    <div
      className="cinemaInfo"
      /* style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
      }} */
    >
      <div className="bg_filter">
        {theater_brand === "CGV" ? (
          <img
            src={cgv}
            alt={theater_brand}
            title={theater_brand}
            className="brand_logo"
          />
        ) : null}
        {theater_brand === "롯데시네마" ? (
          <img
            src={lottecinema}
            alt={theater_brand}
            title={theater_brand}
            className="brand_logo"
          />
        ) : null}
        {theater_brand === "메가박스" ? (
          <img
            src={megabox}
            alt={theater_brand}
            title={theater_brand}
            className="brand_logo"
          />
        ) : null}
        <div className="cinemaInfo__data">
          <div className="cinemaInfo__title">
            <h1>{theater_name}</h1>
          </div>
          <div className="cinemaInfo__brand">
            <h4>{theater_brand}</h4>
          </div>
          <div className="cinemaInfo__details">
            <h5 className="cinemaInfo__address">{road_address_name}</h5>
            <h5 className="cinemaInfo__phone">{phone}</h5>

            <h5>
              평점 : <FontAwesomeIcon className="star" icon={faStar} />
              {vote_average}{" "}
              {/* ({" "}
              <FontAwesomeIcon className="people" icon={faUser} />
              {" " + vote_count} ) */}
            </h5>
            {distance ? (
              <h5>현재 위치에서 {distance}m 떨어져 있습니다.</h5>
            ) : null}
            <div className="cinemaInfo__kakaomap">
              <a
                className="cinemaInfo__url"
                href={place_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                상세페이지
              </a>
              <a
                href={`https://map.kakao.com/link/to/${id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                길찾기
              </a>
              <div className="cinemaInfo__map">
                <Map address={road_address_name} name={theater_name} />
              </div>
            </div>
            {/* <ul className="cinemaInfo__nation">
              {production_countries.map((country, index) => (
                <li key={index} className="countries__country">
                  <h5>{nationtoKR(country.name)}</h5>
                </li>
              ))}
            </ul>
          </div>

          <div className="cinemaInfo__summary">
            <p>{overview}</p>
          </div>
          <div className="cinemaInfo__production">
            <h4>제작사</h4>
            <ul className="cinemaInfo__companies">
              {production_companies.map((company, index) => (
                <li key={index} className="companies__company">
                  {toImg(company)}
                </li>
              ))}
            </ul> */}
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

export default CinemaInfo;
