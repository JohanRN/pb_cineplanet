class Card {
    constructor(
        public email: string,
        public card_number: string,
        public expiration_year: number,
        public expiration_month: number,
        public cvv: string,
    ) {
        this.email;
        this.card_number;
        this.expiration_year;
        this.expiration_month;
        this.cvv;
    }

    hiddenInformation() {
        return new CardHidden(this.email, this.card_number, this.expiration_year, this.expiration_month)
    }

}
class CardHidden {
    constructor(public email: string,
        public card_number: string,
        public expiration_year: number,
        public expiration_month: number) {
    }
}

export default Card;