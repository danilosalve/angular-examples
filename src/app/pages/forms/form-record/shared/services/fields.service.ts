import { Injectable } from '@angular/core';
import { Field } from '../interfaces/field';
import { PoCheckboxGroupOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root',
})
export class FieldsService {
  getFields(): Field[] {
    return [
      {
        type: 'string',
        name: 'name',
        label: 'Nome',
        placeHolder: 'Informe seu nome',
        required: 'true',
      },
      {
        type: 'email',
        name: 'email',
        label: 'E-Mail',
        placeHolder: 'Informe o seu e-mail',
      },
      {
        type: 'number',
        name: 'age',
        label: 'Idade',
        placeHolder: '0',
        required: 'true',
      },
      {
        type: 'string',
        name: 'department',
        label: 'Departamento',
        placeHolder: 'Informe o seu Departamento',
      },
      {
        type: 'string',
        name: 'position',
        label: 'Cargo',
        placeHolder: 'Informe o seu Cargo',
      },
      {
        type: 'number',
        name: 'cellphone',
        label: 'Nº Celular',
        placeHolder: '(99) 99999-9999',
      },
    ];
  }

  getOptionsFields(): PoCheckboxGroupOption[] {
    return [
      {
        label: 'Nome',
        value: 'name',
        disabled: false,
      },
      {
        label: 'E-mail',
        value: 'email',
        disabled: false,
      },
      {
        label: 'Idade',
        value: 'age',
        disabled: false,
      },
      {
        label: 'Departamento',
        value: 'department',
        disabled: false,
      },
      {
        label: 'Cargo',
        value: 'position',
        disabled: false,
      },
      {
        label: 'Nº Celular',
        value: 'cellphone',
        disabled: false,
      },
    ];
  }
}
