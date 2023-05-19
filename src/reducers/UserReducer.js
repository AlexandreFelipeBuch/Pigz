export let initialState = {
  id: '',
  nome: '',
  email: '',
  cpf: '',
  dataNascimento: '',
  telefone: '',
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        id: action.payload.id,
        nome: action.payload.nome,
        email: action.payload.email,
        cpf: action.payload.cpf,
        dataNascimento: action.payload.dataNascimento,
        telefone: action.payload.telefone,
      };
    case 'SET_LANGUAGE':

    case 'CLEAR_USER':
      return initialState;

    default:
      return state;
  }
};
