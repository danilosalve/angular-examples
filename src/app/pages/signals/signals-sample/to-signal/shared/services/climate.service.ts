import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Climate } from '../interfaces/climate';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {
  /** URL para buscar a previsão de tempo na Brasil API*/
  private readonly apiUrl = 'https://brasilapi.com.br/api/cptec/v1/clima/previsao';
  private readonly http = inject(HttpClient);

  /**
   * Obter previsão do tempo para a cidade de São Paulo
   * @returns
   */
  getClimateToSP(): Observable<Climate> {
    return this.http.get<Climate>(`${this.apiUrl}/244`).pipe(shareReplay(1));
    // return of({
    //   cidade: 'São Paulo',
    //   estado: 'SP',
    //   atualizado_em: '2025-01-01',
    //   clima: [
    //     {
    //       data: '2025-03-01',
    //       condicao: 'pn',
    //       condicao_desc: 'parcialmente nublado',
    //       min: 1,
    //       max: 21,
    //       indice_uv: 0
    //     }
    //   ]
    // });
  }
}
