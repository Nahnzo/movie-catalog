import { useState } from "react";

export const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleModal = () => {
    setIsOpened((prev) => !prev);
  };
  return {
    isOpened,
    handleModal,
  };
};
