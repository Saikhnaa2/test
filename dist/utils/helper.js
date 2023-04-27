export const Calculate = () => {
};
export const haveData = (dataModel, id) => {
    for (let data of dataModel) {
        console.log(data, id);
        if (data.id === id)
            return true;
    }
    return false;
};
