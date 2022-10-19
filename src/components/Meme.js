import React from "react";

const Meme = () => {
  const [inputData, setInputData] = React.useState({
    topText: "",
    bottomText: "",
  });

  const handleChange = (event) => {
    setInputData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  console.log(inputData);
  return (
    <form>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Top text"
        className="form--input"
        value={inputData.topText}
        name="topText"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Bottom text"
        className="form--input"
        value={inputData.bottomText}
        name="bottomText"
      />
      <button className="form--button">Get a new meme image 🖼</button>
    </form>
  );
};

export default Meme;
