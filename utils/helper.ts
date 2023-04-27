export const Calculate = () => {
  
}

export const haveData = (dataModel: Array<any>, id: number): boolean => {
  for (let data of dataModel) {
    console.log(data, id);
    if (data.id === id) return true
  }
  return false
}