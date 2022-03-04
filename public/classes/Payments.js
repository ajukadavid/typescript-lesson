export class Payment {
    //     client: string;
    //     details: string;
    //   private amount: number
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recepient} is owed $ ${this.amount} for  ${this.details}`;
    }
}
