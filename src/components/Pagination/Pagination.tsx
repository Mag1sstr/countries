import styles from "./style.module.css";

interface IProps {
  totalPages: number;
  setCurrentPage: (n: number) => void;
  currentPage: number;
}
export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: IProps) {
  return (
    <div className={styles.row}>
      {totalPages &&
        [...Array(totalPages)].map((_, i) => {
          return (
            <div
              key={i}
              className={`${styles.item} ${
                i + 1 === currentPage && styles.active
              }`}
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
