import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{name || "default value"}</h2>
      {text && div}
      {user && <SomeComponent name={"john"} />}
    </div>
  );
};

export default ShortCircuitExamples;

const SomeComponent = ({ name }) => {
  return <div>{name}</div>;
};
