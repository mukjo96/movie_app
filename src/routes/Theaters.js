import { faShower } from "@fortawesome/free-solid-svg-icons"
import { array, arrayOf } from "prop-types"
import React, {useState} from "react"
import {Link} from "react-router-dom"
import Theater_data from "../json/Theater_data.json"
import Cinema from "../components/Cinema"
const Theaters = () => {
    const [theaterBrand, setTheaterBrand] = useState("전체");
    const [theaterLocation, setTheaterLocation] = useState("전체")


    const locationList = ["전체", "서울", "부산", "경기/인천", "충청/대전", "경북/대구", "경남/울산", "전라/광주", "강원/제주" ]
    const locationItem = locationList.map((name) => 
    <li >
        <button onClick={() => setTheaterLocation(`${name}`)}>{name}</button>
    </li>)

    const Cinemas = Array.from(Theater_data)

    const isAll = () => {
        if((theaterBrand == "전체") && (theaterLocation == "전체")){
            return true;
        }
        else return false;
    }
    const chklocation = (location) => {
        if((theaterBrand == "전체") && (theaterLocation == location)){
            return true;
        }
        else return false;
    }
    const chkbrand = (brand) => {
        if((theaterLocation == "전체") && (theaterBrand == brand)){
            return true;
        }
        else return false;
    }
    const chkall = (brand, location) => {
        if((theaterBrand == brand) && (theaterLocation == location)){
            return true;
        }
        else return false;
        
    }
    

    
    return (
        <body>
        <div>
            <a>{theaterBrand}, {theaterLocation}</a>
            <ul className = "brand_name">
              <li>
                <button onClick={() => setTheaterBrand("전체")}>
                    전체
                </button>
              </li>
              <li>
              <button onClick={() => setTheaterBrand("CGV")}>CGV
                </button>
              </li>
              <li>
              <button onClick={() => setTheaterBrand("롯데시네마")}>롯데시네마
                </button>
              </li>
              <li>
              <button onClick={() => setTheaterBrand("메가박스")}>메가박스
                </button>
              </li>
              <li>
              <button onClick={() => setTheaterBrand("기타")}>기타
                </button>
              </li>
              </ul>
              <ul>
                  {locationItem}
              </ul>
        </div>
        <div className="cinemas">
            {Cinemas.filter((cinema) => {
                if((theaterBrand == "전체") && (theaterLocation == "전체")){return true;}
                else if(theaterBrand == "전체"){return (theaterLocation == cinema.LOCATION);}
                else if(theaterLocation == "전체"){return (theaterBrand == cinema.THEATER_BRAND);}
                else{return (theaterBrand == cinema.THEATER_BRAND) && (theaterLocation == cinema.LOCATION)}
            }).map((cinema) =>
            
                (<a>{cinema.THEATER_NAME}</a> )   
        
            )}
        </div>
        </body>
        
    )
}

export default Theaters;