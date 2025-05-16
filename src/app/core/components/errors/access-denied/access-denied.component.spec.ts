import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { AccessDeniedComponent } from './access-denied.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AccessDeniedComponent', () => {
  let component: AccessDeniedComponent;
  let fixture: ComponentFixture<AccessDeniedComponent>;
  let routerMock: jest.Mocked<Router>;

  beforeEach(() => {
    routerMock = {
      navigate: jest.fn(),
    } as unknown as jest.Mocked<Router>;

    TestBed.configureTestingModule({
      imports: [AccessDeniedComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ignora componentes externos como po-container, po-button
      providers: [{ provide: Router, useValue: routerMock }],
    });
    fixture = TestBed.createComponent(AccessDeniedComponent);
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

  it('deve exibir o texto "Acesso Negado"', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Acesso Negado');
  });

  it('deve exibir a mensagem de usuário sem acesso a esta página', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Ops! Parece que você não tem permissão para acessar esta página');
  });

  it('deve exibir o botão "Voltar para página Inicial"', () => {
    const button = fixture.debugElement.query(By.css('po-button'));
    expect(button.attributes['p-label']).toBe('Voltar para página Inicial');
  });

  it('deve exibir a imagem com alt "Usuário sem acesso a página"', () => {
    const img = fixture.debugElement.query(By.css('img'));
    expect(img.attributes['alt']).toBe('Usuário sem acesso a página');
  });
});
