import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Search.module.css";

const Search = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput(e.target.value);
  const submit = () => navigate(`/location/${input}`);

  return (
    <div className={style.search}>
      <h1 id={style.name}>Weather App</h1>
      <div className={style.search_row}>
        <input type="search" onChange={handleInput} id={style.location_input} />
        <button onClick={submit} className={style.button}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
