/**
 * Links para navegar para outras páginas.
 */
export interface LinksApiResponse {
  /* URL para navegação para primeira página */
  first: string;
  /* URL para navegação para página anterior */
  previous: string;
  /* URL para navegação para próxim página */
  next: string;
  /* URL para navegação para última página */
  last: string;
}
