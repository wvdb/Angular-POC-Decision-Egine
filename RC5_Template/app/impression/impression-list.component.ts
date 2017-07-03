import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImpressionService } from './impression.service';

@Component({
  selector: 'impression-list',
  moduleId: module.id,
  templateUrl: 'impression-list.component.html',
  providers:[ImpressionService]
})

export class ImpressionListComponent {
  rows: any[];
  customerId: string = '';
  errorMessage: string;
  submitted: boolean = false;

  constructor(private _impressionService : ImpressionService) {}

  // ngOnInit(){
  //         if (this.customerId != '') {
  //           console.log('ngOnInit -> customer with id: ' + this.customerId);
  //
  //           this._impressionService.getImpressions(this.customerId)
  //                   .subscribe(responseImpressions => this.rows = responseImpressions,
  //                              responseError => this.errorMessage = 'Retrieving impressions failed. ' || responseError);
  //         }
  // }

  onEnter(value: string) {
    console.log('onEnter: value of customerId = ' + value);
    this.customerId = value;

    this.submitted = true;

    if (this.customerId != '') {
      console.log('onEnter -> customer with id: ' + this.customerId);

      this._impressionService.getImpressions(this.customerId)
              .subscribe(responseImpressions => this.rows = responseImpressions,
                         responseError => this.errorMessage = 'Retrieving impressions failed. ' || responseError);
    }
  }
}
