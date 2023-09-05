import logo from './assets/logo.svg';
import {createContext, useContext} from 'react';

const tmpContext = {'logo':logo, 'app_name':'Little Lemon'};
export const GlobalContext = createContext(tmpContext);

export const useGC = () => useContext(GlobalContext);
