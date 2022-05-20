import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetails } from '../shared/payment-details.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
   this.service.refreshList()
  }

  populateForm(selectedRecord: PaymentDetails){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number)
  {
    if(confirm('Are you sure ?')){
      this.service.deletePaymentDetail(id)
      .subscribe(
        res => {
          this.service.refreshList();
          this.toastr.error("Deleted successfully", "Payment Detail register")
        },
        err => {console.log(err)}
      )
    }
  }

}
