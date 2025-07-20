import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { ApiClientesService } from '../services/api-clientes.service';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

class MockApiClientesService {
  getUsers() {
    return of([
      { title: 'Producto 1', price: 10, image: 'http://example.com/product1.jpg' },
      { title: 'Producto 2', price: 20, image: 'http://example.com/product2.jpg' },
    ]);
  }
}

class MockMenuController {
  close() {}
}

class MockActivatedRoute {
  queryParams = of({ email: 'test@example.com', password: 'password123' });
}

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      providers: [
        { provide: ApiClientesService, useClass: MockApiClientesService },
        { provide: MenuController, useClass: MockMenuController },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize productos on ngOnInit', () => {
    component.ngOnInit();
    expect(component.productos.length).toBe(2); // Verifica que se hayan cargado 2 productos
    expect(component.productos[0].title).toBe('Producto 1'); // Verifica el título del primer producto
  });

  it('should set email and password from query params', () => {
    component.ngOnInit();
    expect(component.email).toBe('test@example.com');
    expect(component.password).toBe('password123');
  });

  // Nueva prueba para textoPuntos
  it('should have the correct textoPuntos value', () => {
    expect(component.textoPuntos).toBe('Tienes 2500 puntos'); // Verifica el valor de textoPuntos
  }); 

  // Nueva prueba para bienvenidos
  it('should have the correct bienvenidos value', () => {
    expect(component.bienvenidos).toBe('Bienvenid@'); // Verifica el valor de bienvenidos
  });
});