import Header from "../Header";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header onDeskClick={() => setDesk(true)} />
      <main className="flex items-center justify-center">{children}</main>
    </>
  );
};

export default RootLayout;
