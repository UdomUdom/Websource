import { useState } from 'react';
import React from 'react';
import FormAction from './FromAction';
import FormExtra from './FormExtra';
import Input from './Input';
import { loginFields } from '../constants/formFields';

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = () => {
    const endpoint = `localhost:5100`;
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginFields),
    })
      .then((response) => response.json())
      .then((data) => {
        //API Success from LoginRadius Login API
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
