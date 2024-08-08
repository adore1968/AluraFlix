import { useApp } from "../context/AppContext";
import Loader from "../components/Loader";
import Destacados from "../components/destacados/Destacados";
import Categorias from "../components/categorias/Categorias";

function HomePage() {
  const { isLoading, destacados, categorias } = useApp();

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-5 mt-6">
      <Destacados destacados={destacados} />
      <Categorias categorias={categorias} />
    </div>
  );
}

export default HomePage;
