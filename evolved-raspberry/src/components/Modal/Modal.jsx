import "./Modal.css";
export default function Modal({ setShowModal }) {
  return (
    <div className="modal-container d-flex justify-content-center align-items-center">
      <form className="d-flex align-items-center flex-column">
        <p>Completa el formulario</p>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="e-mail" />
        <input type="textarea" placeholder="Mensaje (opcional)" />
        <button className="submit">Quiero mi evento</button>
        <button
          className="cancel"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(false);
          }}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
