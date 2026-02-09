import Header from "../Header";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="flex items-center justify-center">{children}</main>
    </div>
  );
};

export default RootLayout;
