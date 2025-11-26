import { Clima } from './clima';

/**
 * Interface para API de Previsão do tempo da BrasilAPI
 */
export interface Climate {
  cidade: string;
  estado: string;
  atualizado_em: string;
  clima: Clima[];
}
