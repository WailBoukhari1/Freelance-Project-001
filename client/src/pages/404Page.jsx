import UserLayout from "../layout/user/UserLayout";

const NotFoundPage = () => {
  return (
    <UserLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-primary mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-primary mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded hover:bg-pink100 hover:text-white transition duration-300 ease-in-out">
          Go Back Home
        </button>
      </div>
    </UserLayout>
  );
};

export default NotFoundPage;
