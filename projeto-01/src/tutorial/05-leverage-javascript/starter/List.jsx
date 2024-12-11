import { people } from "../../../data";
import { Person } from "./Person";

export function List() {
  return (
    <div>
      {people.map((person) => (
        <Person key={person.name} {...person} />
      ))}
    </div>
  );
}
