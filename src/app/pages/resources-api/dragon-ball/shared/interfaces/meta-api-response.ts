/**
 * Informações de paginação da requisição
 */
export interface MetaApiResponse {
  /* Quantidade total de Itens */
  totalItems: number;
  /* Quantidade de itens retornados */
  itemCount: number;
  /* Quantidade de itens por página*/
  itemsPerPage: number;
  /* Quantidade total de páginas */
  totalPages: number;
  /* Página Atual */
  currentPage: number;
}
