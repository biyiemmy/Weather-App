import { Header, Main, Footer } from "../components";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};
