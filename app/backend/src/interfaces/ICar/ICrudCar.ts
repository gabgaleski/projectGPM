import ICar, { IDetailsCar } from "./ICar"

export default interface ICrudCar {
    findAll():Promise<ICar[] | null>
    update(id: string, infos: ICar): Promise<{message: string}>
    create(car: IDetailsCar): Promise<{message: string}>
    findOne(id: number): Promise<ICar | null>
}