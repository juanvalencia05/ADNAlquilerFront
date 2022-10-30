import { AlquilerPage } from '../page/alquiler/alquiler.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { browser } from 'protractor';

describe('workspace-alquiler',()=>{
  let alquiler: AlquilerPage;
  let navbar: NavbarPage;

  beforeEach(()=>{
    alquiler= new AlquilerPage();
    navbar= new NavbarPage();
    navbar.clickBotonAlquiler();
  });

  it('Deberia cargar el texto de la primera vista',()=>{
    alquiler.getTexto();
    expect(alquiler.getTexto()).toBe('Aqui podras ver la accion de que deseas realizar');
    expect(browser.getCurrentUrl()).toContain('alquiler');
  });

  it('Deberia redirigir a listar',()=>{
    alquiler.clickListar();
    expect(browser.getCurrentUrl()).toContain('alquiler/listar');
  });

  it('Deberia redirigir a crear',()=>{
    alquiler.clickCrear();
    expect(browser.getCurrentUrl()).toContain('alquiler/crear');
  });

  it('Deberia redirigir a eliminar',()=>{
    alquiler.clickEliminar();
    expect(browser.getCurrentUrl()).toContain('alquiler/eliminar');
  });

});
