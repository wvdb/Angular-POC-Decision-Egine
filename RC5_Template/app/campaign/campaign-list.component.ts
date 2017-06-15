import { Component, OnInit } from '@angular/core';
import { CampaignService} from './campaign.service';

@Component({
  selector: 'campaign-list',
  template: `<h2>Campaign Overview</h2>
                <table border="2px">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Owner</th>
                        <th>Creation Time</th>
                        <th>Enabled</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Asset</th>
                        <th>Selector</th>
                    </tr>
                    </thead>
                    <tr *ngFor="let campaign of rows">
                        <td align="center">{{campaign.id}}</td>
                        <td>{{campaign.name}}</td>
                        <td>{{campaign.description}}</td>
                        <td>{{campaign.owner}}</td>
                        <td>{{campaign.creationTime}}</td>
                        <td align="center">{{campaign.enabled == true ? 'Yes' : 'No'}}</td>
                        <td>{{campaign.startTime}}</td>
                        <td>{{campaign.endTime}}</td>
                        <td>
                            <table border="0px">
                                <tr *ngFor="let asset of campaign.assets">
                                    <!--<td>{{asset.id}}</td>-->
                                    <td>{{asset.name}}</td>
                                    <!--<td>{{asset.filename}}</td>-->
                                    <!--<td>{{asset.duration}}</td>-->
                                    <td>{{asset.index}}</td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table border="0px" >
                                <tr *ngFor="let selector of campaign.selectors">
                                    <!--<td>{{selector.id}}</td>-->
                                    <td>{{selector.name}}</td>
                                    <!--<td>{{selector.description}}</td>-->
                                    <!--<td>{{selector.priority}}</td>-->
                                    <!--<td>{{selector.maxViews}}</td>-->
                                    <!--<td>{{selector.coolDownPeriod}}</td>-->
                                    <td>{{selector.enabled == true ? 'Yes' : 'No'}}</td>
                                    <!--<td>{{selector.startTime}}</td>-->
                                    <!--<td>{{selector.endTime}}</td>-->
                                    <!--<td>{{selector.rule}}</td>-->
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <h5>{{errorMessage}}</h5>`
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
