import StudentItem from "./StudentItem";

const StudentList = ({ students }) => {
  return (
    <ul>
        <StudentItem 
          key={index} 
          name={student.name} 
          score={student.score} 
        />
    </ul>
  );
};

export default StudentList;