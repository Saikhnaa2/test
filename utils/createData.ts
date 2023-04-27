import { findData } from "./findData";

export const Create = (dataModel: Array<any>, data: any, id?: number): void => {
  dataModel.push(data);
}