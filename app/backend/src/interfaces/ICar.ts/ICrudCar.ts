import ICar from "./ICar"

export default interface ICrudCar {
    findAll():Promise<ICar[] | null>
}