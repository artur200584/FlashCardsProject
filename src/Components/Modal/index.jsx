import Form from "../Form";

const Desk = ({ onAddDesk }) => {
  return (
    <section className="modal flex items-center justify-center flex-col  bg-black rounded-md fixed inset-5 z-[999]">
      <h2 className="mb-1.5 text-center text-[55px] font-bold">New Desk</h2>
      <Form onAddDesk={onAddDesk} />
    </section>
  );
};

export default Desk;
