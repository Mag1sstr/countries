import { useNavigate, useParams } from "react-router-dom";
import styles from "./style.module.css";
import { useQuery } from "@tanstack/react-query";
import { getInfo } from "../../API/api";
import arrowLeft from "../../images/arrowLeft.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { ICountryInfo, INative } from "../../interfaces/interfaces";

export default function CountryPage() {
  // https://restcountries.com/v3.1/alpha/170
  const [country, setCountry] = useState<ICountryInfo[] | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/alpha/${id}`).then((resp) => {
      setCountry(resp.data);
    });
  }, [id]);
  console.log(country);

  if (!country) {
    return <Spinner />;
  }

  return (
    <section>
      <div className="conteiner">
        <button onClick={() => navigate(-1)} className={styles.btn}>
          <img className={styles.img} src={arrowLeft} alt="" />
          Back
        </button>
        {country.map((item) => {
          const languages = Object.values(item.languages);
          const native: INative[] = Object.values(item.name.nativeName);
          console.log(native);

          return (
            <div key={item.ccn3} className={styles.row}>
              <img className={styles.flag} src={item.flags.svg} alt="" />
              <div className={styles.info}>
                <h2 className={styles.title}>{item.name.common}</h2>
                <div className={styles.info__row}>
                  <div className={styles.col}>
                    {native.length && (
                      <p className={styles.text}>
                        <span className={styles.span}>Native Name:</span>
                        {native.map((n, i) => (
                          <span>
                            {i < native.length - 1 ? `${n.common}, ` : n.common}
                          </span>
                        ))}
                      </p>
                    )}
                    <p className={styles.text}>
                      <span className={styles.span}>Population:</span>{" "}
                      {item.population}
                    </p>
                    <p className={styles.text}>
                      <span className={styles.span}>Region:</span> {item.region}
                    </p>
                    {item.subregion && (
                      <p className={styles.text}>
                        <span className={styles.span}>Sub Region:</span>{" "}
                        {item.subregion}
                      </p>
                    )}
                    <p className={styles.text}>
                      <span className={styles.span}>Capital:</span>{" "}
                      {item.capital}
                    </p>
                  </div>
                  <div className={styles.col}>
                    {item.tld && (
                      <p className={styles.text}>
                        <span className={styles.span}>Top level domain:</span>{" "}
                        {item.tld}
                      </p>
                    )}
                    {languages.length && (
                      <p className={styles.text}>
                        <span className={styles.span}>Languages:</span>
                        {languages.map((lang, i) => (
                          <span>
                            {i < languages.length - 1 ? `${lang}, ` : lang}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
                <div className={styles.borders}>
                  Border Countries:
                  <div className={styles.borders__row}>
                    {item.borders ? (
                      item.borders.map((c) => (
                        <span className={styles.borderCountry}>{c}</span>
                      ))
                    ) : (
                      <span>There is not</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
