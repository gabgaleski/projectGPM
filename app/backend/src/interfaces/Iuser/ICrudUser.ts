import IUser, { ICreateUser, IUserLogin } from "./IUser";

export default interface ICrudUser {
    findOne(id: number): Promise<IUser | null>
    create(user: ICreateUser): Promise<IUser | null>
    login(user: IUserLogin ): Promise<{message: string}>
    update(info: ICreateUser, idUser: string): Promise<{message: string}>
    delete(id: number): Promise<{data: number | string}>
}