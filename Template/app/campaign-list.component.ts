import { Component, OnInit } from '@angular/core';
import { CampaignService} from './campaign.service';

@Component({
  selector: 'campaign-list',
  template: `<h2>Campaign Overview</h2>
                <table border="2px">
                    <th>Name</th>
                    <th>Description</th>
                    <th>Creation Time</th>
                    <tr *ngFor="let campaign of campaigns">
                        <td>{{campaign.name}}</td>
                        <td>{{campaign.description}}</td>
                        <!--<td>{{campaign.creationTime | date:'dd/MM/yyyy HH:mm:ss'}}</td>-->
                        <td>{{campaign.creationTime}}</td>
                    </tr>
                </table>`
})

export class CampaignListComponent implements OnInit{
    campaigns = [];

    constructor(private _campaignService : CampaignService) {}

    ngOnInit(){
            this.campaigns = this._campaignService.getCampaigns();
    }

    //ngOnInit(){
    //        this._campaignService.getCampaigns()
    //                .subscribe(responseCampaignData => this.campaigns = responseCampaignData);
    //}
}
