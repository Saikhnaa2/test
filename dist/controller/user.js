import { UserModel } from "../model/user";
export const getUsers = async (req, res) => {
    res.status(200).json({
        success: true,
        data: UserModel
    });
};
export const getUser = async (req, res) => {
    for (let user of UserModel)
        if (user.id === parseInt(req.params.id))
            return res.status(200).json({
                success: true,
                data: user
            });
    res.status(200).json({
        success: false,
    });
};
export const addUser = async (req, res) => {
    let genId = 0;
    const data = { ...req.body, id: genId++ };
    UserModel.push(data);
    res.status(200).json({
        success: true,
        data
    });
};
export const deleteLunch = async (req, res) => {
    for (let i = 0; i < UserModel.length; i++)
        if (UserModel[i].id === parseInt(req.params.id)) {
            UserModel.splice(i, 1);
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
