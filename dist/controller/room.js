import { RoomModel } from "../model/room";
export const getRooms = async (req, res) => {
    res.status(200).json({
        success: true,
        data: RoomModel
    });
};
export const getRoom = async (req, res) => {
    for (let room of RoomModel)
        if (room.id === parseInt(req.params.id))
            return res.status(200).json({
                success: true,
                data: room
            });
    res.status(200).json({
        success: false,
    });
};
export const addRoom = async (req, res) => {
    let genId = 0;
    const data = { ...req.body, id: genId++ };
    RoomModel.push(data);
    res.status(200).json({
        success: true,
        data
    });
};
export const addToRoom = async (req, res) => {
    for (let room of RoomModel)
        if (room.id === parseInt(req.params.id)) {
        }
    // const data = { ...req.body };
    // RoomModel.push(data);
    // res.status(200).json({
    //   success: true,
    //   data
    // })
};
export const deleteRoom = async (req, res) => {
    for (let i = 0; i < RoomModel.length; i++)
        if (RoomModel[i].id === parseInt(req.params.id)) {
            RoomModel.splice(i, 1);
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
