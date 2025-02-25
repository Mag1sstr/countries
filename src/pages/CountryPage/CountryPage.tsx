import { useParams } from "react-router-dom";
import styles from "./style.module.css";
import { useQuery } from "@tanstack/react-query";
import { getInfo } from "../../API/api";

export default function CountryPage() {
  // https://restcountries.com/v3.1/alpha/170

  const { id } = useParams();
  console.log(id);
  const { data } = useQuery({ queryKey: ["info"], queryFn: getInfo });

  console.log(data);

  return (
    <section>
      <div className="conteiner">
        <h1>Country page</h1>
      </div>
    </section>
  );
}
