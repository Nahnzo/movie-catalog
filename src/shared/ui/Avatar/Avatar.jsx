import cls from "./avatar.module.scss";

const Avatar = ({ styles, image, userName }) => {
  return (
    <div className={`${styles}`}>
      <p className={cls.userName}>{userName}</p>
      <p>Выйти</p>
    </div>
  );
};

export default Avatar;
