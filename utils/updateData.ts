export const UpdateOneData = (dataJson: any, data: any) => {
  for (let atr in dataJson) {
    dataJson[atr] = data[atr];
  }
}