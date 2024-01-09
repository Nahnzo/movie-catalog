import { memo } from "react";
import Portal from "../Portal/Portal";
import styles from "./modal.module.css";

const Modal = memo(({ children, isOpen, onClose }) => {
  return (
    <Portal>
      <div className={`${styles.modalOverlay} ${isOpen ? styles.visible : ""}`} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
});

export default Modal;
