import { useState } from "react";

function EducationalExp() {
  const [eduEx, setEduEx] = useState({
    nameOfInstitution: "",
    stream: "",
    per: 0,
    yearOfpassing: new Date().getFullYear()
  });
  const [eduExArray, setEduExArray] = useState([]);

  const [isActive, setIsActive] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEduEx({ ...eduEx, [name]: value });
  };

  const saveEdu = (e) => {
    e.preventDefault();
    setEduExArray([...eduExArray, eduEx]);
    setEduEx({
      nameOfInstitution: "",
      stream: "",
      per: 0,
      yearOfpassing: new Date().getFullYear()
    });
    console.log(eduExArray);
  };

  const addEdu = () => {
    setIsActive(true);
  };

  const cancelForm = () => {
    setIsActive(false);
  };

  return (
    <section>
      <h2>Education</h2>
      {eduExArray.map((edu, index) => {
        return (
          <div key={index}>
            <p>{edu.nameOfInstitution}</p>
            <p>{edu.stream}</p>
            <p>{edu.per}</p>
            <p>{edu.yearOfpassing}</p>
            <hr />
          </div>
        );
      })}
      {isActive && (
        <form>
          <div>
            <label>Name of Institution</label>
            <input
              type="text"
              name="nameOfInstitution"
              onChange={handleChange}
              value={eduEx.nameOfInstitution}
            />
          </div>
          <div>
            <label>Stream/Subject</label>
            <input
              type="text"
              name="stream"
              onChange={handleChange}
              value={eduEx.stream}
            />
          </div>
          <div>
            <label>Percentage</label>
            <input
              type="number"
              name="per"
              onChange={handleChange}
              value={eduEx.per}
            />
          </div>
          <div>
            <label>Year of Passing</label>
            <input
              type="text"
              name="yearOfpassing"
              onChange={handleChange}
              value={eduEx.yearOfpassing}
            />
          </div>
          <button onClick={saveEdu}>Save</button>
          <button onClick={cancelForm}>Cancel</button>
        </form>
      )}

      <button type="button" onClick={addEdu}>
        Add Education
      </button>
    </section>
  );
}

export default EducationalExp;
