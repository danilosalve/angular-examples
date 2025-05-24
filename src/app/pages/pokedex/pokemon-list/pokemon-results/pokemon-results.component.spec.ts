import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';
import { By } from '@angular/platform-browser';

import { PokemonResultsComponent } from './pokemon-results.component';
import { ListOfPokemonWithDetail } from '../../shared/interfaces/list-pokemon';

describe('PokemonResultsComponent', () => {
  let component: PokemonResultsComponent;
  let componentRef: ComponentRef<PokemonResultsComponent>;
  let fixture: ComponentFixture<PokemonResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonResultsComponent]
    });
    fixture = TestBed.createComponent(PokemonResultsComponent);
    componentRef = fixture.componentRef;
    component = fixture.componentInstance;
  });

  it('deveria ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deveria ter pokemons como null por padrão', () => {
    componentRef.setInput('pokemons', null);
    fixture.detectChanges();
    expect(component.pokemons()).toBeDefined();
    expect(component.pokemons()).toBeNull();

    const p = fixture.debugElement.query(By.css('p'));
    expect(p).toBeNull();
  });

  it('deveria exibir o resultado da lista de pokemons com detalhes', () => {
    const mockPokemons: ListOfPokemonWithDetail = {
      count: 150,
      next: null,
      previous: null,
      results: Array(20).fill({})
    };
    componentRef.setInput('pokemons', mockPokemons);
    fixture.detectChanges();

    expect(component.pokemons()).toEqual(mockPokemons);

    const p = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(p.textContent.trim()).toBe('Exibindo: 1 - 20 de 150');
  });
});
