import { PoMenuItem } from '@po-ui/ng-components';

/**
 * Lista com todos os items do menu da aplicação
 */
export const MENU_ITEMS: PoMenuItem[] = [
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
        link: 'sample/forms/container-form',
        shortLabel: 'Container'
      },
      {
        label: 'Form. Control Value Accessor',
        link: 'sample/forms/control-value-accessor',
        shortLabel: 'C.V.A.'
      },
      {
        label: 'Form. Record',
        link: 'sample/forms/form-record',
        shortLabel: 'Record'
      },
      {
        label: 'Verificar Form. não salvo',
        link: 'sample/forms/form-unsaved',
        shortLabel: 'Form. não salvo'
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
        link: 'sample/signals/samples',
        shortLabel: 'Signals'
      },
      {
        label: 'Formulários Signals',
        link: 'sample/signals/form',
        shortLabel: 'Formulários'
      },
      {
        label: 'Formulários Simples',
        link: 'sample/signals/form-simple',
        shortLabel: 'Form. Simples'
      },
      {
        label: 'Star Wars Veiculos',
        link: 'sample/signals/vehicle',
        shortLabel: 'Veiculos'
      },
      {
        label: 'X-Men - Signals | Store',
        link: 'sample/signals/store',
        shortLabel: 'Store'
      }
    ]
  },
  {
    label: 'Carregamento adiado',
    link: 'sample/defer',
    shortLabel: 'Defer',
    icon: 'an an-timer'
  },
  {
    label: 'Componentes Dinâmicos',
    shortLabel: 'Dinâmico',
    icon: 'an an-browsers',
    subItems: [
      {
        label: 'Componentes',
        link: 'sample/dynamic/components',
        shortLabel: 'Componentes'
      },
      {
        label: 'Serviços',
        link: 'sample/dynamic/services',
        shortLabel: 'Serviços'
      },
      {
        label: 'Formulários',
        link: 'sample/dynamic/forms',
        shortLabel: 'Formulários'
      }
    ]
  },
  {
    label: 'Notificações',
    link: 'sample/notifications',
    shortLabel: 'Notificações',
    icon: 'an an-bell'
  },
  {
    label: 'Resources API',
    icon: 'an an-angular-logo',
    shortLabel: 'Resources',
    subItems: [
      {
        label: 'Produtos | RxResource',
        link: 'sample/resources-api/products',
        shortLabel: 'Produtos',
        icon: 'an an-shopping-cart-simple'
      },
      {
        label: 'Disney | RxResource',
        link: 'sample/resources-api/disney',
        shortLabel: 'Disney',
        icon: 'an an-castle-turret'
      },
      {
        label: 'Rick & Morty - Personagens | Resource',
        link: 'sample/resources-api/persons',
        shortLabel: 'Personagens',
        icon: 'an an-person'
      }
    ]
  },
  {
    label: 'RxJs',
    icon: 'an an-fish',
    shortLabel: 'RxJs',
    subItems: [
      {
        label: 'Cache | ShareReplay',
        link: 'sample/rxjs/replay',
        shortLabel: 'Replay'
      },
      {
        label: 'Usuários | Async',
        link: 'sample/rxjs/users',
        shortLabel: 'Usuários',
        icon: 'an an-user'
      }
    ]
  },
  {
    label: 'Pokédex | Master & Detail',
    link: 'sample/pokedex',
    shortLabel: 'Pokédex',
    icon: 'an an-poker-chip'
  }
];
