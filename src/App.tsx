import Header from "./components/Header/Header";
import { useTheme } from "./contexts/ThemeContext";
import AppRoutes from "./pages/AppRoutes/AppRoutes";

function App() {
  const { dark } = useTheme();
  return (
    <div className={`${dark && "dark"}`}>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
