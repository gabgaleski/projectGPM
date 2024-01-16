import IUser from "./IUser";

export default interface ICrudUser {
    findAll(): Promise<IUser[]>
}