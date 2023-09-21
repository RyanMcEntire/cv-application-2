const DisplayCV = ({ general, educations, experiences }) => {
  return (
    <div className="">
      <GeneralDisplay general={general} />
      <div>
        <h2 className="">Education</h2>
        <EducationDisplay educations={educations} />
      </div>
      <div>
        <h2 className="">Experience</h2>
        <ExperienceDisplay experiences={experiences} />
      </div>
    </div>
  );
};

const GeneralDisplay = ({ general }) => {
  if (general) {
  return (
    <>
      <div>
        <h1 >{general.name}</h1>
        <div>{general.email}</div>
        <div>{general.phone}</div>
      </div>
    </>
  )
  } else {
    return null;
  }
}

const EducationDisplay = ({ educations }) => {
  if (educations.length > 0) {
    return educations.map((edu) => {
      return (
        <div className="" key={edu.id}>
          <div className="">
            <h3 className="">School Name:</h3>
            <div className="">{edu.name ? edu.name : ''}</div>
          </div>
          <div className="">
            <h3 className="">Title of Study:</h3>
            <div>{edu.title ? edu.title : ''}</div>
          </div>
          <div className="">
            <h3 className="">Date of Study:</h3>
            <div>{edu.date ? edu.date : ''}</div>
          </div>
        </div>
      );
    });
  } else {
    return null;
  }
}

const ExperienceDisplay = ({ experiences }) => {
  if (experiences.length > 0) {
    return experiences.map((exp) => {
      return (
        <div className="" key={exp.id}>
          <div className="">
            <h3 className="">Company Name:</h3>
            <div>{exp.name ? exp.name : ''}</div>
          </div>
          <div className="">
            <h3 className="">Position Title:</h3>
            <div>{exp.title ? exp.title : ''}</div>
          </div>
          <div className="">
            <h3 className="">Dates Worked</h3>
            <div className="">
              <div className="">Start:</div>
              <div>{exp.dateStart ? exp.dateStart : ''}</div>
            </div>
            <div className="">
              <div className="">End:</div>
              <div>{exp.dateEnd ? exp.dateEnd : ''}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    return null;
  }
}

export default DisplayCV;