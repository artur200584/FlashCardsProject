import Header from "../Header";

const RootLayout = ({ children, isOpenDesk }) => {
  return (
    <div>
      <Header isDaskOpen={isOpenDesk} />
      <main className="flex justify-center">{children}</main>
    </div>
  );
};

export default RootLayout;
