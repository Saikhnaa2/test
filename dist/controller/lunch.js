import { LunchModel } from "../model/lunch";
import { UserModel } from "../model/user";
import { haveData } from "../utils/helper";
export const getLunchs = async (req, res) => {
    res.status(200).json({
        success: true,
        data: LunchModel
    });
};
export const getLunch = async (req, res) => {
    for (let lunch of LunchModel)
        if (lunch.id === parseInt(req.params.id))
            return res.status(200).json({
                success: true,
                data: lunch
            });
    res.status(200).json({
        success: false,
    });
};
let genId = 1;
export const addLunch = async (req, res) => {
    const { user } = req.body;
    console.log(haveData(UserModel, parseInt(user)));
    if (haveData(UserModel, parseInt(user)) === false)
        return res.status(200).json({
            success: false,
        });
    const data = { ...req.body, id: genId++ };
    LunchModel.push(data);
    res.status(200).json({
        success: true,
        data
    });
};
export const deleteLunch = async (req, res) => {
    for (let i = 0; i < LunchModel.length; i++)
        if (LunchModel[i].id === parseInt(req.params.id)) {
            LunchModel.splice(i, 1);
            return res.status(200).json({
                success: true
            });
        }
    res.status(200).json({
        success: false,
        message: "tanii lunch id buruu bn!!!"
    });
};
// export const addToLunch = async (req: Request, res: Response): Promise<any> => { 
// }
