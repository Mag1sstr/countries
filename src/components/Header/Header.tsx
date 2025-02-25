import styles from "./style.module.css";
import lightImage from "../../images/light.png";
import darkImage from "../../images/dark.png";
import { useTheme } from "../../contexts/ThemeContext";

export default function Header() {
  const { dark, setDark } = useTheme();

  return (
    <header className={`${styles.header} ${dark && styles.dark}`}>
      <div className="conteiner">
        <div className={styles.row}>
          <p className={styles.logo}>Where in the world?</p>
          <div onClick={() => setDark(!dark)} className={styles.theme}>
            <img src={dark ? darkImage : lightImage} alt="light" />
            {dark ? "Light Mode" : "Dark Mode"}
          </div>
        </div>
      </div>
    </header>
  );
}
