import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;
  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la cancion "${search.song}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyrics />
      )}
      {bio.artists ? (
        <SongArtist />
      ) : (
        <Message
          msg={`Error: no existe el interprete ${search.artist}`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
