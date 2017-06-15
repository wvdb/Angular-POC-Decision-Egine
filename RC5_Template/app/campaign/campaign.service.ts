import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CampaignService {
    private _url = "http://localhost:8080/campaigns";

    constructor(private _http: Http) {}

    getCampaigns() {
        return this._http.get(this._url)
            .map((response:Response) => response.json())
            //.do(data => console.log('Campaigns retrieved: '+ JSON.stringify(data)))
            .catch(CampaignService._handleError);
    }

    static _handleError(error: Response) {
        //console.error('Retrieving Campaign Failed: error = ' || error);
        console.error(error);
        return Observable.throw(error)
    }

}
