import {createContext, useContext} from 'react';

import logo from './assets/logo.svg';
import lemon from './assets/lemon.png';
// import header_image from './assets/lemon_dessert.jpg';
import header_image from './assets/restaurant.jpg';

import special_greek_salad from './assets/special_greek_salad.jpg';
import special_bruschetta from './assets/special_bruschetta.jpg';
import special_lemon_dessert from './assets/special_lemon_dessert.jpg';
import special_placeholder from './assets/special_placeholder.jpg';


const tmpContext = {
  'logo':logo,
  'lemon':lemon,
  'header_image':header_image,
  'app_name':'Little Lemon',
  'nav_links': [
    {'key':1, 'url':'#Home', 'title':'Home'},
    {'key':2, 'url':'#About', 'title':'About'},
    {'key':3, 'url':'#Menu', 'title':'Menu'},
    {'key':4, 'url':'#Reservations', 'title':'Reservations'},
    {'key':5, 'url':'#Order_online', 'title':'Order online'},
    {'key':6, 'url':'#Login', 'title':'Login'}
  ],

  'specials':[
    {'key':1,
      'dish':'Greek Salad',
      'price':"$12.99",
      'img':special_greek_salad,
      'desc':'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'},

    {'key':2,
      'dish':'Brushetta',
      'price':"$7.99",
      'img':special_bruschetta,
      'desc':'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'},

    {'key':3,
      'dish':'Lemon Dessert',
      'price':"$7.99",
      'img':special_lemon_dessert,
      'desc':'Just try it!'},

    {'key':4,
      'dish':'Grilled Fish',
      'price':"$21.99",
      'img':special_placeholder,
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.'},

    {'key':5,
      'dish':'Pasta',
      'price':"$15.99",
        'img':special_placeholder,
        'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.'},

    {'key':6,
      'dish':'Special #5',
      'price':"$13.99",
      'img':special_placeholder,
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.'},
  ],

  'testimonials':[
    {'key':1,
      'title':'Review #1',
      'review':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.'},

    {'key':2,
      'title':'Review #2',
      'review':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.'},

    {'key':3,
      'title':'Review #3',
      'review':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.'},

    {'key':4,
      'title':'Review #4',
      'review':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.'},

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
