import UserModel from "../database/models/userModel";
import ICrudUser from "../interfaces/ICrudUser";
import IUser from "../interfaces/IUser";

export default class UserService implements ICrudUser {

    public async findAll(): Promise<IUser[]> {
        return await UserModel.findAll();
    }

}