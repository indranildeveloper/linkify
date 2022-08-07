const Form = ({ handleSubmit, handleChange, handleClear, linkText }) => {
  return (
    <form
      className="flex flex-col w-full md:w-1/2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col p-4">
        <label className="mb-4" htmlFor="linkText">
          Enter your links below:
        </label>
        <textarea
          name="linkText"
          id="linkText"
          className="border border-gray-400 resize-none outline-none p-2 rounded-sm h-64 transition-all delay-200 focus:border-blue-500 focus:border-2"
          placeholder="e.g. This is made by Indranil Halder https://github.com/indranildeveloper for https://www.findcoder.io/ challenges"
          value={linkText}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
      <div className="flex mt-2 mr-4">
        <button
          type="button"
          onClick={() => handleClear()}
          className="border ml-auto border-blue-600 text-blue-600 px-4 py-2 rounded-sm transition-all delay-200 hover:bg-blue-200 hover:bg-opacity-40"
        >
          Clear
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-sm ml-4 transition-all delay-200 ease-in hover:bg-blue-500"
        >
          Linkify
        </button>
      </div>
    </form>
  );
};
export default Form;
