export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
      .filter((student) => student.location === city) // Filter students in the specified city
      .map((student) => {
        const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
        return {
          ...student,
          grade: matchingGrade ? matchingGrade.grade : 'N/A',
        };
      });
  }