import { Component, OnInit} from '@angular/core';
import { CampaignService} from '../campaign/campaign.service';

@Component({
    template: `<h2>Selector</h2>
                <table border="2px" *ngFor="let selector of selectors">
                        <tr>
                            <td>Id</td>
                            <td>{{selector.id}}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{{selector.name}}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{{selector.description}}</td>
                        </tr>
                        <tr>
                            <td>Priority</td>
                            <td>{{selector.priority}}</td>
                        </tr>
                        <tr>
                            <td>Maximum Views</td>
                            <td>{{selector.maxViews}}</td>
                        </tr>
                        <tr>
                            <td>Cool Down Period</td>
                            <td>{{selector.coolDownPeriod}}</td>
                        </tr>
                        <tr>
                            <td>Enabled</td>
                            <td>{{selector.enabled}}</td>
                        </tr>
                        <tr>
                            <td>Start Date</td>
                            <td>{{selector.startTime}}</td>
                        </tr>
                        <tr>
                            <td>End Date</td>
                            <td>{{selector.endTime}}</td>
                        </tr>
                        <tr>
                            <td>Rule</td>
                            <td>{{selector.rule}}</td>
                        </tr>
               </table>
    `
})

export class SelectorComponent implements OnInit{
    abstract;
    errorMessage: string;
    selectors: any[];

    constructor(private _campaignService : CampaignService) {
    }

    ngOnInit(){
        console.log('starting retrieveCampaigns (2)');
        this._campaignService.getCampaigns()
            .subscribe(responseCampaigns => this.selectors = responseCampaigns[0].selectors,
                       responseError => this.errorMessage = 'Retrieving Campaigns failed. ' || responseError)
    }

}


