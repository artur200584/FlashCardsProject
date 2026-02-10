import { useState } from "react";
import Button from "../Button";
import EmojiPicker from "emoji-picker-react";
import clsx from "clsx";

const Form = ({ onAddDesk }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleEmojiClick = (emojiData) => {
    setEmoji(emojiData.emoji);
  };

  const handleNameChange = (e) => {
    setInputValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const value = inputValue.trim();

    if (value === "") {
      setError("Веддіть назву колоди");
      return;
    }

    onAddDesk(inputValue, emoji);
    setInputValue("");
    setEmoji("");
  }

  return (
    <section className="form">
      <form
        className="flex items-center gap-[10px] flex-wrap w-[60%] mx-auto"
        action="/"
        onSubmit={handleSubmit}
      >
        <div className="flex">
          <label className="mr-2.5 text-[20px] font-bold" htmlFor="deckName">
            Deck Name
          </label>
          <input
            className={clsx(
              "border border-gray-300 px-3",
              error && "border-red-500"
            )}
            type="text"
            id="deckName"
            name="deckName"
            placeholder={!error ? "Enter deck name" : error}
            value={inputValue}
            onChange={handleNameChange}
          />
        </div>

        <div>
          <p className="text-[20px] font-bold">Виреріть Emodji для колоди</p>
          <EmojiPicker onEmojiClick={handleEmojiClick} />

          {emoji && (
            <p className="mb-2 text-2xl">
              Обране: <span>{emoji}</span>
            </p>
          )}

          <Button className="mt-[20px]" type="submit" variant="button">
            Save
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
