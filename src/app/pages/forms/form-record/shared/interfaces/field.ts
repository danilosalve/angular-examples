export interface Field {
  type: 'string' | 'number' | 'boolean' | 'email';
  name: string;
  label: string;
  placeHolder?: string;
  value?: string | number | boolean;
  required?: string;
}
