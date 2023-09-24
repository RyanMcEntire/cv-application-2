import { ChangeEvent, FormEvent, useState } from 'react';

interface EducationData {
  id: string;
  name: string;
  title: string;
  date: string;
}

interface EducationProps {
  onUpdate: (data: EducationData) => void;
  onDelete: (id: string) => void;
  id: string;
  data: EducationData;
}

export default function Education({ onUpdate, onDelete, id }: EducationProps) {
  const [formData, setFormData] = useState<EducationData>({
    id,
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
    onUpdate(formData);
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
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </>
  );
}
