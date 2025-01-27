import { Component, inject } from '@angular/core';
import { PoMenuItem, PoMenuModule, PoPageModule, PoToolbarModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PoToolbarModule, PoMenuModule, PoPageModule, RouterOutlet],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly router: Router = inject(Router);
  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Página Inicial',
      link: './',
      shortLabel: 'Inicio',
      icon: 'an an-house-line'
    },
    {
      label: 'Formulários',
      shortLabel: 'Formulários',
      icon: 'an an-file',
      subItems: [
        {
          label: 'Reaproveitando Formulários',
          action: () => this.router.navigate(['home/forms/container-form']),
          shortLabel: 'Container'
        }
      ]
    },
    {
      label: 'Signals',
      shortLabel: 'Signals',
      icon: 'an an-radio-signal',
      subItems: [
        {
          label: 'Exemplos Signals',
          action: () => this.router.navigate(['home/signals/samples']),
          shortLabel: 'Signals'
        },
        {
          label: 'Formulários Signals',
          action: () => this.router.navigate(['home/signals/form']),
          shortLabel: 'Formulários'
        },
        {
          label: 'Star Wars Veiculos',
          action: () => this.router.navigate(['home/signals/vehicle']),
          shortLabel: 'Veiculos'
        }
      ]
    },
    {
      label: 'Usuários',
      action: () => this.router.navigate(['home/users']),
      shortLabel: 'Usuários',
      icon: 'an an-user'
    },
    {
      label: 'Componente Dinâmico',
      action: () => this.router.navigate(['home/dynamic-component']),
      shortLabel: 'Dinâmico',
      icon: 'an an-browsers'
    }
  ];
  readonly name: string = 'Aplicativo de Exemplo Standalone';
}
