import { Component, inject } from '@angular/core';
import { PoMenuItem, PoMenuModule, PoPageModule, PoToolbarModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PoToolbarModule, PoMenuModule, PoPageModule, RouterOutlet],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly router: Router = inject(Router);
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
          action: () => this.router.navigate(['forms/container-form']),
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
          action: () => this.router.navigate(['signals/samples']),
          shortLabel: 'Signals',
        },
        {
          label: 'Formulários Signals',
          action: () => this.router.navigate(['signals/form']),
          shortLabel: 'Formulários',
        },
        {
          label: 'Star Wars Veiculos',
          action: () => this.router.navigate(['signals/vehicle']),
          shortLabel: 'Veiculos',
        },
      ],
    },
    {
      label: 'Carregamento adiado',
      action: () => this.router.navigate(['defer']),
      shortLabel: 'Defer',
      icon: 'an an-timer',
    },
    {
      label: 'Componente Dinâmico',
      shortLabel: 'Dinâmico',
      icon: 'an an-browsers',
      subItems: [
        {
          label: 'Componentes',
          action: () => this.router.navigate(['dynamic/components']),
          shortLabel: 'Componentes',
        },
        {
          label: 'Serviços',
          action: () => this.router.navigate(['dynamic/services']),
          shortLabel: 'Serviços',
        }
      ],
    },
    {
      label: 'Usuários',
      action: () => this.router.navigate(['users']),
      shortLabel: 'Usuários',
      icon: 'an an-user',
    },
  ];
  readonly name: string = 'Aplicativo de Exemplo Standalone';
}
