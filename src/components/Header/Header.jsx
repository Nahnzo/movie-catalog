import styles from "./header.module.css";

const Header = () => {
  return (
    <section className={styles.header}>
      <nav className={styles.navigation}>
        <h3>Хочу посмотреть</h3>
        <h3>Моя коллекция</h3>
        <h3>Что посмотреть?</h3>
        <h3>Мои рецензии</h3>
      </nav>
    </section>
  );
};

export default Header;
