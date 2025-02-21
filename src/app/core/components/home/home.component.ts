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
          label: 'Star Wars Veiculos',
          link: 'signals/vehicle',
          shortLabel: 'Veiculos',
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
      label: 'Produtos',
      link: 'products',
      shortLabel: 'Produtos',
      icon: 'an an-shopping-cart-simple',
    },
    {
      label: 'Rick & Morty | Personagens',
      link: 'persons',
      shortLabel: 'Personagens',
      icon: 'an an-person',
    },
    {
      label: 'Usuários',
      link: 'users',
      shortLabel: 'Usuários',
      icon: 'an an-user',
    },
  ];
}
