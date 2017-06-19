import { Component, OnInit } from '@angular/core';
import { CampaignService} from './campaign.service';

@Component({
  selector: 'campaign-list',
  moduleId: module.id,
  templateUrl: 'campaign-list.component.html'
  //  template: `<h2>Campaign Overview</h2>
  //                   <ngx-datatable
  //                      class="material"
  //                      [rows]="rows"
  //                      columnMode="force"
  //                      [headerHeight]="50"
  //                      [footerHeight]="0"
  //                      [rowHeight]="50"
  //                      [scrollbarV]="true">
  //                      <ngx-datatable-column name="Name" [width]="300" prop="name"></ngx-datatable-column>
  //                      <ngx-datatable-column name="Description" prop="description"></ngx-datatable-column>
  //                      <ngx-datatable-column name="Created" prop="creationTime"></ngx-datatable-column>
  //                      <ngx-datatable-column name="Owner" [width]="300" prop="owner"></ngx-datatable-column>
  //                      <ngx-datatable-column name="Start" [width]="300" prop="startTime"></ngx-datatable-column>
  //                      <ngx-datatable-column name="End" [width]="300" prop="endTime"></ngx-datatable-column>
  //                   </ngx-datatable>`
})

export class CampaignListComponent implements OnInit{
    abstract;
    rows: any[];
    errorMessage: string;

    constructor(private _campaignService : CampaignService) {}

    ngOnInit(){
            this._campaignService.getCampaigns()
                    .subscribe(responseCampaigns => this.rows = responseCampaigns,
                               responseError => this.errorMessage = 'Retrieving Campaigns failed. ' || responseError);
    }
}
