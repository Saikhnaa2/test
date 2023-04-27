export const findData = (dataModel, id) => {
    for (let data of dataModel)
        if (data.id === id)
            return data;
    return null;
};
