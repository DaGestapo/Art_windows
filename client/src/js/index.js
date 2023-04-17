// Styles
import "../scss/main.scss";

// Main scripts
import { BtnWave } from './animations/animations_btn-wave';

//Mobile
import {MobileMenu} from './mobile/mobile_menu.js';


 (() => {
   if (typeof document === 'undefined') return;

   // Init all classes
   setTimeout( () => {
    new BtnWave();
    new MobileMenu();
   });


 })();