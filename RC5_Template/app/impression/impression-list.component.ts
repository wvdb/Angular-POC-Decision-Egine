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
  errorMessage: string;

  constructor(private _impressionService : ImpressionService) {}

  ngOnInit(){
          this._impressionService.getImpressions()
                  .subscribe(responseImpressions => this.rows = responseImpressions,
                             responseError => this.errorMessage = 'Retrieving impressions failed. ' || responseError);
  }
}
