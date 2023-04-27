export const Destroy = (dataModel, id) => {
    for (let i = 0; i < dataModel.length; i++)
        if (dataModel[i].id === id) {
            dataModel.splice(i, 1);
            return true;
        }
    return false;
};
