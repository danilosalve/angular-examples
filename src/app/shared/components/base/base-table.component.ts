export abstract class BaseTableComponent {
  height: number;
  elements: string[];

  constructor(height = 400, elements: string[]) {
    this.height = height;
    this.elements = elements;
  }

  /**
   * Recalcula o tamanho da tela após iniciar a visualização do modelo
   */

  /**
   * Recalcula o tamanho da tabela, deve ser executado ao redimencionar a tela
   */
  onResize(): void {
    setTimeout(() => this.setHeight(), 200);
  }

  /**
   * Define a altura da tabela
   */
  setHeight(): void {
    const elementsHeight: number[] = [];
    this.elements.forEach(el => {
      elementsHeight.push(this.getElementHeightById(el));
    });
    this.height = this.calculateHeight(elementsHeight) - 145;
  }

  /**
   * Obtem a altura de um elemento utilizando o Id do elemento
   * @param {string} id Id do elemento
   * @returns {number} altura do elemento, se não for encontrado retorna zero.
   */
  getElementHeightById(id: string): number {
    const el = document.querySelector(id);
    return el ? el.clientHeight : 0;
  }

  /**
   * Calcula a altura dos elementos
   * @param {number[]} elementsHeight Vetor com o tamanho dos elementos
   * @returns {number} Altura total dos elementos
   */
  calculateHeight(elementsHeight: number[]): number {
    return elementsHeight.reduce((amount, currency) => amount - currency, window.innerHeight);
  }
}
