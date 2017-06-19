import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { APP_CONFIG, IAppConfig } from '../app.config';

@Injectable()
export class CampaignService {
    private _url = "http://localhost:8080/campaigns";

    constructor(private _http: Http, @Inject(APP_CONFIG) private _config: IAppConfig) {}

    getCampaigns() {
        return this._http.get(this._config.apiEndpoint)
            .map((response:Response) => response.json())
            //.do(data => console.log('Campaigns retrieved: '+ JSON.stringify(data)))
            .catch(CampaignService._handleError);
    }

    static _handleError(error: Response) {
        console.error('Retrieving Campaign Failed: error = '.concat(error.toString()));
        return Observable.throw(error)
    }

}
