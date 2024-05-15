import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Movie({ id, medium_cover_image, title, year, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} />
      <h2>
        <Link to={`/detail/${id}`}>
          {title}({year})
        </Link>
      </h2>
<<<<<<< HEAD:src/components/Movie.js
      <h3>testing source tree.</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
=======
      <p>{summary}</p>
      <ul>
>>>>>>> parent of 9aed9d3 ([commit] test):src/routes/Movie.js
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
