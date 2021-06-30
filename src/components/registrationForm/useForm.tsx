import React, { useState } from "react";

const UseForm = (initialValue: any) => {
  const [values, setvalues] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
    console.log(`${value}`);
  };
  return {
    values,
    setvalues,
    handleChange,
  };
};

const Form = (props: any) => {
  return <form>{props.children}</form>;
};
export { UseForm, Form };
