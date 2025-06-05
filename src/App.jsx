import { useEffect, useState } from "react";
import useDarkMode from "./hooks/useDarkMode";
import Layout from "./components/Layout";
import SkipsList from "./components/SkipsList";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
function App() {
  const [skips, setSkips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [isDark, setIsDark] = useDarkMode();

  function handleSelectedId(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseSelected() {
    setSelectedId(null);
  }

  useEffect(() => {
    async function fetchSkipsData() {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const res = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );

        if (!res.ok) throw new Error("Something went wrong with fetching data");

        const data = await res.json();

        setSkips(data);
        setErrorMessage("");
      } catch (err) {
        setErrorMessage(err.message);
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    handleCloseSelected();
    fetchSkipsData();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(isDark ? "light-mode" : "dark-mode");
    root.classList.add(isDark ? "dark-mode" : "light-mode");
  }, [isDark]);

  return (
    <Layout
      onSelectSkip={handleSelectedId}
      isDark={isDark}
      setIsDark={setIsDark}
      selectedId={selectedId}
    >
      {isLoading && (
        <div className="centered">
          <Loader />
        </div>
      )}
      {!isLoading && !errorMessage && (
        <SkipsList
          skips={skips}
          onSelectSkip={handleSelectedId}
          selectedId={selectedId}
        />
      )}
      {!isLoading && errorMessage && (
        <div className="centered">
          <ErrorMessage message={errorMessage} />
        </div>
      )}
    </Layout>
  );
}

export default App;
