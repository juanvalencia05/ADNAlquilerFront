import { by, element } from "protractor";

export class ListarAlquilerPage{
    private listaVehiculos = element.all(by.id('listaVehiculos'))

    async numeroDeAlquileres(): Promise<number>{
        return await this.listaVehiculos.count();
    }
}