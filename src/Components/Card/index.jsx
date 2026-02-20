import Inputs from "../Inputs";
import { useFormStore, useFormcCard } from "../store";
import clsx from "clsx";
import Button from "../Button";

const Card = () => {
  const error = useFormStore((state) => state.error);
  const setError = useFormStore((state) => state.setError);
  const setInputValue = useFormStore((state) => state.setInputValue);
  const inputValue = useFormStore((state) => state.inputValue);

  const inputQuestion = useFormcCard((state) => state.inputQuestion);
  const setInputQuestion = useFormcCard((state) => state.setInputQuestion);
  const inputAnswer = useFormcCard((state) => state.inputAnswer);
  const setInputAnswer = useFormcCard((state) => state.setInputAnswer);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputQuestion.trim() === "" || inputAnswer.trim() === "") {
      setError("Введіть назву картки");
    } else {
      setError("");
    }
  };

  return (
    <section className="flex w-auto h-auto p-[10px] rounded-sm bg-again">
      <Inputs
        label="Card Qweihen"
        palsholder="ведіть питання"
        value={inputQuestion}
        error={error}
        onChange={(e) => setInputQuestion(e.target.value)}
      >
        <form
          className="flex flex-col items-center gap-[10px]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className=" mr-2.5 text-[20px] font-bold" htmlFor="answer">
              answer
            </label>
            <input
              className={clsx(
                "border border-gray-300 px-3",
                error && "border-red-500"
              )}
              type="text"
              placeholder="ведіть відповідь"
              id="answer"
              value={inputAnswer}
              onChange={(e) => setInputAnswer(e.target.value)}
            />
          </div>
          <Button type="submit" variant="button">
            Save
          </Button>
        </form>
      </Inputs>
    </section>
  );
};

export default Card;
