export const UpdateOneData = (dataJson, data) => {
    for (let atr in dataJson) {
        dataJson[atr] = data[atr];
    }
};
