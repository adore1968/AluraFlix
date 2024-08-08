import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center mt-6 text-center">
      <div>
        <h1 className="text-2xl">Oops!</h1>
        <p className="my-1 text-lg">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg font-bold">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
