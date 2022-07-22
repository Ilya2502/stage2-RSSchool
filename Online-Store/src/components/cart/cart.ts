import { ICart, PropertiesType } from '../../types/types';
import { SELECTOR } from '../../constants/constants';

class Cart implements ICart {
    cartContent: PropertiesType;
    constructor() {
        this.cartContent = {};
    }

    public addCartListener() {
        const cards = document.querySelectorAll(SELECTOR.CARD);
        cards.forEach((item) => {
            item.addEventListener('click', (event) => {
                const button = event.target as HTMLButtonElement;
                const currentCard = event.currentTarget as HTMLDivElement;
                if (button.classList.contains('add')) {
                    this.addInstrument(currentCard);
                } else if (button.classList.contains('delete')) {
                    this.deleteInstrument(currentCard);
                }
            });
        });
    }

    private addInstrument(currentCard: HTMLDivElement) {
        const id = currentCard.id;
        const cartValue = document.querySelector(SELECTOR.CART_VALUE) as HTMLParagraphElement;
        if (+cartValue.innerHTML === 20) {
            const cartFull = document.querySelector(SELECTOR.FULL) as HTMLParagraphElement;
            cartFull.classList.add('full-active');
            return;
        }
        const countInstruments = currentCard.querySelector(SELECTOR.COUNT_VALUE) as HTMLSpanElement;
        const countInstrumentsReserved = currentCard.querySelector(SELECTOR.MANAGE_CART_VALUE) as HTMLSpanElement;

        if (+countInstruments.innerHTML > 0) {
            countInstrumentsReserved.innerHTML = +countInstrumentsReserved.innerHTML + 1 + '';
            countInstruments.innerHTML = +countInstruments.innerHTML - 1 + '';
            cartValue.innerHTML = +cartValue.innerHTML + 1 + '';
            if (this.cartContent[id]) {
                this.cartContent[id] = +this.cartContent[id] + 1 + '';
            } else {
                this.cartContent[id] = '1';
                currentCard.classList.add('choose');
            }
        }
    }

    private deleteInstrument(currentCard: HTMLDivElement) {
        const id = currentCard.id;
        const countInstruments = currentCard.querySelector(SELECTOR.COUNT_VALUE) as HTMLSpanElement;
        const countInstrumentsReserved = currentCard.querySelector(SELECTOR.MANAGE_CART_VALUE) as HTMLSpanElement;
        const cartValue = document.querySelector(SELECTOR.CART_VALUE) as HTMLParagraphElement;
        if (+countInstrumentsReserved.innerHTML > 0) {
            countInstruments.innerHTML = +countInstruments.innerHTML + 1 + '';
            countInstrumentsReserved.innerHTML = +countInstrumentsReserved.innerHTML - 1 + '';
            cartValue.innerHTML = +cartValue.innerHTML - 1 + '';
            if (+this.cartContent[id] > 1) {
                this.cartContent[id] = +this.cartContent[id] - 1 + '';
            } else {
                delete this.cartContent[id];
                currentCard.classList.remove('choose');
            }
        }
    }

    public updateCount() {
        for (const key in this.cartContent) {
            const card = document.querySelector(`#${key}`) as HTMLDivElement;
            if (card) {
                card.classList.add('choose');
                const countInstrumentsReserved = card.querySelector(SELECTOR.MANAGE_CART_VALUE) as HTMLSpanElement;
                countInstrumentsReserved.innerHTML = this.cartContent[key];
                const countInstruments = card.querySelector(SELECTOR.COUNT_VALUE) as HTMLSpanElement;
                countInstruments.innerHTML = +countInstruments.innerHTML - +this.cartContent[key] + '';
            }
        }
    }
}

export default Cart;
