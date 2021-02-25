import React, { useState, FC } from "react";

interface PersonState {
  name: string;
  age: number;
}

export const Person: FC<{}> = () => {
  const [person, setPerson] = useState<PersonState>({
    name: "Ivan",
    age: 24,
  });

  return (
    <div>
      <button
        onClick={() => {
          setPerson({
            name: "Ivan the Great",
            age: 500,
          });
        }}
      >
        Click me, yo!
      </button>
      <p>
        {person.name} + {person.age}
      </p>
    </div>
  );
};
