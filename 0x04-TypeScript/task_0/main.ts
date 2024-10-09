// Interface for Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London",
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Function to render table row
  function renderTableRow(student: Student): HTMLTableRowElement {
    const row = document.createElement('tr');
  
    const firstNameCell = document.createElement('td');
    firstNameCell.innerText = student.firstName;
  
    const locationCell = document.createElement('td');
    locationCell.innerText = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
  
    return row;
  }
  
  // Get the table body element (assuming it exists with id="student-table-body")
  const tableBody = document.getElementById('student-table-body');
  
  // Render table rows for each student
  studentsList.forEach((student) => {
    const tableRow = renderTableRow(student);
    if (tableBody) {
      tableBody.appendChild(tableRow);
    } else {
      console.error('Table body element not found');
    }
  });