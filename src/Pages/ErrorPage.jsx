import { Link, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError()

  const status = error?.status ?? 500;
  const statusText = error?.statusText ?? "Something went wrong"
  const message = error?.data ?? "Please try again later"

  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        <p className="text-6xl font-bold text-blue-600 sm:text-7xl">{status}</p>

        <h1 className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl">
          {statusText}
        </h1>

        <p className="mt-2 text-sm text-gray-500 sm:text-base">{message}</p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Go Back
          </button>

          <Link
            to="/"
            className="rounded-lg bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

