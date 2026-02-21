import Button from "../Button";
import Inputs from "../InputField";
import EmojiPicker from "emoji-picker-react";
import { useDeskStore } from "../store/DeskStore";
import { useFormStore } from "../store/FormStore";

const Form = () => {
  const setInputValue = useFormStore((state) => state.setInputValue);
  const inputValue = useFormStore((state) => state.inputValue);
  const error = useFormStore((state) => state.error);
  const setError = useFormStore((state) => state.setError);
  const emoji = useFormStore((state) => state.emoji);
  const setEmoji = useFormStore((state) => state.setEmoji);
  const onAddDesk = useDeskStore((state) => state.addDesk);
  const resetForm = useFormStore((state) => state.resetForm);

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

    onAddDesk(value, emoji);
    resetForm();
  }

  return (
    <section className="form">
      <form
        className="flex items-center overflow-hidden gap-[10px] flex-wrap  mx-auto"
        action="/"
        onSubmit={handleSubmit}
      >
        <Inputs
          label="Desk Name"
          palsholder="Вуудіть назву колоди"
          value={inputValue}
          onChange={handleNameChange}
          error={error}
        />

        <div className="flex flex-col justify-center items-center w-full">
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
