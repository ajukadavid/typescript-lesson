import { HasFormatter } from '../interfaces/hasFormatter.js'

export class Payment implements HasFormatter {
    //     client: string;
    //     details: string;
    //   private amount: number
    
        constructor(
            readonly recepient: string,
            private details: string,
            public amount: number
        ){}
    
        format() {
            return `${this.recepient} is owed $ ${this.amount} for  ${this.details}`
        }
    }