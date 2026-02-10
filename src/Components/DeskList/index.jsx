const DeskList = ({ desks }) => {
  return (
    <section className="deskList flex gap-[20px] p-[20px]">
      {desks.map((item) => {
        return (
          <div className="flex items-start w-[200px] h-[300px] bg-[var(--new-color)] rounded-md p-[10px]">
            <div className="flex justify-center items-center gap-[5px]">
              <p>{item.emoji}</p>
              <h2 className="text-2xl">{item.name}</h2>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DeskList;
