import Componente from "./components/Componente.jsx";
import Propiedades from "./components/Propiedades.jsx";
import './App.css'
import Estado from "./components/Estado.jsx";
import RenderizadoCondicional from "./components/RenderizadoCondicional.jsx";
import RenderizadoElementos from "./components/RenderizadoElementos.jsx";
import {EventosES6,EventosES7, MasSobreEventos} from "./components/Eventos.jsx";
import Padre from "./components/ComunicacionComponentes.jsx";
import CicloVida from "./components/CicloVida.jsx";
import AjaxApi from "./components/AjaxAPI.jsx";
import ContadorHooks from "./components/ContadorHooks.jsx";
import ScrollHooks from "./components/ScrollHooks.jsx";
import RelojHooks from "./components/RelojHooks.jsx";
import AjaxHooks from "./components/AjaxHooks.jsx";
import HooksPersonalizados from "./components/HooksPersonalizados.jsx";

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

        <section>
          {/*<Componente msg="Hola soy un componente, desde una prop" />*/}
          {/*<Componente msg="Hola soy un componente Funcional, desde una prop" />*/}
          <Componente msg="Hola soy un componente Funcional Expresado, desde una prop" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto" 
            numero={19} 
            booleano={false} 
            arreglo={[1,2,3]} 
            objeto={{nombre:"jon",correo:"Jonmircha@gmailñ.com"}}
            elementoReact={<i>Esto es un elemento React</i>}
            funcion={num => num * num}
            componenteReact={<Componente msg="Soy un componente pasado como Prop" />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <Padre />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApi />
          <hr />
          <ContadorHooks titulo="Seguidores" />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <HooksPersonalizados /> 
          <hr />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </section>
      </div>
    </>
  )
}

export default App
