import { createContext } from 'react';

import { AppState } from '../interfaces/interfaces';

type State = {
  state: AppState
}

export const Context = createContext<State>({} as State);