import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './customer.service';

@Component({
  selector: 'customer-list',
  moduleId: module.id,
  templateUrl: 'customer-list.component.html',
  providers:[CustomerService]
})

export class CustomerListComponent {
  rows: any[] = [];
  previousCustomerId: string = '';
  errorMessage: string;
  submitted: boolean = false;

  constructor(private _customerService : CustomerService) {}

  ngOnInit(){
            this._customerService.getCustomers()
                    .subscribe(responseImpressions => {
                                  this.rows = responseImpressions

                                  for (var i=0; i < this.rows.length; i++) {
                                      if (this.rows[i].household == this.previousCustomerId) {
                                        this.rows[i].household = '';
                                      }
                                      else {
                                        this.previousCustomerId = this.rows[i].household;
                                      }
                                  }

                               },
                               responseError => this.errorMessage = 'Retrieving data failed. ' || responseError);
  }

}
