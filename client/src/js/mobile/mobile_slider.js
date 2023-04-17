export class MobileSlider {
    constructor() {
        this.current = 1;
        this.controll = document.querySelector('.block6__controlls');
        this.sliders = document.querySelectorAll('.block6__slider-item');

        this.listener();
        this.slider();
    }

    listener() {
        const controll = this.controll;

        const handler = (e) => {
            let target = e.target.closest('button');

            if(!target) return;

            if(target.hasAttribute('left')) {
                this.toLeft();

            } else if(target.hasAttribute('right')) {
                this.toRight();

            }
        }

        controll.addEventListener('click', handler);
    }

    slider() {
        const sliders = this.sliders;

        sliders.forEach( (item, index ) => {
            item.style.transform = `translateX(${index * 110}%)`;
        });
    }


    toLeft() {
        const sliders = this.sliders;
        this.current++;

        if(this.current > 1) {
            this.current = 1;
        } 

        sliders.forEach( (item, index ) => {
            item.style.transform = `translateX(${ ((this.current + index) * 110) - 110 }%)`;
        });
    }

    toRight() {
        const sliders = this.sliders;
        this.current--;

        if(this.current < -sliders.length + 2) {
            this.current = -sliders.length +2;
        } 

        sliders.forEach( (item, index ) => {
            item.style.transform = `translateX(${ ((this.current + index) * 110) - 110 }%)`;
        });
    }
}