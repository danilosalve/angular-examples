import { AfterContentInit, Component, input, viewChild } from '@angular/core';
import { PoCheckboxComponent, PoFieldModule } from '@po-ui/ng-components';
import { PokemonAbility } from '../../interfaces/pokemon';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-ability-of-pokemon',
  imports: [PoFieldModule, TitleCasePipe],
  templateUrl: './ability-of-pokemon.component.html',
})
export class AbilityOfPokemonComponent implements AfterContentInit {
  readonly checkBox = viewChild.required(PoCheckboxComponent);
  ability = input.required<PokemonAbility>();

  ngAfterContentInit(): void {
    this.checkBox().checkboxValue = this.ability().is_hidden;
  }
}
