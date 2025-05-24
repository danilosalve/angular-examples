import { FilterByDescriptionPipe } from './filter-by-description.pipe';

describe('FilterByDescriptionPipe', () => {
  let pipe: FilterByDescriptionPipe;
  const users = [
    { id: '1', displayname: 'John Doe' },
    { id: '2', displayname: 'Jane Smith' },
    { id: '3', displayname: 'Alice Johnson' }
  ];

  beforeEach(() => {
    pipe = new FilterByDescriptionPipe();
  });
  it('deve ser criado', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve filtrar usuários por displayName', () => {
    const args = { type: 'displayName', query: 'John' };
    const result = pipe.transform(users, args);
    expect(result).toEqual([
      { id: '1', displayname: 'John Doe' },
      { id: '3', displayname: 'Alice Johnson' }
    ]);
  });

  it('deve filtrar usuários por id', () => {
    const args = { type: 'id', query: '2' };
    const result = pipe.transform(users, args);
    expect(result).toEqual([{ id: '2', displayname: 'Jane Smith' }]);
  });

  it('deve filtrar usuários por id ou displayName', () => {
    let args = { type: '', query: '2' };
    // deve filtrar pelo id
    expect(pipe.transform(users, args)).toEqual([{ id: '2', displayname: 'Jane Smith' }]);
    // deve filtrar pelo displayName
    args = { type: '', query: 'Alice Johnson' };
    expect(pipe.transform(users, args)).toEqual([{ id: '3', displayname: 'Alice Johnson' }]);
  });

  it('deve retornar todos os usuários se a consulta estiver vazia', () => {
    const args = { type: 'displayName', query: '' };
    const result = pipe.transform(users, args);
    expect(result).toEqual(users);
  });
});
