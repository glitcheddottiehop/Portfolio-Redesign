import AutoBind from "auto-bind";
/**@ts-ignore */
import normalizeWheel from 'normalize-wheel';

interface SlideShowArgs {
    root: HTMLElement;
    slider: HTMLElement;
    sliderFirst: HTMLElement;
    sliderSecond: HTMLElement;
}

interface ScrollParams {
    current: number,
    target: number,
    ease: number
}

export class SlideShow {
    root!: HTMLElement;
    slider!: HTMLElement;
    sliderFirst!: HTMLElement;
    sliderSecond!: HTMLElement;
    scroll: ScrollParams = {
        current: 0,
        target: 0,
        ease: 0.1
    };
    sliderBounds: DOMRect;
    multiplier: number = 1;

    constructor(args: SlideShowArgs) {
        Object.assign(this, args);
        this.sliderBounds = this.slider.getBoundingClientRect()

        AutoBind(this);

        this.addEvents();
        this.onResize();
        this.createRAF();
    }

    addEvents() {
        window.addEventListener("mousewheel", this.onMouseWheel);
        window.addEventListener("resize", this.onResize);
    }

    onMouseWheel(event: Event) {
        const normalized = normalizeWheel(event);
        const { pixelY } = normalized;
        this.scroll.target += pixelY;
    }

    onResize() {
        this.sliderBounds = this.slider.getBoundingClientRect();
    }

    createRAF() {
        requestAnimationFrame(this.update);
    }

    update() {
        this.scroll.current +=
            (this.scroll.target - this.scroll.current) * this.scroll.ease;

        // arbitrary value to allow more scroll
        const multipliedScroll = this.scroll.current * 1.5;
        const multipliedIndex = (multipliedScroll / this.sliderBounds.width) * 2;
        this.multiplier = Math.floor(multipliedIndex);

        this.sliderFirst.style.transform = `translateX(${ -multipliedScroll + (this.multiplier * this.sliderBounds.width) / 2
            }px)`;

        this.sliderSecond.style.transform = `translateX(${ -multipliedScroll + (this.multiplier * this.sliderBounds.width) / 2
            }px)`;

        requestAnimationFrame(this.update);
    }
}
