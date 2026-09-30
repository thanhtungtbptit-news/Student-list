const StudentItem = ({ name, score }) => {
    return(
        <li>
            {`Sinh viên: ${name} - Điểm: ${score}`}
        </li>
    );
};

export default StudentItem;