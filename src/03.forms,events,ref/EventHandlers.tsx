import { ChangeEventHandler, KeyboardEvent, MouseEvent, useState } from "react";

const EventHandlers = () => {
  const [name, setName] = useState("");

  //Change event
  //   function handleChange(e: ChangeEvent<HTMLInputElement>) {
  //     setName(e.target.value);
  //   }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  //click event
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  const handleRadio: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.name, e.target.value);
  };

  //key events
  const handleKeys = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log("key : " + e.key);
    console.log("keycode :" + e.keyCode);
    console.log("code:" + e.code);

    console.log(e.target);
  };


  
  return (
    <div>
      <h1>Challenge-3 Event Handlers</h1>
      <p>{name}</p>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
      <div>
        <input
          type="radio"
          name="gender"
          value={"Male"}
          onChange={handleRadio}
        />
        Male
        <input
          type="radio"
          name="gender"
          value={"Female"}
          onChange={handleRadio}
        />
        Female
      </div>
      <br />

      <input type="text" onKeyDown={handleKeys} />
    </div>
  );
};

export default EventHandlers;
