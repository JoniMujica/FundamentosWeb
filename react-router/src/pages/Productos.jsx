import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Productos = () => {
    //let location = useLocation();
    //console.log(location);
    let {search} = useLocation();
    let query = new URLSearchParams(search);
    console.log(query);

    const LIMIT = 20;
    let start = parseInt(query.get("inicio")) || 1;
    let end = parseInt(query.get("fin")) || LIMIT;
    // console.log(start,end);
    let h = useNavigate();
    // console.log(h);
    
    const handlePrev = (e) => {
      h(`?inicio=${start - LIMIT}&fin=${end-LIMIT}`)
    }
    const handleNext = (e) => {
      h(`?inicio=${start + LIMIT}&fin=${end+LIMIT}`)
    }
    
  return (
    <div>
        <h3>Productos</h3>
        <p>Mostrando productos del <b>{start}</b> al <b>{end}</b></p>
        {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
        <button onClick={handleNext}>Adelante</button>
    </div>
  )
}

export default Productos