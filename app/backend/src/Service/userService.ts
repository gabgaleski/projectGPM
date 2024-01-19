import UserModel from "../database/models/userModel";
import ICrudUser from "../interfaces/Iuser/ICrudUser";
import IUser, { ICreateUser, IUserLogin } from "../interfaces/Iuser/IUser";
import hashPassword from "../auth/bcrypt";
import { compareSync } from "bcryptjs";
import JWT from "../auth/JTW";

export default class UserService implements ICrudUser {

    public async findAll(): Promise<IUser[]> {
        return await UserModel.findAll();
    }

    public async create(user: ICreateUser): Promise<IUser | null> {
        const defaultRole = 'USER';
        const {password, username, email} = user
        const serchEmail = await UserModel.findOne({where: {email}})
        if (serchEmail) return null
        const criptoPassword = hashPassword(password)
        const request = {username, email, password: criptoPassword, role: defaultRole};
        const newUser = await UserModel.create(request);

        return newUser;
    }

    public async login(user: IUserLogin ): Promise<{message: string}> {
        const { email, password } = user
        const getUser = await UserModel.findOne({where: {email}})

        if (!getUser) return { message: 'ERROR' }
        if (!password || !compareSync(password, getUser.password)) {
            return { message: 'UNAUTHORIZED' }
        }
        const token = JWT.sign(user);

        return { message: token }

    }

}