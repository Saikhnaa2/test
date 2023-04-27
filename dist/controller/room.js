import { RoomModel } from "../model/room";
import { Create, findData } from "../utils";
let genId = 1;
export const createRoom = async (req, res) => {
    const data = { ...req.body, id: genId++ };
    Create(RoomModel, data);
    res.status(200).json({
        success: true,
        data
    });
};
export const addToRoom = async (req, res) => {
    const data = { ...req.body };
    let room = findData(RoomModel, parseInt(req.params.id));
    Create(RoomModel, data);
    res.status(200).json({
        success: true,
        data
    });
};
