export class CurrencyFormatter {
  format(value: string | number): string {
    const numberValue = typeof value === 'string' ? parseFloat(value) : value;
    return numberValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 4,
      maximumFractionDigits: 4
    });
  }
}
