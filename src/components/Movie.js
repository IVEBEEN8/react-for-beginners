import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Movie.module.css";

function Movie({ id, medium_cover_image, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={medium_cover_image} className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={`/detail/${id}`}>
          {title}
          <span className={styles.movie__year}>({year})</span>
        </Link>
      </h2>
<<<<<<< HEAD
      <h3>now is it working?</h3>
      <h2>another text for source tree!</h2>
=======
      <h3>testing source tree.</h3>
      <h2>i like this</h2>
>>>>>>> e5bc7bea91e19a212a8c6ee95b793920f3ba55b5
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
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
