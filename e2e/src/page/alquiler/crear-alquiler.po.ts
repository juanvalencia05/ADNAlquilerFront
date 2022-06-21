import { by, element } from "protractor";

export class CrearAlquilerPage{
    private tiempoAlquilado = element(by.id('tiempoAlquilado'));
    private fechaAlquiler = element(by.id('fechaAlquiler'));
    private fechaDevolucion = element(by.id('fechaDevolucion'));
    private buttonCrear = element(by.id('crear'));
    private swalFireTitle = element(by.className('swal2-title'));

    async ingresarTiempoAlquilado(tiempoAlquilado:number){
        await this.tiempoAlquilado.sendKeys(tiempoAlquilado);
    }

    async ingresarFechaAlquiler(fechaAlquiler:string){
        await this.fechaAlquiler.sendKeys(fechaAlquiler);
    }

    async ingresarFechaDevolucion(fechaDevolucion:string){
        await this.fechaDevolucion.sendKeys(fechaDevolucion);
    }

    async crear(){
        await this.buttonCrear.click();
      }

    async getSwalFireTitle(): Promise<string> {
        return await this.swalFireTitle.getText();
      }
}