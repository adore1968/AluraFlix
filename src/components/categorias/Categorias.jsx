/* eslint-disable react/prop-types */
import Categoria from "./Categoria";

function Categorias({ categorias }) {
  return (
    <div className="flex flex-col gap-5">
      {categorias.map((categoria) => (
        <Categoria key={categoria.id} categoria={categoria} />
      ))}
    </div>
  );
}

export default Categorias;
