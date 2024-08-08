/* eslint-disable react/prop-types */
function Destacado({ destacado }) {
  const { id_yt, color, categoria, titulo, descripcion, url } = destacado;

  return (
    <div
      style={{
        backgroundImage: `url(http://img.youtube.com/vi/${id_yt}/2.jpg)`,
      }}
      className="md:flex-row md:justify-between flex flex-col items-center min-h-screen gap-5 p-6 text-white"
    >
      <div className="md:text-left text-center">
        <h2
          style={{ backgroundColor: `rgb(${color})` }}
          className="md:text-4xl inline-block p-4 text-2xl font-bold text-center"
        >
          {categoria}
        </h2>
        <h3 className="mt-1 mb-1.5 text-xl font-semibold">{titulo}</h3>
        <p className="text-lg">{descripcion}</p>
      </div>
      <div className="md:w-fit flex-1 w-full">
        <iframe
          src={url}
          title={titulo}
          style={{
            boxShadow: `0px 0px 5px 5px rgb(${color})`,
            borderColor: `rgb(${color})`,
          }}
          className="md:w-fit md:ml-auto w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}

export default Destacado;
