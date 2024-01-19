export default interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
}

export interface ICreateUser {
    username: string;
    email: string;
    password: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}