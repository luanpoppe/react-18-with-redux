import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = (id) => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((p) => p.id != id));
  };
  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)} type="button">
              remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={clearAllItems}
        type="button"
        style={{ marginTop: "2rem" }}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
