import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, laoding } = useFetch(url);
  console.log(data, error, laoding);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}:${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.provincias || data.municipios || data.localidades;
  console.log(options);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {laoding && <Loader />}
      <select name={id} id={id} onChange={handleChange} selectIndex={0}>
        <option value="">Elije un {title}</option>
        {data &&
          options.map((el) => <option value={el.nombre}>{el.nombre}</option>)}
      </select>
    </>
  );
};

export default SelectList;
