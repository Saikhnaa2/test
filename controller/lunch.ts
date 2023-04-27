import { Request, Response } from "express";
import { LunchModel } from "../model/lunch";
import { UserModel } from "../model/user";
import { Destroy,findData, Create, UpdateOneData } from "../utils";

export const getLunchs = async (req: Request, res: Response): Promise<any> => { 
  res.status(200).json({
    success: true,
    data: LunchModel
  })
}


export const getLunch = async (req: Request, res: Response): Promise<any> => { 
  const lunch = findData(LunchModel, parseInt(req.params.id))
  if (lunch) 
    return res.status(200).json({
      success: true,
      data: lunch
    })
  res.status(200).json({
    success: false,
  })
}

let genId = 1;
export const addLunch = async (req: Request, res: Response): Promise<any> => {
  const { users, paid } = req.body;
  let paidUser = findData(UserModel, parseInt(paid))
  for (let user of users) {
    let partUser = findData(UserModel, parseInt(user?.userId));
    console.log(paidUser);
    console.log(partUser);
    partUser.expenditures?.push({ user: paidUser, price: user.price, fend: false });
    console.log(partUser);
    paidUser.receivables?.push({ user: partUser, price: user.price, fend: false });
    console.log(paidUser);
  }
  
  const data = { ...req.body, id: genId++ };
  Create(LunchModel, data)
  res.status(200).json({
    success: true,
    data
  })
}

export const deleteLunch = async (req: Request, res: Response): Promise<any> => { 
  const d = Destroy(LunchModel, parseInt(req.params.id));
  if (d)
    res.status(200).json({
      success: true
    });
  res.status(200).json({
    success: false,
    message: "tanii lunch id buruu bn!!!"
  });
}

export const updateLunch = async (req: Request, res: Response): Promise<any> => { 
  const { userId } = req.body;
  let lunch = findData(LunchModel, parseInt(req.params.id));
  for (let i = 0; i < lunch?.users?.length; i++){
    if (lunch.users.userId === parseInt(userId)) {
      UpdateOneData(lunch.users, req.body);
      return res.status(200).json({
        success: true,
      });
    }
  }

  res.status(200).json({
    success: false,
  });
}