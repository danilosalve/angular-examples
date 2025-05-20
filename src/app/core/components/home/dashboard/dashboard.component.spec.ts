import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';
import { CoinsComponent } from './coins/coins.component';
import { WeatherComponent } from '../weather/weather.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DashboardComponent, MockComponents(CoinsComponent, WeatherComponent)],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o título principal correto', () => {
    const container = fixture.debugElement.query(By.css('po-page-default'));
    expect(container.attributes['p-title']).toBe('Página Inicial');
  });
});
