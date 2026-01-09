/**
 * @description
 * Interface de Endereço retornando pela api `http://viacep.com.br/ws/${zipCode}/json/`
 */
export interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: string;
}
