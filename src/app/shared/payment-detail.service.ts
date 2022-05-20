import { Injectable } from '@angular/core';
import { PaymentDetails } from './payment-details.model';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:56033/api/PaymentDetail';
  formData: PaymentDetails = new PaymentDetails();
  list: PaymentDetails[];

  postPaymentDetail(){
    return this.http.post(this.baseURL, this.formData);
  }

  putPaymentDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
    // return this.http.put(this.baseURL + '/?id=' + this.formData.paymentDetailId, this.formData);
  }


  deletePaymentDetail(id: number){
    return this.http.delete(`${this.baseURL}/${id}`);
       // return this.http.delete('http://localhost:56033/api/PaymentDetail/?id=' + id);
      //  return this.http.delete(this.baseURL + '/?id=' + id);
    
  }


  refreshList(){
    this.http.get(this.baseURL)
             .toPromise()
             .then(res => this.list = res as PaymentDetails[]);
  }
}
