import logo from './assets/logo.svg';
import { createContext } from 'react';


const tmpContext = {'logo':logo, 'app_name':'Little Lemon'};
export const GlobalContext = createContext(tmpContext);