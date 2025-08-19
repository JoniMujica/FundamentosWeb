import { useNavigate } from "react-router-dom";

const SongTableRow = ({id,el,handleDeleteSong}) => {
    console.log(el);

    let navigate = useNavigate();
    
  return (
    <tr>
        <td><img src="https://loremflickr.com/400/400" alt="" /></td>
        <td>Nombre artista</td>
        <td>Nombre Cancion</td>
        <td>
            <button onClick={()=> navigate(`/canciones/${id}`)}>Ver</button>
            <button onClick={()=> handleDeleteSong(id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default SongTableRow