import { ChangeEvent, FormEvent, useState } from 'react';

interface GeneralData {
  name: string;
  email: string;
  phone: string;
}

interface GeneralProps {
  onUpdate: (data: GeneralData) => void;
}

export default function General({ onUpdate }: GeneralProps) {
  const [formData, setFormData] = useState<GeneralData>({
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
    onUpdate(formData);
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
          <button
            className="bg-white ml-3 border-solid border-2 p-1"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
