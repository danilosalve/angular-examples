/**
 * @description
 * Usuários
 */
export interface User {
  id: string;
  displayname: string;
}

/**
 * @description
 * Interface para a API de Usuários
 */
export interface UserAPIResponse {
  /** Lista de Usuários */
  data: User[];
  /** Se existe próxima página */
  hasNext: boolean;
  /** URL para próxima página */
  nextPageUrl: string;
  /** Total de registros */
  remainingRecords: number;
}
