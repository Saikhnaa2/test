import { UserModel } from "../model/user";
import { Destroy, findData, Create } from "../utils";
export const getUsers = async (req, res) => {
    res.status(200).json({
        success: true,
        data: UserModel
    });
};
export const getUser = async (req, res) => {
    const data = findData(UserModel, parseInt(req.params.id));
    if (data)
        return res.status(200).json({
            success: true,
            data
        });
    res.status(200).json({
        success: false,
    });
};
let genId = 1;
export const addUser = async (req, res) => {
    const data = { ...req.body, id: genId++ };
    Create(UserModel, data);
    res.status(200).json({
        success: true,
        data
    });
};
export const deleteLunch = async (req, res) => {
    const d = Destroy(UserModel, parseInt(req.params.id));
    if (d)
        res.status(200).json({
            success: true
        });
    res.status(200).json({
        success: false,
        message: "tanii lunch id buruu bn!!!"
    });
};
export const priceCalc = async (req, res) => {
    let data = [];
    for (let user of UserModel) {
        let receivable = 0;
        let expenditure = 0;
        for (let rec of user.receivables)
            receivable += rec.price;
        for (let exp of user.expenditures)
            expenditure += exp.price;
        data.push({ name: user.name, receivable: receivable, expenditure: expenditure });
    }
    res.status(200).json({
        success: true,
        data
    });
};
