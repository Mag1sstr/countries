import { useTheme } from "../../contexts/ThemeContext";
import styles from "./style.module.css";

interface IProps {
  totalPages: number;
  setCurrentPage: (n: number) => void;
  currentPage: number;
  searchValue?: string;
}
export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
  searchValue,
}: IProps) {
  const { dark } = useTheme();
  return (
    <div className={styles.row}>
      {totalPages &&
        [...Array(totalPages)].map((_, i) => {
          return (
            <div
              key={i}
              className={`${styles.item} ${dark && styles.dark} ${
                i + 1 === currentPage && styles.active
              } ${searchValue?.trim().length && styles.disabled}`}
              onClick={() => {
                setCurrentPage(i + 1);
              }}
            >
              {i + 1}
            </div>
          );
        })}
    </div>
  );
}
