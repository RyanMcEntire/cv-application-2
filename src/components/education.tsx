import { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
  name: string;
  title: string;
  date: string;
}

export default function Education() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    title: '',
    date: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Name: ${formData.name}, Title: ${formData.title}, Date Completed: ${formData.date}`
    );
  };

  return (
    <>
      <div className="bg-slate-100 p-4">
        <h2>Education</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">School Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Title of Study: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="name">Date completed: </label>
          <input
            type="date"
            name="date"
            value={formData.date}
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
