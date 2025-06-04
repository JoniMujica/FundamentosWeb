import React from 'react'
import Modal from './Modal'

const Modals = () => {
  return (
    <div>
        <h2>Modales</h2>
        <button>Modal 1</button>
        <Modal>
            <h3>Modal 1</h3>
            <p>Hola este es el contenido de mi modal 1</p>
            <img src="https://picsum.photos/200/200" alt="any" />
        </Modal>
        <button>Modal 2</button>
        <Modal>
            <h3>Otro modal</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laudantium possimus minima unde debitis veritatis pariatur optio ab repellat. Exercitationem, perspiciatis porro veritatis eveniet repellat fugiat debitis aspernatur? Quos, nobis!</p>
            <img src="https://picsum.photos/200/200" alt="any" />
        </Modal>
    </div>
  )
}

export default Modals