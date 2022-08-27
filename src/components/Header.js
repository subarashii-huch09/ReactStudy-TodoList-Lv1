import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>ONLINE TODO LIST</h1>
      <ul className={styles.container}>
        <li className={styles.listItem}>王小明的代辦</li>
        <li className={styles.listItem}>
          <button className={styles.logOutButton}>登出</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
