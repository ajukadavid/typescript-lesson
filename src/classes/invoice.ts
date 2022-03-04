import { HasFormatter } from '../interfaces/hasFormatter.js'

export class Invoice implements HasFormatter {
    //     client: string;
    //     details: string;
    //   private amount: number
    
        constructor(
            readonly client: string,
            private details: string,
            public amount: number
        ){}
    
        format() {
            return `${this.client} owes $ ${this.amount} for  ${this.details}`
        }
    }