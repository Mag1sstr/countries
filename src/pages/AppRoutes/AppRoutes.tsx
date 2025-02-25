import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import CountryPage from "../CountryPage/CountryPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/country/:id" element={<CountryPage />} />
    </Routes>
  );
}
