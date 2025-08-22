import { useParams } from "react-router-dom"
import SongDetails from "../components/SongDetails"

const SongPage = ({mySongs}) => {
    let {id} = useParams();

    //console.log(id,mySongs, mySongs[id]);
    let currentSong = mySongs[id];

    let {search,lyric,bio} = currentSong;
    
    return <SongDetails search={search} lyric={lyric} bio={bio} />
    //return <h3>Pagina de canciones</h3>
}

export default SongPage