import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService} from './campaign.service';

@Component({
  selector: 'campaign-list',
  moduleId: module.id,
  templateUrl: 'campaign-list.component.html',
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
    rows: any[] = [];

    errorMessage: string;
    campaignId: string;
    response: any;

    constructor(private _campaignService : CampaignService, private route: ActivatedRoute) {
    }

    ngOnInit(){
            console.log('Starting getCampaigns from campaign-list');
            this._campaignService.getCampaigns()
                    .subscribe(responseCampaigns => this.rows = responseCampaigns,
                               responseError => this.errorMessage = 'Retrieving Campaigns failed. ' || responseError);
    }

    removeCampaign(id:string) {
        console.log('Starting executeCampaignRemove from campaign-list. Removing campaign with id ' + id);
        this._campaignService.executeCampaignRemove(id)
               .subscribe((responseCampaigns) => {
                 this.response = responseCampaigns;

                 // by avoiding a call to ngOnInit, we don't have to read all the entries again from the database
                 // find the index of the deleted row in the rows array
                 let removedCampaignIndex =  this.rows.findIndex((row:any) => {
                   return row.id == id;
                 })
                 console.log("Removed Campaign Index is:" + removedCampaignIndex);

                 // update the rows array
                 this.rows.splice(removedCampaignIndex,1);
               },
               responseError => this.errorMessage = 'Executing campaign-remove failed. ' || responseError);
    }
}
