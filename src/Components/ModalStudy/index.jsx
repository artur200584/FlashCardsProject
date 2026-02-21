import Button from "../Button";
import Card from "../Card";
import { useOpenStudyDesk } from "../store/StudyStore";
import { useDeskStore } from "../store/DeskStore";
import { useOpenCard } from "../store/StudyStore";
import box from "../../assets/box.png";

const ModalStudy = () => {
  const closeStudyDesk = useOpenStudyDesk((state) => state.closeStudyDesk);
  const activeDeskId = useOpenStudyDesk((state) => state.activeDeskId);
  const desk = useDeskStore((state) =>
    state.desk.find((i) => i.id === activeDeskId)
  );
  const isOpenCard = useOpenCard((state) => state.isOpenCard);
  const openCard = useOpenCard((state) => state.openCard);

  const name = desk?.name;

  return (
    <section className="flex flex-col w-[80%] h-[500px] bg-accent items-center justify-center rounded-sm">
      <div className="flex flex-start w-[90%] p-[10px] bg-[var(--color-bg-secondary)] justify-between items-center m-[10px] rounded-lg">
        <h2>{name}</h2>
        <span>Cards</span>
        <Button variant="button" onClick={closeStudyDesk}>
          Clouse
        </Button>
      </div>
      <span className="border-2 w-[1px] w-full"></span>
      <div className="flex flex-col gap-3 m-auto">
        {isOpenCard ? (
          <Card />
        ) : (
          <>
            <img src={box} alt="image" />
            <Button variant="button" onClick={openCard}>
              Add Card
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default ModalStudy;
