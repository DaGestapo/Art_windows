export class MobileMenu {
    constructor() {
        this.menuEl = document.querySelector('.mobile_menu');
        this.hamburger = document.querySelector('.block1__hamburger');
        this.header = document.querySelector('.block1__header');
        this.checker = false;

        this.setPositionOnClose();
        this.listener();
    }

    positionOnOpen() {
        const header = this.header;
        const headerHeight = header.getBoundingClientRect().height;
        return headerHeight;
    }

    positionOnClose() {
        return -this.menuEl.offsetHeight;
    }

    listener() {
        const button = this.hamburger;
        const menu = this.menuEl;
        const header = this.header;

        button.addEventListener('click', handler);

        let openY = this.positionOnOpen(),
            closeY = this.positionOnClose();
            
        function handler() {

            if(!this.checker) {
                menu.classList.add('open');
                header.classList.add('open');
                menu.style.top = `${openY}px`;

                this.checker = true;
            } else {
                menu.classList.remove('open');

                menu.style.top = `${closeY}px`;
        
                setTimeout( () => {
                    header.classList.remove('open');
                }, 110)

                this.checker = false;
            }

        }
        
    }

    setPositionOnClose() {
        let menu = this.menuEl;
        menu.style.top = `${-menu.offsetHeight}px`;
    }

    menuState() {
        return this.checker;
    }

}
