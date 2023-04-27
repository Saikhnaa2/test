export const Destroy = (dataModel: Array<any>, id: number) => {
  for (let i = 0; i < dataModel.length; i++)
    if (dataModel[i].id === id) {
      dataModel.splice(i, 1);
      return true;
    }  
  return false;
}