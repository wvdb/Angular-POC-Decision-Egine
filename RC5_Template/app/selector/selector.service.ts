import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SelectorService {
    private _url = "http://localhost:8080/selectors/3";

    constructor(private _http: Http) {}

    getSelector(id) {
        //console.log('>>>Starting retrieve selector with id ' || id);
        //return this._http.get(this._url || id)
        return this._http.get(this._url)
            .map((response:Response) => response.json())
            .do(data => console.log('Selector retrieved: '+ JSON.stringify(data)))
            .catch(SelectorService._handleError);
    }

    static _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error)
    }

}
