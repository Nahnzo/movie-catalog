import styles from "./footer.module.css";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";

const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.description}>
        <h5 style={{ marginBottom: "10px" }}>Информация для пользователей</h5>
        <hr />
        <h6 style={{ marginTop: "10px" }}>
          Данный сервис не предоставляет возможности для воспроизведение контента,cервис лишь
          предоставляет альтернативные источники для просмотра контента
        </h6>
        <h6>
          * За переход на различные источники сервис ответственности не несет, переходите на свой
          страх и риск
        </h6>
      </div>
      <div className={styles.contacts}>
        <h5>Контактная информация</h5>
        <br />
        <VscGithub className={styles.github} />
        <AiOutlineMail className={styles.gmail} />
        <SlSocialVkontakte className={styles.vk} />
      </div>
    </section>
  );
};

export default Footer;
