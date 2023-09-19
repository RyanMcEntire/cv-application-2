import { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function General() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}`
    );
  };

  return (
    <>
      <div className="bg-slate-100 p-4">
        <h2>General Info</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="name">Phone: </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <button className="bg-white ml-3" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
}
