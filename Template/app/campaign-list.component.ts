import { Component, OnInit } from '@angular/core';
import { CampaignService} from './campaign.service';

@Component({
  selector: 'campaign-list',
    //template: `<h2>Test</h2>`
  template: `<h2>Campaign Overview</h2>
                <ul *ngFor="let campaign of campaigns">
                    <li>{{campaign.name}} {{campaign.description}} {{campaign.creationTime}}</li>
                </ul>`
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
