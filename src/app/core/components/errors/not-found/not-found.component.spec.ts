import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let routerMock: jest.Mocked<Router>;

  beforeEach(() => {
    routerMock = {
      navigate: jest.fn()
    } as unknown as jest.Mocked<Router>;

    TestBed.configureTestingModule({
      imports: [NotFoundComponent],
      providers: [{ provide: Router, useValue: routerMock }]
    });
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve navegar para a home ao chamar navigateToHome()', () => {
    component.navigateToHome();
    expect(routerMock.navigate).toHaveBeenCalledWith(['']);
  });

  it('deve exibir o texto "Ops!"', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Ops!');
  });

  it('deve exibir a mensagem de página não encontrada', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain(
      'A página que você está tentando acessar não existe ou está indisponível no momento.'
    );
  });

  it('deve exibir o botão "Voltar para página Inicial"', () => {
    const button = fixture.debugElement.query(By.css('po-button'));
    expect(button.attributes['p-label']).toBe('Voltar para página Inicial');
  });

  it('deve exibir a imagem com alt "Página não existe"', () => {
    const img = fixture.debugElement.query(By.css('img'));
    expect(img.attributes['alt']).toBe('Página não existe');
  });
});
