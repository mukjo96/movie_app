import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import Media from "react-media";
import "./Movie.css";
import { faGrinStars } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Movie({
  movie_id,
  title_kr,
  title_original,
  poster_path,
  vote_average,
  vote_count,
  genre_ids,
  release_date,
  summary,
}) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${movie_id}`,
          state: {
            movie_id,
            title_kr,
            title_original,
            poster_path,
            vote_average,
            vote_count,
            genre_ids,
            release_date,
            summary,
          },
        }}
      >
        <div className="movieCard">
          <div className="movie-poster">
            <div>
              <img
                className="movieimg"
                src={"https://image.tmdb.org/t/p/w500" + poster_path}
                alt={title_original}
                title={title_original}
              />
            </div>
          </div>
          <div className="mv-inf">
            <div className="mv-inf-top">
              <div className="mv-inf-title">{title_kr}</div>
            </div>
            <div>
              <hr />
            </div>
            <div className="mv-inf-btm">
              <div className="mv-inf-overview">
                {summary.substr(0, 70)}
                {summary.length > 140 ? "..." : ""}
              </div>
              <div className="mv-inf-vote-avg">
                <FontAwesomeIcon className="star" icon={faStar} />
                {vote_average}
              </div>
            </div>
          </div>
        </div>
      </Link>
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

export default Movie;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function findGenre(a) {
  if (a === 28) {
    return "액션";
  } else if (a === 12) {
    return "모험";
  } else if (a === 16) {
    return "애니메이션";
  } else if (a === 35) {
    return "코미디";
  } else if (a === 80) {
    return "범죄";
  } else if (a === 99) {
    return "다큐멘터리";
  } else if (a === 18) {
    return "드라마";
  } else if (a === 10751) {
    return "가족";
  } else if (a === 14) {
    return "판타지";
  } else if (a === 6) {
    return "역사";
  } else if (a === 27) {
    return "공포";
  } else if (a === 10402) {
    return "음악";
  } else if (a === 9648) {
    return "미스터리";
  } else if (a === 10749) {
    return "로맨스";
  } else if (a === 878) {
    return "SF";
  } else if (a === 10770) {
    return "TV 영화";
  } else if (a === 53) {
    return "스릴러";
  } else if (a === 10752) {
    return "전쟁";
  } else if (a === 37) {
    return "서부";
  } else {
    return "";
  }
}

var genres = [
  {
    id: 28,
    name: "액션",
  },
  {
    id: 12,
    name: "모험",
  },
  {
    id: 16,
    name: "애니메이션",
  },
  {
    id: 35,
    name: "코미디",
  },
  {
    id: 80,
    name: "범죄",
  },
  {
    id: 99,
    name: "다큐멘터리",
  },
  {
    id: 18,
    name: "드라마",
  },
  {
    id: 10751,
    name: "가족",
  },
  {
    id: 14,
    name: "판타지",
  },
  {
    id: 36,
    name: "역사",
  },
  {
    id: 27,
    name: "공포",
  },
  {
    id: 10402,
    name: "음악",
  },
  {
    id: 9648,
    name: "미스터리",
  },
  {
    id: 10749,
    name: "로맨스",
  },
  {
    id: 878,
    name: "SF",
  },
  {
    id: 10770,
    name: "TV 영화",
  },
  {
    id: 53,
    name: "스릴러",
  },
  {
    id: 10752,
    name: "전쟁",
  },
  {
    id: 37,
    name: "서부",
  },
];
