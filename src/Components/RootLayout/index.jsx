import Header from "../Header";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-center items-center w-full">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
