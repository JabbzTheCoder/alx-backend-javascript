import getListStudentIds from "./1-get_list_student_ids.js";

const getStudentIdsSum = (stdntLst) =>{
    let ids = getListStudentIds(stdntLst);

    const sum = ids.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum;
}

export default getStudentIdsSum;