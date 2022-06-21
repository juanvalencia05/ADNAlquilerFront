import { ListarAlquilerPage } from "../page/alquiler/listar-Alquiler.po";
import { NavbarPage } from "../page/navbar/navbar.po";
import { AlquilerPage } from "../page/alquiler/alquiler.po";

describe('workspace-project alquiler', () => {
    let navBar: NavbarPage;
    let listarAlquilerPage: ListarAlquilerPage;
    let vehiculoPage: AlquilerPage;

    beforeEach(() => {
        navBar = new NavbarPage();
        vehiculoPage= new AlquilerPage();
        listarAlquilerPage = new ListarAlquilerPage();
        navBar.clickBotonAlquiler();
    });

    it('Debería listar los alquileres', () => {
        vehiculoPage.clickListar();
        expect(listarAlquilerPage.numeroDeAlquileres()).toBeGreaterThanOrEqual(0);

    });
});