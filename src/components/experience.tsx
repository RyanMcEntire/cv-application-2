import { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
  name: string;
  title: string;
  dateStart: string;
  dateEnd: string;
}

export default function Experience() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    title: '',
    dateStart: '',
    dateEnd: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Name: ${formData.name}, Title: ${formData.title}, Date Started: ${formData.dateStart}, Date Ended: ${formData.dateEnd}`
    );
  };

  return (
    <>
      <div className="bg-slate-100 p-4">
        <h2>Experience</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Company Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Position Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="name">Date Started: </label>
          <input
            type="date"
            name="date"
            value={formData.dateStart}
            onChange={handleChange}
          />
          <label htmlFor="name">Date Ended: </label>
          <input
            type="date"
            name="date"
            value={formData.dateEnd}
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
