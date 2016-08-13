import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideForms, disableDeprecatedForms} from '@angular/forms';

import {AppComponent, environment} from './app/';

import {ClusterService} from './app/services/Cluster/ClusterService'
import {HostService2} from './app/services/Cluster/HostService2'
import {VMService} from './app/services/Cluster/VMService';

import {APP_ROUTER_PROVIDERS} from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, 
  [
    HTTP_PROVIDERS, 
    APP_ROUTER_PROVIDERS,
    ClusterService,
    HostService2,
    VMService,
    disableDeprecatedForms(), 
    provideForms()
    ]);
