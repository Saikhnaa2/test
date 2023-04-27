export const findData = (dataModel: Array<any>, id: number) => {
  for (let data of dataModel)
    if (data.id === id) return data;
  return null;
}