import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectorComponent }  from './selector/selector.component';

//import { CanDeactivateGuard }       from './can-deactivate-guard.service';
//import { AuthGuard }                from './auth-guard.service';
//import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
//
const appRoutes: Routes = [
    {
        path: 'selector',
        component: SelectorComponent
    },
];

//@NgModule({
//    imports: [
//        RouterModule.forRoot(
//            appRoutes,
//            { preloadingStrategy: SelectivePreloadingStrategy }
//        )
//    ],
//    exports: [
//        RouterModule
//    ],
//    providers: [
//        CanDeactivateGuard,
//        SelectivePreloadingStrategy
//    ]
//})

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */