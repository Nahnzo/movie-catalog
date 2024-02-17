import Modal from "shared/ui/Modal/Modal";
import classes from "./modalResultMovies.module.scss";

const ModalResultMovies = ({ isOpen, onClose, movies, handleCard }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} style={classes.modal}>
      {movies?.map((item) => (
        <img
          className={classes.cardModal}
          key={item.id}
          src={item.poster?.previewUrl || item.poster}
          alt={item.title}
          onClick={() => handleCard(item)}
        />
      ))}
    </Modal>
  );
};

export default ModalResultMovies;
