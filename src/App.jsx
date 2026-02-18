import RootLayout from "./Components/RootLayout";
import Modal from "./Components/Modal";
import DeckList from "./Components/DeskList";
import ModalStudy from "./Components/ModalStudy";
import { useDeskStore, useOpenStudyDesk } from "./Components/store";

function App() {
  const isOpen = useDeskStore((state) => state.isOpen);
  const isOpenStudyDesk = useOpenStudyDesk((state) => state.isOpenModal);
  return (
    <RootLayout>
      <DeckList />
      {isOpen && <Modal />}
      {isOpenStudyDesk && <ModalStudy />}
    </RootLayout>
  );
}

export default App;
