import React, {useState,useEffect} from "react"
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";
import Loader from "./Loader";
import { helperHttp } from "../helpers/helpHttp";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import SongTable from "./SongTable";
import SongPage from "../pages/SongPage";

let mySongInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongInit);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
        songUrl = `https://private-anon-4eb9b6bd0a-lyricsovh.apiary-mock.com/v1/${artist}/${song}`;

      console.log(artistUrl, songUrl);
      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helperHttp().get(artistUrl),
        helperHttp().get(songUrl),
      ]);
      console.log(artistRes, songRes);
      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };
    fetchData();

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    console.log(data);
    setSearch(data);
  };

  const handleSaveSong = () => {
    alert("Salvando cancion en favoritos");
    let currentSong = {
      search,
      lyric,
      bio,
    };

    setMySongs((mySongs) => [...mySongs, currentSong]);
    setSearch(null);
  };
  const handleDeleteSong = (id) => {
    //alert(`Eliminando cancion con el id: ${id}`);

    let isDelete = window.confirm(
      `Estas seguro de eliminar la cancion con el id "${id}"?`
    );
    if (isDelete) {
      let songs = mySongs.filter((el, index) => index != id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };

  return (
    <div>
      <Router basename="canciones">
        <header>
          <h2>Song Search</h2>
          <Link to="/">Home</Link>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SongForm
                    handleSearch={handleSearch}
                    handleSaveSong={handleSaveSong}
                  />
                  <SongTable
                    mySongs={mySongs}
                    handleDeleteSong={handleDeleteSong}
                  />
                  <h2>Tabla de canciones</h2>
                  {search && !loading && (
                    <SongDetails search={search} lyric={lyric} bio={bio} />
                  )}
                </>
              }
            />
            <Route
              path="/:id"
              element={
                <>
                  <h2>Pagina de cancion</h2>
                  <SongPage mySongs={mySongs} />
                </>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </article>
      </Router>
    </div>
  );
};

export default SongSearch