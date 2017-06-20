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
export class SelectorService {
    private _url = "http://localhost:8080/selectors/";

    constructor(private _http: Http, @Inject(APP_CONFIG) private _config: IAppConfig) {}

    getSelector(selectorId:string) {
        console.log( '>>>Starting retrieve selector with id '.concat(selectorId));
        return this._http.get(this._url.concat(selectorId))
        //return this._http.get(this._config.selectorEndpoint.concat(selectorId))
            .map((response:Response) => response.json())
            .do(data => console.log('Selector retrieved: '+ JSON.stringify(data)))
            .catch(SelectorService._handleError);
    }

    static _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error)
    }

}
