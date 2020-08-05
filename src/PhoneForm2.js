import React, { useState } from "react";

const PhoneForm2 = (props) => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    //페이지 리로딩 방지
    e.preventDefault();
    props.onCreate(values);
    setValues({
      name: "",
      phone: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="이름"
          value={values.name}
          onChange={handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={values.phone}
          onChange={handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
        <div>
          {values.name} {values.phone}
        </div>
      </form>
    </div>
  );
};

export default PhoneForm2;
