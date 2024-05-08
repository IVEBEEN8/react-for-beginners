import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
    console.log(details);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Detail</h1>
          <img src={details.large_cover_image} />
          <h2>{details.title}</h2>
          <p>Description : {details.description_intro}</p>
          <p>Rating : {details.rating} out of 10</p>
          <h3>Genres</h3>
          <ul>
            {details.genres.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
          <h3>Download : torrent URLs</h3>
          <ul>
            {details.torrents.map((e) => (
              <li key={e.url}>{e.url}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
