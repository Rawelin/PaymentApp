import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetails } from 'src/app/shared/payment-details.model';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(this.service.formData.paymentDetailId == 0){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm){
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submited successfully', 'Payment Detail Register')
      },
      err => {console.log(err); }
    )
  }

  updateRecord(form: NgForm){
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Payment Detail Register')
      },
      err => {console.log(err); }
    )
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetails();
  }

}
