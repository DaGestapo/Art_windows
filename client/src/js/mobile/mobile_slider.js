export class MobileSlider {
    constructor() {
        this.current = 1;
        this.controll = document.querySelector('.block6__controlls');
        this.slides = document.querySelectorAll('.block6__slider-item');
        this.slider = document.querySelector('.block6__slider');

        this.setSliderHeight();
        this.listener();
        this.slide();
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

    setSliderHeight() {
        const slide = this.slides[0];
        const slider = this.slider;

        setTimeout( () => {
            const height = slide.getBoundingClientRect().height;
            slider.style.height = `${height + 20}px`;
        }, 150)
    }

    slide() {
        const slides = this.slides;

        slides.forEach( (item, index ) => {
            item.style.transform = `translateX(${index * 110}%)`;
        });
    }


    toLeft() {
        const slides = this.slides;
        this.current++;

        if(this.current > 1) {
            this.current = 1;
        } 

        slides.forEach( (item, index ) => {
            item.style.transform = `translateX(${ ((this.current + index) * 110) - 110 }%)`;
        });
    }

    toRight() {
        const slides = this.slides;
        this.current--;

        if(this.current < -slides.length + 2) {
            this.current = -slides.length +2;
        } 

        slides.forEach( (item, index ) => {
            item.style.transform = `translateX(${ ((this.current + index) * 110) - 110 }%)`;
        });
    }
}