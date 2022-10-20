import React from "react";

const Meme = () => {
  const [inputData, setInputData] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  const handleChange = (event) => {
    setInputData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((response) =>
      response.json().then((data) => setAllMemes(data.data.memes))
    );
  }, []);

  const handleImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setInputData((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  console.log(inputData.randomImage);
  return (
    <main>
      <div className="form">
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
        <button onClick={handleImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={inputData.randomImage} className="meme--image" />
        <h2 className="meme--text top">{inputData.topText}</h2>
        <h2 className="meme--text bottom">{inputData.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
