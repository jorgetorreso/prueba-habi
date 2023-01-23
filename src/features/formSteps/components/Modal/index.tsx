import "./Modal.scss";
type Props = {
  children: JSX.Element;
  toggleModal: () => void;
};
export const Modal = ({ children, toggleModal }: Props) => (
  <div className="Modal">
    {children}
    <button className="Modal__close" onClick={toggleModal}>Cerrar</button>
  </div>
);
