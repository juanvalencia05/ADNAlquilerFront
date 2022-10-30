import { by, element } from 'protractor';

export class AlquilerPage
{
  private listar = element(by.id('listarAlquiler'));
  private crear = element(by.id('crearAlquiler'));
  private eliminar = element(by.id('eliminarAlquiler'));
  private texto = element(by.id('homeAlquiler'));

  getTexto() {
    return this.texto.getText() as Promise<string>;
  }

  async clickListar(){
    await this.listar.click();
  }

  async clickCrear(){
    await this.crear.click();
  }

  async clickEliminar(){
    await this.eliminar.click();
  }
}
