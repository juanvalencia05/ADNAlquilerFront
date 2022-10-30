import { by, element } from 'protractor';

export class CrearAlquilerPage {
  private tiempoAlquilado = element(by.name('tiempoAlquilado'));
  private fechaAlquiler = element(by.name('fechaAlquiler'));
  private fechaDevolucion = element(by.name('fechaDevolucion'));
  private buttonCrear = element(by.id('crear'));
  private swalFireTitle = element(by.className('swal2-title'));

  async ingresarTiempoAlquilado(tiempoAlquilado: number) {
    await this.tiempoAlquilado.sendKeys(tiempoAlquilado);
  }

  async ingresarFechaAlquiler(fechaAlquiler: string) {
    await this.fechaAlquiler.sendKeys(fechaAlquiler);
  }

  async ingresarFechaDevolucion(fechaDevolucion: string) {
    await this.fechaDevolucion.sendKeys(fechaDevolucion);
  }

  async crear() {
    await this.buttonCrear.click();
  }

  async SwalFireTitle(): Promise<Boolean> {
    return await this.swalFireTitle.isPresent();
  }

  async getSwalFireTitle(): Promise<string> {
    return await this.swalFireTitle.getText();
  }
}
