import React from "react";
import Detail2 from "./Detail2";
import PhoneForm from "./PhoneForm";
import PhoneForm2 from "./PhoneForm2";

const App = () => {
  const handleCreate = (data) => {
    console.log(data);
  };
  return (
    <div>
      <PhoneForm2 onCreate={handleCreate} />
    </div>
  );
};

export default App;
