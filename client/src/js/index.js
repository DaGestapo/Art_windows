// Styles
import "../scss/main.scss";

// Main scripts
import { BtnWave } from './animations/animations_btn-wave';

//Mobile scripts
import {MobileMenu} from './mobile/mobile_menu.js';

//Main scripts
import {BoxIcons} from './box-icons/setAtribute-toBoxIcxons.js';
import {Slider} from './scripts/scripts-slider.js';



 (() => {
    if (typeof document === 'undefined') return;

    // Init all classes
    setTimeout( () => {
      let boxicons = new BoxIcons('block7');
      boxicons.setSize('5rem')

      // Mobile Slider
      new Slider('block6__controlls', 'block6__slider-item', 'block6__slider');
      // Sertificats Slider
      new Slider('sectificats__controll', 'sectificats-item', 'sectificats__slider')

      new BtnWave();
      new MobileMenu();
    });


 })();