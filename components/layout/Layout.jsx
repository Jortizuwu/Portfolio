import { Footer } from "./Footer";
import { Nabvar } from "./Nabvar";

export const Layout = ({ children }) => {
  return (
    <>
      <Nabvar />
      <main className="w-4/5 sm:w-1/2 mx-auto mt-12 max-w-xl ">
        <div className="h-60 flex justify-center items-center"></div>
        {children}
      </main>
      <Footer />
    </>
  );
};
