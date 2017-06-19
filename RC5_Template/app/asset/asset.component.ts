import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from './asset.service';

@Component({
    selector: 'selector',
    moduleId: module.id,
    templateUrl: 'asset.component.html'
})

export class AssetComponent implements OnInit{
    abstract;
    errorMessage: string;
    asset: any = {};

    constructor(
        private assetService: AssetService,
        private route: ActivatedRoute) {

    }

    ngOnInit(){
        this.assetService.getAsset(this.route.snapshot.params['id'])
            .subscribe(responseSelector => {
                this.asset = responseSelector,
                responseError => this.errorMessage = 'Retrieving Asset failed. ' || responseError;
            })
    }

}


