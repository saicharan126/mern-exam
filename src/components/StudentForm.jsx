import { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !course) return;
    addStudent({ id: Date.now(), name, age, course });
    setName("");
    setAge("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-gray-50">
      <h3 className="text-lg font-bold mb-2">Add Student</h3>
      <input
        className="border p-2 w-full mb-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;
