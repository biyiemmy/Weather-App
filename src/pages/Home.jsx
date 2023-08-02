import { Header, Main, Footer } from "../components";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-blue-400">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};
