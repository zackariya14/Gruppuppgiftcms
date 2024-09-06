export default function NotFoundPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
        <h1 className="text-7xl font-bold text-blue-600">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          Sorry, the page you're looking for doesn't exist. It may have been removed or renamed.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Go Back to Home
          </a>
        </div>
        <img
          src="/404.webp"
          alt="404 Illustration"
          className="w-3/4 md:w-1/2 h-auto mt-12 rounded-lg shadow-lg"
        />
      </div>
    );
  }
  