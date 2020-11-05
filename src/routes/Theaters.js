import React, { useState } from "react";
import { authService, dbService } from "../fBase";
import Theater_data from "../json/Theater_data.json";
import Cinema from "../components/Cinema";
import "./Theaters.css";

const Cinemas = Array.from(Theater_data);

const Theaters = ({ userObj }) => {
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
    <div className="home">
      <section id="header">
        <div className="container">
          <h1 id="logo">
            <a href="index.html">Theaters</a>
          </h1>

          <p>
            {userObj.displayName ? userObj.displayName + "님 " : null}
            가까운 영화관의 정보를 확인하세요.
          </p>
        </div>
      </section>
      <body className="homepage is-preload">
        <div id="page-wrapper">
          <section id="features">
            <div className="container">
              <header>
                <h2>
                  <strong>브랜드와 지역</strong>을 선택하세요
                </h2>
              </header>
              <div className="col aln-center">
                <div className="col-4 col-6-medium col-12-small">
                  <section>
                    {/* <a href="#" className="image featured">
                      <img src="images/pic01.jpg" alt="" />
                    </a> */}
                    <header>
                      <h3>브랜드</h3>
                    </header>
                    <ul className="brand_name">
                      <li>
                        <button
                          className={
                            "btnbr" +
                            (theaterBrand === "전체" ? "active" : "default")
                          }
                          onClick={() => setTheaterBrand("전체")}
                        >
                          전체
                        </button>
                      </li>
                      <li>
                        <button
                          className={
                            "btnbr" +
                            (theaterBrand === "롯데시네마"
                              ? "active"
                              : "default")
                          }
                          onClick={() => setTheaterBrand("롯데시네마")}
                        >
                          롯데시네마
                        </button>
                      </li>
                      <li>
                        <button
                          className={
                            "btnbr" +
                            (theaterBrand === "CGV" ? "active" : "default")
                          }
                          onClick={() => setTheaterBrand("CGV")}
                        >
                          CGV
                        </button>
                      </li>
                      <li>
                        <button
                          className={
                            "btnbr" +
                            (theaterBrand === "메가박스" ? "active" : "default")
                          }
                          onClick={() => setTheaterBrand("메가박스")}
                        >
                          메가박스
                        </button>
                      </li>
                      <li>
                        <button
                          className={
                            "btnbr" +
                            (theaterBrand === "기타" ? "active" : "default")
                          }
                          onClick={() => setTheaterBrand("기타")}
                        >
                          기타
                        </button>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <section>
                    {/* <a href="#" className="image featured">
                      <img src="images/pic02.jpg" alt="" />
                    </a> */}
                    <header>
                      <h3>지역</h3>
                    </header>
                    <ul className="location_name">
                      {locationList.map((name) => (
                        <li key={name}>
                          <button
                            className={
                              "btnloc" +
                              (theaterLocation === `${name}`
                                ? "active"
                                : "default")
                            }
                            onClick={() => setTheaterLocation(`${name}`)}
                          >
                            {name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
                {/* <div className="col-4 col-6-medium col-12-small">
                  <section>
                    
                    <header>
                      <h3>Top Rated Movies</h3>
                    </header>

                    
                  </section>
                </div> */}
              </div>
            </div>
          </section>

          <section id="banner">
            <div>
              {Cinemas.filter((cinemaf) => {
                if (theaterBrand === "전체" && theaterLocation === "전체") {
                  return true;
                } else if (theaterBrand === "전체") {
                  return theaterLocation === cinemaf.LOCATION;
                } else if (theaterLocation === "전체") {
                  return theaterBrand === cinemaf.THEATER_BRAND;
                } else {
                  return (
                    theaterBrand === cinemaf.THEATER_BRAND &&
                    theaterLocation === cinemaf.LOCATION
                  );
                }
              }).map((cinema) => (
                <div key={cinema.idx}>
                  {cinema.LOCATION_DETAIL !== theaterLocDetail ? (
                    <h4 className="detail_block">{cinema.LOCATION_DETAIL}</h4>
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
          </section>

          <section id="footer">
            <div id="copyright" className="container">
              <ul className="links">
                <li>&copy; mukjo96. All rights reserved.</li>
                <li>
                  Design: <a href="http://html5up.net">HTML5 UP</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
};

export default Theaters;
