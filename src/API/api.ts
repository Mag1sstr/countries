import axios from "axios";

export async function getCountries() {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  const data = response.data;
  return data;
}

export async function getInfo() {
  const response = await axios.get(`https://restcountries.com/v3.1/alpha/140`);
  const data = response.data;
  return data;
}
