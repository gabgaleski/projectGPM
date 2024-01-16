import UserModel from "../database/models/userModel";
import ICrudUser from "../interfaces/Iuser/ICrudUser";
import IUser, { ICreateUser } from "../interfaces/Iuser/IUser";
import hashPassword from "../auth/bcrypt";

export default class UserService implements ICrudUser {

    public async findAll(): Promise<IUser[]> {
        return await UserModel.findAll();
    }

    public async create(user: ICreateUser): Promise<IUser> {
        const defaultRole = 'USER';
        const {password, username, email} = user
        const criptoPassword = hashPassword(password)
        const request = {username, email, password: criptoPassword, role: defaultRole};
        const newUser = await UserModel.create(request);

        return newUser;
    }

}