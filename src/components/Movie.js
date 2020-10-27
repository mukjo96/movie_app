import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Movie.css";
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
