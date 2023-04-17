export class BtnWave {
    constructor() {
        this.checker = true;
        this.currentWave = null;
        this.listener();
    }

    listener() {
        window.addEventListener('pointerover', handler);

        function handler(e) {
            const target = e.target.closest('a[wave]');
            if(!target) return;
    
            const posY = e.clientY - target.getBoundingClientRect().top,
                posX = e.clientX - target.getBoundingClientRect().left;
            this.checker = false;
            const wave = createWaveEl(posX, posY, target);

            setTimeout(() => {
                if(wave != undefined) {
                    wave.remove();
                }
            }, 1000);

            window.addEventListener('pointerout', pointerOut);

            function pointerOut(e) {
                const target = e.target.closest('a[wave]');
                if(!target && wave) return;

                window.addEventListener('pointerover', handler);
                window.removeEventListener('pointerout', pointerOut);
            }
        }

        const createWaveEl = (posX, posY, target) => {
            const wave = document.createElement('div');
            wave.className = 'wave';
            target.append(wave);

            const PositionObj = this.getCenter(posX, posY, wave);
    
            wave.style.top = `${PositionObj.posY}px`;
            wave.style.left = `${PositionObj.posX}px`;
    
            window.removeEventListener('pointerover', handler);
            return wave;
    
        }
    }

    getCenter(posX, posY, element) {
        const elemHalfOfWidth = element.clientWidth/2,
            elemHalfOfHeight = element.clientHeight/2;

        return {
            posX:  posX - elemHalfOfWidth,
            posY: posY - elemHalfOfHeight
        }
    }



}