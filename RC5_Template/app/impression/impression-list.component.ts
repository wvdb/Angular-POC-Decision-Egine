import { Component, OnInit } from '@angular/core';
//import { CampaignService} from './campaign.service';

@Component({
  selector: 'impression-list',
  moduleId: module.id,
  templateUrl: 'impression-list.component.html'
})

export class ImpressionListComponent implements OnInit{
    abstract;
    rows: any[];
    errorMessage: string;

    //constructor(private _campaignService : CampaignService) {}
    constructor() {}

    //ngOnInit(){
    //        this._campaignService.getCampaigns()
    //                .subscribe(responseCampaigns => this.rows = responseCampaigns,
    //                           responseError => this.errorMessage = 'Retrieving Campaigns failed. ' || responseError);
    //}
    ngOnInit(){
    }
}
