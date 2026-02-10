import { useEffect, useState } from "react";
import RootLayout from "./Components/RootLayout";
import Modal from "./Components/Modal";
import DeskList from "./Components/DeskList";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [desInfo, setDeskInfo] = useState(() => {
    const savedDesks = localStorage.getItem("desks");
    return savedDesks ? JSON.parse(savedDesks) : [];
  });

  useEffect(() => {
    localStorage.setItem("desks", JSON.stringify(desInfo));
  }, [desInfo]);

  const addDesk = (name, emoji) => {
    setDeskInfo((prev) => [...prev, { name, emoji }]);
    setIsOpen(false);
  };

  return (
    <RootLayout isOpenDesk={() => setIsOpen(true)}>
      <DeskList desks={desInfo} />
      {isOpen && <Modal onAddDesk={addDesk} />}
    </RootLayout>
  );
}

export default App;
