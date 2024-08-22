import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
//리액트에서 쓰던 방식
// const [isLoading, setIsloading] = useState(true);
// const [movies, setMovies] = useState([]);
// const getMovies = async () => {
//   const response = await fetch(
//     "https://nomad-movies.nomadcoders.workers.dev/movies"
//   );
//   const json = await response.json();
//   setMovies(json);
//   setIsloading(false);
// };
// useEffect(() => {
//   getMovies();
// }, []);
// return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
