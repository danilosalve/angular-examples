import {
  poThemeDefaultActions,
  poThemeDefaultFeedback,
  poThemeDefaultNeutrals,
  poThemeDefaultLightValues,
  poThemeDefaultActionsDark,
  poThemeDefaultFeedbackDark,
  poThemeDefaultDarkValues,
  PoThemeTypeEnum
} from '@po-ui/ng-components';

/**
 * @description
 *
 * Tokens para os temas Claro e Escuro
 */
export const TOKEN_THEME_DEFAULT = {
  name: 'po-theme',
  type: {
    light: {
      color: {
        brand: {
          '01': {
            lightest: '#E3E9F7',
            lighter: '#B0C1E8',
            light: '#7996D7',
            base: '#23489F',
            dark: '#173782',
            darker: '#0F2557',
            darkest: '#081536'
          },
          '02': {
            base: '#32517c'
          },
          '03': {
            base: '#16d9d9'
          }
        },
        action: {
          ...poThemeDefaultActions,
          disabled: 'var(--color-neutral-mid-40)'
        },
        feedback: {
          ...poThemeDefaultFeedback,
          info: {
            ...poThemeDefaultFeedback.info,
            base: '#0079b8'
          }
        },
        neutral: {
          ...poThemeDefaultNeutrals
        }
      },
      onRoot: {
        ...poThemeDefaultLightValues.onRoot,
        '--color-page-background-color-page': 'var(--color-neutral-light-05)'
      },
      perComponent: {
        ...poThemeDefaultLightValues.perComponent
      }
    },
    dark: {
      color: {
        brand: {
          '01': {
            lightest: '#6714d0',
            lighter: '#721ad6',
            light: '#8943e3',
            base: '#a166f0',
            dark: '#be93f9',
            darker: '#d8bffb',
            darkest: '#f1e5fe'
          },
          '02': {
            base: '#BD93F9'
          },
          '03': {
            base: '#FF5555'
          }
        },
        action: {
          ...poThemeDefaultActionsDark,
          disabled: 'var(--color-neutral-mid-40)'
        },
        feedback: {
          ...poThemeDefaultFeedbackDark,
          info: {
            ...poThemeDefaultFeedbackDark.info,
            base: '#0079b8'
          }
        },
        neutral: {
          light: {
            '00': '#1c1c1c',
            '05': '#202020',
            '10': '#2b2b2b',
            '20': '#3b3b3b',
            '30': '#5a5a5a'
          },
          mid: {
            '40': '#7c7c7c',
            '60': '#a1a1a1'
          },
          dark: {
            '70': '#c1c1c1',
            '80': '#d9d9d9',
            '90': '#eeeeee',
            '95': '#f8f8f2'
          }
        }
      },
      onRoot: {
        ...poThemeDefaultDarkValues.onRoot,
        '--color-page-background-color-page': 'var(--color-neutral-light-05)'
      },
      perComponent: {
        ...poThemeDefaultDarkValues.perComponent
      }
    }
  },
  active: PoThemeTypeEnum.light
};
