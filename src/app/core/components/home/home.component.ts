import { Component } from '@angular/core';
import { PoMenuItem, PoMenuModule, PoPageModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PoMenuModule, PoPageModule, RouterOutlet, ToolbarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly menus: PoMenuItem[] = [
    {
      label: 'Página Inicial',
      link: './',
      shortLabel: 'Inicio',
      icon: 'an an-house-line',
    },
    {
      label: 'Formulários',
      shortLabel: 'Formulários',
      icon: 'an an-file',
      subItems: [
        {
          label: 'Reaproveitando Formulários',
          link: 'forms/container-form',
          shortLabel: 'Container',
        },
        {
          label: 'Form. Record',
          link: 'forms/form-record',
          shortLabel: 'Record',
        },
      ],
    },
    {
      label: 'Signals',
      shortLabel: 'Signals',
      icon: 'an an-radio-signal',
      subItems: [
        {
          label: 'Exemplos Signals',
          link: 'signals/samples',
          shortLabel: 'Signals',
        },
        {
          label: 'Formulários Signals',
          link: 'signals/form',
          shortLabel: 'Formulários',
        },
        {
          label: 'Formulários Simples',
          link: 'signals/form-simple',
          shortLabel: 'Form. Simples',
        },
        {
          label: 'Star Wars Veiculos',
          link: 'signals/vehicle',
          shortLabel: 'Veiculos',
        },
        {
          label: 'Signals | Store',
          link: 'signals/store',
          shortLabel: 'Store',
        },
      ],
    },
    {
      label: 'Carregamento adiado',
      link: 'defer',
      shortLabel: 'Defer',
      icon: 'an an-timer',
    },
    {
      label: 'Componentes Dinâmicos',
      shortLabel: 'Dinâmico',
      icon: 'an an-browsers',
      subItems: [
        {
          label: 'Componentes',
          link: 'dynamic/components',
          shortLabel: 'Componentes',
        },
        {
          label: 'Serviços',
          link: 'dynamic/services',
          shortLabel: 'Serviços',
        },
        {
          label: 'Formulários',
          link: 'dynamic/forms',
          shortLabel: 'Formulários',
        },
      ],
    },
    {
      label: 'Resources API',
      icon: 'an an-angular-logo',
      shortLabel: 'Resources',
      subItems: [
        {
          label: 'Produtos | RxResource',
          link: 'resources-api/products',
          shortLabel: 'Produtos',
          icon: 'an an-shopping-cart-simple',
        },
        {
          label: 'Rick & Morty - Personagens | Resource',
          link: 'resources-api/persons',
          shortLabel: 'Personagens',
          icon: 'an an-person',
        },
      ],
    },
    {
      label: 'RxJs',
      icon: 'an an-play',
      shortLabel: 'RxJs',
      subItems: [
        {
          label: 'Cache | ShareReplay',
          link: 'rxjs/replay',
          shortLabel: 'Replay'
        },
        {
          label: 'Usuários | Async',
          link: 'rxjs/users',
          shortLabel: 'Usuários',
          icon: 'an an-user',
        },
      ]
    },
    {
      label: 'Pokédex | Master & Detail',
      link: 'pokedex',
      shortLabel: 'Pokédex',
      icon: 'an an-poker-chip',
    },
  ];
}
