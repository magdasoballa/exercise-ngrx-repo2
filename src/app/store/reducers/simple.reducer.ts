import { Action } from '@ngrx/store';

export const simpleReducer = (
  state: string = 'hello world',
  action: Action
) => {
  console.log(action.type, state);

  switch (action.type) {
    case 'SPANISH':
      return (state = 'Hola mundo');

    case 'FRENCH':
      return (state = 'Bonjour le monde');

    default:
      return state;
  }
};
