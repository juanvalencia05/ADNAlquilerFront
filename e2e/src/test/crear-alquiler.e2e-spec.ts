import { browser} from "protractor";
import { AlquilerPage } from "../page/alquiler/alquiler.po";
import { CrearAlquilerPage } from "../page/alquiler/crear-alquiler.po";
import { NavbarPage } from "../page/navbar/navbar.po";

describe('workspace-project alquiler', () => {
    let navBar: NavbarPage;
    let crearAlquilerPage: CrearAlquilerPage;
    let alquilerPage: AlquilerPage;

    beforeEach(() => {
        navBar = new NavbarPage();
        alquilerPage= new AlquilerPage();
        crearAlquilerPage = new CrearAlquilerPage();
        navBar.clickBotonAlquiler();
        alquilerPage.clickCrear();
    });

    it('Deberia crear el alquiler', () => {
        const TIEMPO_ALQUILADO = 4;
        const FECHA_ALQUILER = "21/06/2022";
        const FECHA_DEVOLUCION= "25/06/2022";

        browser.driver.manage().window().maximize();

        crearAlquilerPage.ingresarTiempoAlquilado(TIEMPO_ALQUILADO);
        crearAlquilerPage.ingresarFechaAlquiler(FECHA_ALQUILER);
        crearAlquilerPage.ingresarFechaDevolucion(FECHA_DEVOLUCION);
     
        crearAlquilerPage.crear();
 
        //expect(crearAlquilerPage.getSwalFireTitle()).toEqual('Se creo el alquiler de forma exitosa');
        
    });

    it('No debería crear si tiene campos sin llenar', () => {
        crearAlquilerPage.crear();
        expect(crearAlquilerPage.getSwalFireTitle()).toEqual('No has diligenciado todos los campos');
    });

});