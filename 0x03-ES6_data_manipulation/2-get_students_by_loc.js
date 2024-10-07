const getStudentsByLocation = (stdents, city) =>{
    let filtered_students = [];

    filtered_students = stdents.filter(student => student.location === city);

    return filtered_students;

}

export default getStudentsByLocation;