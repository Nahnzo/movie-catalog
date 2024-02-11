import { memo } from "react";
import Portal from "../Portal/Portal";
import styles from "./modal.module.scss";

const Modal = memo(({ children, isOpen, onClose, style }) => {
  return (
    <Portal>
      <div className={`${styles.modalOverlay} ${isOpen ? styles.visible : ""}`} onClick={onClose}>
        <div className={style ? style : styles.modalContent} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
});

export default Modal;
