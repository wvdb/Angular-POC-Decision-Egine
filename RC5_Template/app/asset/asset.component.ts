import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetService } from './asset.service';

@Component({
    selector: 'selector',
    template: `<!--<h2>Asset</h2>-->
                <table border="2px">
                        <tr>
                            <td>Id</td>
                            <td>{{asset.id}}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{{asset.name}}</td>
                        </tr>
                        <tr>
                            <td>Filename</td>
                            <td>{{asset.filename}}</td>
                        </tr>
                        <tr>
                            <td>Priority</td>
                            <td>{{asset.priority}}</td>
                        </tr>
                        <tr>
                            <td>Duration</td>
                            <td>{{asset.duration}}</td>
                        </tr>
                        <tr>
                            <td>Index</td>
                            <td>{{asset.index}}</td>
                        </tr>
                        <tr>
                            <td>TrackingCode</td>
                            <td>{{asset.trackingCode}}</td>
                        </tr>
               </table>
    `
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


