import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfPokemonComponent } from './types-of-pokemon.component';

describe('TypesOfPokemonComponent', () => {
  let component: TypesOfPokemonComponent;
  let fixture: ComponentFixture<TypesOfPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TypesOfPokemonComponent]
    });

    fixture = TestBed.createComponent(TypesOfPokemonComponent);
    component = fixture.componentInstance;
  });

  it('deveria ser criado', () => {
    expect(component).toBeTruthy();
  });

  describe('getColor', () => {
    it('deve retornar a cor correta para o tipo de Pokémon', () => {
      const type = 'fire';
      const expectedColor = '#fd7d24'; // Cor esperada para o tipo 'fire'
      const color = component.getColor(type);
      expect(color).toBe(expectedColor);
    });

    it('deve retornar uma string vazia para um tipo de Pokémon desconhecido', () => {
      const type = 'unknownType';
      const expectedColor = '';
      const color = component.getColor(type);
      expect(color).toBe(expectedColor);
    });
  });

  describe('translateLabel', () => {
    it('deve retornar o rótulo traduzido para o tipo de Pokémon', () => {
      const type = 'fire';
      const expectedLabel = 'Fogo'; // Rótulo esperado para o tipo 'fire'
      const label = component.translateLabel(type);
      expect(label).toBe(expectedLabel);
    });

    it('deve retornar uma string vazia para um tipo de Pokémon desconhecido', () => {
      const type = 'unknownType';
      const expectedLabel = '';
      const label = component.translateLabel(type);
      expect(label).toBe(expectedLabel);
    });
  });
});
