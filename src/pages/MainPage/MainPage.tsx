import styles from "./style.module.css";
import Card from "../../components/Card/Card";
import { ICountries } from "../../interfaces/interfaces";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import Dropdown from "../../components/Dropdown/Dropdown";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

export default function MainPage() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState<ICountries[] | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    // let params = "";
    if (!selectedRegion) {
      axios.get("https://restcountries.com/v3.1/all").then((resp) => {
        setData(resp.data);
      });
    } else {
      axios
        .get(`https://restcountries.com/v3.1/region/${selectedRegion}`)
        .then((resp) => {
          setData(resp.data);
        });
    }
  }, [selectedRegion]);

  // const { data, error }: IQuery = useQuery({
  //   queryKey: ["countries"],
  //   queryFn: getCountries,
  // });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const totalPages = Math.ceil(Number(data?.length) / pageSize);
  const startPageIndex = currentPage * pageSize - pageSize;
  const endPageIndex = startPageIndex + pageSize;

  if (!data) {
    return <Spinner />;
  }

  return (
    <section className={styles.main}>
      <div className="conteiner">
        {/* {error && <div>{error.message + " :("} </div>} */}
        <div className={styles.filters}>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <Dropdown setSelectedRegion={setSelectedRegion} />
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
