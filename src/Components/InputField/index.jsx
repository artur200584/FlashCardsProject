import clsx from "clsx";

const Inputs = ({ value, onChange, error, label, palsholder, children }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <label className="mr-2.5 text-[20px] font-bold" htmlFor="deckName">
        {label}
      </label>
      <input
        className={clsx(
          "border border-gray-300 px-3",
          error && "border-red-500"
        )}
        type="text"
        id="deckName"
        name="deckName"
        placeholder={!error ? palsholder : error}
        value={value}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default Inputs;
