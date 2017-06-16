import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AssetService {
    private _url = "http://localhost:8080/assets/";

    constructor(private _http: Http) {}

    getAsset(assetId:string) {
        console.log( '>>>Starting retrieve asset with id '.concat(assetId));
        return this._http.get(this._url.concat(assetId))
            .map((response:Response) => response.json())
            .catch(AssetService._handleError);
    }

    static _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error)
    }

}
