import Form from "../Form";

const Desk = () => {
  return (
    <section className="modal flex overflow-hidden items-center justify-center flex-col  bg-black rounded-md fixed inset-5 z-[999]">
      <h2 className="mb-1.5 text-center text-[55px] font-bold">New Desk</h2>
      <Form />
    </section>
  );
};

export default Desk;
