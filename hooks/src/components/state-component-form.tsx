import { memo, useState } from 'react';

const StateComponentForm = memo(function StateComponentForm() {
  const [form, setForm] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  const [version, setVersion] = useState(0);

  const handleClick = () => {
    setVersion((prevVersion) => prevVersion + 1);
  };

  return (
    <>
      <label>
        First name:
        <input
          key={version}
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
      <button
        onClick={() =>
          setForm({
            ...form,
            email: '',
            firstName: '',
            lastName: '',
          })
        }>
        reset form
      </button>
      <button
        onClick={() =>
          setForm({
            ...form,
            firstName: '',
          })
        }>
        reset the firstname
      </button>
      <button onClick={() => handleClick}>
        rerender the input for the first name
      </button>
    </>
  );
});

export default StateComponentForm;
