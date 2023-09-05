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
  'doormat': [
    {'key':1, 'url':'#TBD', 'title':'door #1'},
    {'key':2, 'url':'#TBD', 'title':'door #2'},
    {'key':3, 'url':'#TBD', 'title':'door #3'},
    {'key':4, 'url':'#TBD', 'title':'door #4'},
    {'key':5, 'url':'#TBD', 'title':'door #5'},
  ],
  'contact': [
    {'key':1, 'url':'#TBD', 'title':'email @'},
    {'key':2, 'url':'#TBD', 'title':'phone #'},
    {'key':3, 'url':'#TBD', 'title':'Street address'}
  ],
  'social': [
    {'key':1, 'url':'#TBD', 'title':'social #1'},
    {'key':2, 'url':'#TBD', 'title':'social #2'},
    {'key':3, 'url':'#TBD', 'title':'social #3'},
    {'key':4, 'url':'#TBD', 'title':'social #4'},
    {'key':5, 'url':'#TBD', 'title':'social #5'},
  ],
};
export const GlobalContext = createContext(tmpContext);

export const useGC = () => useContext(GlobalContext);
