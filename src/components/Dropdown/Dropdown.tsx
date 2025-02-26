import { useState } from "react";
import styles from "./style.module.css";
import arrow from "../../images/arrowDown.png";
import { useTheme } from "../../contexts/ThemeContext";

interface IProps {
  setSelectedRegion: (s: string | null) => void;
}
const regions = ["See all", "Africa", "America", "Asia", "Europe", "Oceania"];
export default function Dropdown({ setSelectedRegion }: IProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Filter by Region");
  const { dark } = useTheme();
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`${styles.drop} ${open && styles.open} ${dark && styles.dark}`}
    >
      <p className={styles.item}>
        {title} <img className={styles.img} src={arrow} alt="" />
      </p>
      <div className={styles.drop__items}>
        {regions.map((region) => (
          <p
            key={region}
            onClick={() => {
              setTitle(region);
              setSelectedRegion(region === "See all" ? null : region);
            }}
            className={styles.item}
          >
            {region}
          </p>
        ))}
      </div>
    </div>
  );
}
