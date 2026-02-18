import Header from "../Header";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="flex justify-center">{children}</main>
    </div>
  );
};

export default RootLayout;
