import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectorService } from './selector.service';

@Component({
    selector: 'selector',
    moduleId: module.id,
    templateUrl: 'selector.component.html'
})

export class SelectorComponent implements OnInit{
    abstract;
    errorMessage: string;
    selector: any = {};

    constructor(
        private selectorService: SelectorService,
        private route: ActivatedRoute) {

    }

    ngOnInit(){
        this.selectorService.getSelector(this.route.snapshot.params['id'])
            .subscribe(responseSelector => {
                this.selector = responseSelector,
                responseError => this.errorMessage = 'Retrieving Selector failed. ' || responseError;
            })
    }

}


