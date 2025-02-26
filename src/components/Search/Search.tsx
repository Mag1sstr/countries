import styles from "./style.module.css";
import sImage from "../../images/search.png";
import sDarkImage from "../../images/searchDark.png";
import { useTheme } from "../../contexts/ThemeContext";

interface IProps {
  setSearchValue: (s: string) => void;
  searchValue: string;
}
export default function Search({ searchValue, setSearchValue }: IProps) {
  const { dark } = useTheme();
  return (
    <div className={`${styles.search} ${dark && styles.dark}`}>
      <img className={styles.img} src={dark ? sDarkImage : sImage} alt="" />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
