import styles from "./footer.module.scss";
// import { VscGithub } from "react-icons/vsc";
// import { AiOutlineMail } from "react-icons/ai";
// import { SlSocialVkontakte } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      {/* <div className={styles.description}>
        <h5>Информация для пользователей</h5>
        <hr style={{ margin: "10px 0 10px 0" }} />
        <h6>
          Данный сервис не предоставляет возможности для воспроизведение контента, cервис лишь предоставляет
          альтернативные источники для просмотра контента
        </h6>
        <h6>
          * За переход на различные источники сервис ответственности не несет, переходите на свой страх и риск <br /> *
          Сервис не собирает информацию о пользователях
        </h6>
      </div>
      <div className={styles.contacts}>
        <h5>Контактная информация</h5>
        <hr style={{ margin: "10px 0 10px 0" }} />

        <a href="https://github.com/Nahnzo" target="_blank" rel="noreferrer">
          <VscGithub className={styles.github} onClick={() => null} />
        </a>
        <a href="mailto:dogadaev142@gmail.com" target="_blank" rel="noreferrer">
          <AiOutlineMail className={styles.gmail} />
        </a>
        <a href="https://vk.com/id415915888" target="_blank" rel="noreferrer">
          <SlSocialVkontakte className={styles.vk} />
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
