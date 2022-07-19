import { CartInterface, PropertiesType } from '../../types/types';

class Cart implements CartInterface {
    cartContent: PropertiesType;
    constructor() {
        this.cartContent = {};
    }

    public addCartListener() {
        const cards = document.querySelectorAll('.card');
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
        const cartValue = document.querySelector('.cart-value') as HTMLParagraphElement;
        if (+cartValue.innerHTML === 20) {
            const cartFull = document.querySelector('.full') as HTMLParagraphElement;
            cartFull.classList.add('full-active');
            return;
        }
        const countInstruments = currentCard.querySelector('.count-value') as HTMLSpanElement;
        const countInstrumentsReserved = currentCard.querySelector('.manage-cart-value') as HTMLSpanElement;

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
        const countInstruments = currentCard.querySelector('.count-value') as HTMLSpanElement;
        const countInstrumentsReserved = currentCard.querySelector('.manage-cart-value') as HTMLSpanElement;
        const cartValue = document.querySelector('.cart-value') as HTMLParagraphElement;
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
                const countInstrumentsReserved = card.querySelector('.manage-cart-value') as HTMLSpanElement;
                countInstrumentsReserved.innerHTML = this.cartContent[key];
                const countInstruments = card.querySelector('.count-value') as HTMLSpanElement;
                countInstruments.innerHTML = +countInstruments.innerHTML - +this.cartContent[key] + '';
            }
        }
    }
}

export default Cart;
