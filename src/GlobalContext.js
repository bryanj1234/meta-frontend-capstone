import logo from './assets/logo.svg';
import {createContext, useContext} from 'react';

const tmpContext = {
  'logo':logo,
  'app_name':'Little Lemon',
  'nav_links': [
    {'key':1, 'url':'#Home', 'title':'Home'},
    {'key':2, 'url':'#About', 'title':'About'},
    {'key':3, 'url':'#Menu', 'title':'Menu'},
    {'key':4, 'url':'#Reservations', 'title':'Reservations'},
    {'key':5, 'url':'#Order_online', 'title':'Order online'},
    {'key':6, 'url':'#Login', 'title':'Login'}
  ],
};
export const GlobalContext = createContext(tmpContext);

export const useGC = () => useContext(GlobalContext);
