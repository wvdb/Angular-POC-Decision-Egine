import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from './asset.service';

import { APP_CONFIG, IAppConfig } from '../app.config';

@Component({
    selector: 'selector',
    moduleId: module.id,
    templateUrl: 'asset.component.html'
})

export class AssetComponent implements OnInit{
    abstract;
    errorMessage: string;
    asset: any = {};
    campaignName: string;

    constructor(
        private assetService: AssetService,
        private route: ActivatedRoute) {
    }

    ngOnInit(){
        this.campaignName = this.route.snapshot.params['campaignName'];
        this.assetService.getAsset(this.route.snapshot.params['id'])
            .subscribe(responseSelector => {
                this.asset = responseSelector,
                responseError => this.errorMessage = 'Retrieving Asset failed. ' || responseError;
            })
    }

}
