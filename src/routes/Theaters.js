import React, { useEffect, useState } from "react";
import Theater_data from "../json/Theater_data.json";
import Cinema from "../components/Cinema";
import "./Theaters.css";

const Cinemas = Array.from(Theater_data);

const Theaters = () => {
  const [theaterBrand, setTheaterBrand] = useState("전체");
  const [theaterLocation, setTheaterLocation] = useState("전체");

  var theaterLocDetail = "";
  const setLocDetail = (value) => {
    theaterLocDetail = value;
  };

  const locationList = [
    "전체",
    "서울",
    "부산",
    "경기/인천",
    "충청/대전",
    "경북/대구",
    "경남/울산",
    "전라/광주",
    "강원/제주",
  ];

  return (
    <div className="containers">
      <div className="checklist">
        <ul className="brand_name">
          <li>
            <button
              className={
                "btnbr" + (theaterBrand === "전체" ? "active" : "default")
              }
              onClick={() => setTheaterBrand("전체")}
            >
              전체
            </button>
          </li>
          <li>
            <button
              className={
                "btnbr" + (theaterBrand === "CGV" ? "active" : "default")
              }
              onClick={() => setTheaterBrand("CGV")}
            >
              CGV
            </button>
          </li>
          <li>
            <button
              className={
                "btnbr" + (theaterBrand === "롯데시네마" ? "active" : "default")
              }
              onClick={() => setTheaterBrand("롯데시네마")}
            >
              롯데시네마
            </button>
          </li>
          <li>
            <button
              className={
                "btnbr" + (theaterBrand === "메가박스" ? "active" : "default")
              }
              onClick={() => setTheaterBrand("메가박스")}
            >
              메가박스
            </button>
          </li>
          <li>
            <button
              className={
                "btnbr" + (theaterBrand === "기타" ? "active" : "default")
              }
              onClick={() => setTheaterBrand("기타")}
            >
              기타
            </button>
          </li>
        </ul>
        <ul className="location_name">
          {locationList.map((name) => (
            <li key={name}>
              <button
                className={
                  "btnloc" +
                  (theaterLocation === `${name}` ? "active" : "default")
                }
                onClick={() => setTheaterLocation(`${name}`)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {Cinemas.filter((cinema) => {
          if (theaterBrand === "전체" && theaterLocation === "전체") {
            return true;
          } else if (theaterBrand === "전체") {
            return theaterLocation === cinema.LOCATION;
          } else if (theaterLocation === "전체") {
            return theaterBrand === cinema.THEATER_BRAND;
          } else {
            return (
              theaterBrand === cinema.THEATER_BRAND &&
              theaterLocation === cinema.LOCATION
            );
          }
        }).map((cinema) => (
          <div key={cinema.idx}>
            {cinema.LOCATION_DETAIL !== theaterLocDetail ? (
              <a className="detail_block">{cinema.LOCATION_DETAIL}</a>
            ) : null}
            {setLocDetail(cinema.LOCATION_DETAIL)}
            <div className="cinemas">
              <Cinema
                theater_id={cinema.idx}
                theater_name={cinema.THEATER_NAME}
                theater_brand={cinema.THEATER_BRAND}
                theater_location={cinema.LOCATION}
                theater_location_detail={cinema.LOCATION_DETAIL}
                vote_average={0}
                phone={cinema.phone}
                id={cinema.id}
                x={cinema.x}
                y={cinema.y}
                place_url={cinema.place_url}
                road_address_name={cinema.road_address_name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theaters;
