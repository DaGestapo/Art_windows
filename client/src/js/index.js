import "../scss/main.scss";

//Mobile
import {MobileMenu} from './mobile/mobile_menu.js';


 (() => {
   if (typeof document === 'undefined') return;

   let menu;

   setTimeout( () => menu = new MobileMenu());
 })();