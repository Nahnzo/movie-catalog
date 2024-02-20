import styles from "./pageError.module.scss";
import Button from "shared/ui/Button/Button";

const PageError = () => {
  const reloadPage = () => {
    document.location.reload();
  };

  return (
    <>
      <h1>Произошла ошибка</h1>
      <Button handler={reloadPage} styles={styles.reloadBtn}>
        Обновить страницу
      </Button>
    </>
  );
};

export default PageError;
