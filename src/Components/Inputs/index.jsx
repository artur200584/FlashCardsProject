import clsx from "clsx";

const Inputs = ({ value, onChange, error }) => {
  return (
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
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Inputs;
