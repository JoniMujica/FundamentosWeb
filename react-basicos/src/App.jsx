import './App.css'

function App() {
  let nombre = "Jon";
  let auth = true;
  let estaciones = ["Primavera","Verano","Otoño","Invierno"];

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        <h1>{nombre}</h1>
        <p>	
          {auth? "El usuario esta logueado" : "El usuario no esta logueado"}
        </p>
        <p>
          {2+1}
        </p>
        <ul>
          {estaciones.map((el,index)=> (<li key={index}>{el}</li>))}
        </ul>
      </div>
    </>
  )
}

export default App
