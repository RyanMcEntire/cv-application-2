import React, { useState } from 'react';
import List from './components/List';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

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
  const [general, setGeneral] = useState<GeneralData | object>(
    {}
  );
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

  return (
    <>
      <General
      />
      <List
        items={experiences}
        onUpdate={(data: ExperienceData, index: number) =>
          handleUpdate(data, index, setExperiences)
        }
        renderer={(data, onUpdate) => <Experience key={data.id} data={data} onUpdate={(data) =>
          handleUpdate(data, experiences.indexOf(data), setExperiences)} />}
      />
    </>
  );
};

export default App;
