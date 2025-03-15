import { useState } from "react";
import StudentList from "./components/StudentList.jsx";
import StudentForm from "./components/StudentForm.jsx";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "saicharan", age: 20, course: "Computer Science" },
    { id: 2, name: "Lohith", age: 22, course: "Computer Science" },
  ]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 shadow-lg rounded bg-white">
      <h1 className="text-2xl font-bold text-center mb-4">Student Info App</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
