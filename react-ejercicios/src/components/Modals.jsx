import React from 'react'
import Modal from './Modal'
import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import SongSearch from "./SongSearch";

const Modals = () => {
  const [isPoenModal1, openModal1, closeModal1] = useModal(false);
  const [isPoenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isPoenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="https://picsum.photos/200/200" alt="any" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isPoenModal2} closeModal={closeModal2}>
        <h3>Otro modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          laudantium possimus minima unde debitis veritatis pariatur optio ab
          repellat. Exercitationem, perspiciatis porro veritatis eveniet
          repellat fugiat debitis aspernatur? Quos, nobis!
        </p>
        <img src="https://picsum.photos/200/200" alt="any" />
      </Modal>
      <button onClick={openModalContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
      <button onClick={openModalSong}>Modal Contacto</button>
      <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal>
    </div>
  );
};

export default Modals