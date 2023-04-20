// Styles
import "../scss/main.scss";

// Main scripts
import { BtnWave } from './animations/animations_btn-wave';

//Mobile
import {MobileMenu} from './mobile/mobile_menu.js';
import {MobileSlider} from './mobile/mobile_slider.js'
import {BoxIcons} from './box-icons/setAtribute-toBoxIcxons.js'


 (() => {
   if (typeof document === 'undefined') return;

   // Init all classes
   setTimeout( () => {
    let boxicons = new BoxIcons('block7');
      boxicons.setSize('5rem')

    new BtnWave();
    new MobileMenu();
    new MobileSlider();
   });


 })();