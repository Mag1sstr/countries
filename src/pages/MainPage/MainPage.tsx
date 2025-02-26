import styles from "./style.module.css";
import Card from "../../components/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../../API/api";
import { IQuery } from "../../interfaces/interfaces";
import Pagination from "../../components/Pagination/Pagination";
import { useState } from "react";
import Search from "../../components/Search/Search";
import Dropdown from "../../components/Dropdown/Dropdown";

export default function MainPage() {
  const [searchValue, setSearchValue] = useState("");

  const { data, error }: IQuery = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const totalPages = Math.ceil(Number(data?.length) / pageSize);
  const startPageIndex = currentPage * pageSize - pageSize;
  const endPageIndex = startPageIndex + pageSize;

  return (
    <section className={styles.main}>
      <div className="conteiner">
        {error && <div>{error.message + " :("} </div>}
        <div className={styles.filters}>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <Dropdown />
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          searchValue={searchValue}
        />
        <div className={styles.row}>
          {data
            ?.filter((c) =>
              c.name.common
                .trim()
                .toLowerCase()
                .includes(searchValue.trim().toLowerCase())
            )
            .slice(startPageIndex, endPageIndex)
            .map((item) => {
              return (
                <Card
                  key={item.name.common}
                  name={item.name.common}
                  population={item.population}
                  image={item.flags.png}
                  region={item.region}
                  capital={item.capital}
                  id={item.ccn3}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
