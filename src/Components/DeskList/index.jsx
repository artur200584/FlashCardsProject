import Button from "../Button";
import { useDeskStore } from "../store";
import { useOpenStudyDesk } from "../store";
import book from "../../assets/book.png";

const DeskList = () => {
  const desks = useDeskStore((state) => state.desk);
  const deleteDesk = useDeskStore((state) => state.deleteDesk);
  const isOpenStudyDesk = useOpenStudyDesk((state) => state.openStudyDesk);

  return (
    <section className="deskList flex gap-[20px] p-[20px]">
      <div className="flex w-screen flex-wrap gap-[10px] justify-center items-center">
        {desks.map((item) => {
          return (
            <div className="flex w-[400px] h-[500px] bg-[var(--new-color)] rounded-md p-[10px]">
              <div className="flex flex-col justify-center  w-full h-full gap-[5px]">
                <div className="flex items-center gap-[5px]">
                  <p>{item.emoji}</p>
                  <h2 className="text-[30px]">{item.name}</h2>
                </div>
                <div className="mt-auto flex justify-between">
                  <Button
                    variant="button"
                    className="w-[48%]"
                    onClick={isOpenStudyDesk}
                  >
                    <img className="mr-[5px]" src={book} alt="image" />
                    Study Mode
                  </Button>
                  <Button
                    variant="button"
                    className="w-[48%]"
                    onClick={() => deleteDesk(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DeskList;
