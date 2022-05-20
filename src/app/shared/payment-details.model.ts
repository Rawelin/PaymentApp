import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class PaymentDetails {
    paymentDetailId: number=0;
    cardOwnerName: string='';
    cardNumber: string='';
    expirationDate: string='';
    securityCode: string='';

    // constructor(){
    //     this.paymentDetailId = 0;
    // }
}
