import { ChangeEvent, FormEvent, useState } from 'react';

interface ExperienceData {
  id: string;
  name: string;
  title: string;
  dateStart: string;
  dateEnd: string;
}

interface ExperienceProps {
  onUpdate: (data: ExperienceData) => void;
  id: string;
  data: ExperienceData;
}

export default function Experience({ onUpdate, id }: ExperienceProps) {
  const [formData, setFormData] = useState<ExperienceData>({
    id,
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
    onUpdate(formData);
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
          <label htmlFor="title">Position Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="dateStart">Date Started: </label>
          <input
            type="date"
            name="dateStart"
            value={formData.dateStart}
            onChange={handleChange}
          />
          <label htmlFor="dateEnd">Date Ended: </label>
          <input
            type="date"
            name="dateEnd"
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
