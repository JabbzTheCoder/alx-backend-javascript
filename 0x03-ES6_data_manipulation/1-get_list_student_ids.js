const getListStudentIds = (lst) =>{
    if (!Array.isArray(lst)){
        return []
    }
    return lst.map(x => x.id)
}

export default getListStudentIds;