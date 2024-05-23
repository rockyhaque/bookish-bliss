import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="min-h-[calc(100vh-68px)] flex flex-col justify-center items-center">
      <img className="w-[800px]" src="https://i.ibb.co/nmWx8cM/404.jpg" alt="" />

      <div>
        <Link to="/" className="btn btn-info">Go Back</Link>
      </div>
      </div>
    </div>
  );
}
