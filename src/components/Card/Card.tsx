import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { useTheme } from "../../contexts/ThemeContext";

interface IProps {
  name: string;
  population: number;
  region: string;
  image: string;
  capital: string;
  id: string;
}

export default function Card({
  name,
  population,
  region,
  image,
  capital,
  id,
}: IProps) {
  const navigate = useNavigate();
  const { dark } = useTheme();
  return (
    <div
      onClick={() => navigate(`/country/${id}`)}
      className={`${styles.card} ${dark && styles.dark}`}
    >
      <img src={image} alt="" />
      <div className={styles.inner}>
        <p className={styles.name}>{name}</p>
        <div className={styles.info}>
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
      </div>
    </div>
  );
}
