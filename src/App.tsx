import React, { useState } from 'react';
import List from './components/List';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import { v4 as uuidv4 } from 'uuid';
import DisplayCV from './components/DisplayCV';

interface GeneralData {
  name: string;
  email: string;
  phone: string;
}

interface ExperienceData {
  id: string;
  name: string;
  title: string;
  dateStart: string;
  dateEnd: string;
}

interface EducationData {
  id: string;
  name: string;
  title: string;
  date: string;
}

const App = () => {
  const [general, setGeneral] = useState<GeneralData>({
    name: '',
    email: '',
    phone: '',
  });
  const [educations, setEducations] = useState<EducationData[]>([]);
  const [experiences, setExperiences] = useState<ExperienceData[]>([]);

  const handleUpdate = <T extends object>(
    data: T,
    index: number | null,
    updater: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
    updater((prevData) => {
      if (index !== null) {
        const updatedData = [...prevData];
        updatedData[index] = data;
        return updatedData;
      } else {
        return [...prevData, data];
      }
    });
  };

  const handleGeneralUpdate = (data: GeneralData) => {
    setGeneral(data);
  };

  const handleAddNewExperience = () => {
    const newExperience: ExperienceData = {
      id: uuidv4(),
      name: '',
      title: '',
      dateStart: '',
      dateEnd: '',
    };
    setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
  };

  const handleAddNewEducation = () => {
    const newEducation: EducationData = {
      id: uuidv4(),
      name: '',
      title: '',
      date: '',
    };
    setEducations((prevEducations) => [...prevEducations, newEducation]);
  };

  return (
    <>
      <General onUpdate={handleGeneralUpdate} />
      <button
        className="border-solid border-2 p-1 m-3"
        onClick={() => handleAddNewExperience()}
      >
        Add New Experience
      </button>
      <List
        items={experiences}
        onUpdate={(data: ExperienceData, index: number) =>
          handleUpdate(data, index, setExperiences)
        }
        renderer={(data, onUpdate) => (
          <Experience
            key={data.id}
            id={data.id}
            data={data}
            onUpdate={onUpdate}
          />
        )}
      />
      <button
        className="border-solid border-2 p-1 m-3"
        onClick={() => handleAddNewEducation()}
      >
        Add New Education
      </button>
      <List
        items={educations}
        onUpdate={(data: EducationData, index: number) =>
          handleUpdate(data, index, setEducations)
        }
        renderer={(data, onUpdate) => (
          <Education
            key={data.id}
            id={data.id}
            data={data}
            onUpdate={onUpdate}
          />
        )}
      />
      <DisplayCV
        general={general}
        educations={educations}
        experiences={experiences}
      />
    </>
  );
};

export default App;
