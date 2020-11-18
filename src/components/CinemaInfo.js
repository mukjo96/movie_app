import React from "react";
import "../routes/Home.css";
import "./CinemaInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faDirections,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
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
  userObj,
}) {
  return (
    <div className="containerc">
      <div id="content">
        <article className="box post">
          <header>
            <h2>
              <strong>{theater_name}</strong>
              <br />
            </h2>
          </header>
          <span className="image featured">
            <Map address={road_address_name} name={theater_name} />
          </span>
          <div className="map_buttons">
            <div className="col-12">
              <ul className="actions">
                <li>
                  <a
                    href={place_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button icon solid fa-file"
                  >
                    상세 페이지
                  </a>
                </li>
                <li>
                  <a
                    href={`https://map.kakao.com/link/to/${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button icon solid fa-file"
                  >
                    가는 길 찾기
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h3>상세정보</h3>
          <div className="cinema_brands">
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
          </div>
          <div className="cinemaInfo__details">
            <p>
              <FontAwesomeIcon icon={faAddressBook} />
              {"\t:\t"} {road_address_name}
              <br />
              <FontAwesomeIcon icon={faPhone} />
              {"\t:\t"}
              {phone}
              <br />
              <FontAwesomeIcon icon={faDirections} />
              {"\t:\t"}
              {distance}m
            </p>
          </div>

          
          {/* <ul>
            <li>
              <p>1</p>
            </li>
            <li>
              <p>2</p>
            </li>
            <li>
              <p>3</p>
            </li>
          </ul> */}
        </article>
      </div>
      {/* <div
      className="cinemaInfo"
      
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
            </div> */}
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
