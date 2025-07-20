import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamaraPage } from './camara.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

describe('CamaraPage', () => {
  let component: CamaraPage;
  let fixture: ComponentFixture<CamaraPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamaraPage],
      imports: [
        CommonModule,          // ← Necesario para *ngIf y otras directivas básicas
        IonicModule.forRoot(), // ← Necesario para componentes y servicios de Ionic como MenuController
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});