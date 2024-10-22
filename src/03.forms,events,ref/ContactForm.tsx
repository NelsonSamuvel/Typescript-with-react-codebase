import { FormEvent, useRef, useState } from "react";

type FormDataTypes = {
  username: string;
  email: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataTypes>({
    username: "",
    email: "",
  });

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const usernameVal = usernameRef.current!.value;
    const emailVal = emailRef.current!.value;

    setFormData({ username: usernameVal, email: emailVal });

    usernameRef.current!.value = "";
    emailRef.current!.value = "";
  }

  return (
    <div>
      <h1>Challenge-2 Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {formData.username && formData.email && (
        <div>
          <h2>User Information</h2>
          <p>Username :{formData.username}</p>
          <p>Email :{formData.email}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
