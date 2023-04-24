// Styles
import "../scss/main.scss";

// Main scripts
import { BtnWave } from './animations/animations_btn-wave';

//Mobile scripts
import {MobileMenu} from './mobile/mobile_menu.js';

//Main scripts
import {BoxIcons} from './box-icons/setAtribute-toBoxIcxons.js';
import {Slider} from './scripts/scripts-slider.js';
import { LastGridPosition } from "./scripts/script-centralaze_sections.js";


 (() => {
    if (typeof document === 'undefined') return;

    let hiddenBlock1;
    let hiddenBlock2;

    document.addEventListener('DOMContentLoaded', () => {
      let boxicons = new BoxIcons('block7');
      boxicons.setSize('5rem')

      // Mobile Slider
      new Slider('block6__controlls', 'block6__slider-item', 'block6__slider');
      // Sertificats Slider
      new Slider('sectificats__controll', 'sectificats-item', 'sectificats__slider')

      new BtnWave();
      new MobileMenu();

      hiddenBlock1 = new LastGridPosition( 'block2__section-1');
      hiddenBlock2 = new LastGridPosition( 'block2__section-2');
    });

    window.addEventListener('resize', () => {
      let windowWidth = document.documentElement.clientWidth;

      if(windowWidth > 640) {
        hiddenBlock1.centralize();
        hiddenBlock2.centralize();
      } else {
        hiddenBlock2.normalize();
        hiddenBlock2.normalize();
      }
    });

 })();