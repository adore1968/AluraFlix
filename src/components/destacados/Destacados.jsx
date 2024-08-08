/* eslint-disable react/prop-types */
import Destacado from "../destacados/Destacado";

function Destacados({ destacados }) {
  return (
    <>
      {destacados.map((destacado) => (
        <Destacado destacado={destacado} key={destacado.id} />
      ))}
    </>
  );
}

export default Destacados;
