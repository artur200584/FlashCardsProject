import Button from "../Button";
import Logo from "../../assets/Logo.png";
import { useDeskStore } from "../store";

const Header = () => {
  const isOpen = useDeskStore((state) => state.openModal);

  return (
    <header className="header flex w-screen items-center justify-between p-(--spacing-250)">
      <div className="headerContent flex items-center justify-center gap-(--spacing-125)">
        <img src={Logo} alt="Logo" />
        <h1 className="font-bold text-(--spacing-200)">Flashcards</h1>
      </div>

      <div>
        <Button type="button" variant="primary" onClick={isOpen}>
          + New Deck
        </Button>
      </div>
    </header>
  );
};

export default Header;
