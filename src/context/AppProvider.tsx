import { Context } from './AppContext';
import { PropsProvider, AppState } from '../interfaces/interfaces';

const state: AppState = {
  name: 'Black Widow',
  url: 'http://marvel.io/bw',
  time: '2 horas'
}

export const AppProvider = ({ children }: PropsProvider) => {
  return(
    <Context.Provider value={{ state }}>
      { children }
    </Context.Provider>
  )
}