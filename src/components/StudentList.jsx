import { useState } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "saicharan", age: 20, course: "Computer Science" },
    { id: 2, name: "Lohith", age: 22, course: "Computer Science" },
  ]);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Student Information</h2>
      <ul className="space-y-2">
        {students.map((student) => (
          <li key={student.id} className="border p-3 rounded bg-gray-100">
            <strong>Name:</strong> {student.name} | <strong>Age:</strong> {student.age} | <strong>Course:</strong> {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
