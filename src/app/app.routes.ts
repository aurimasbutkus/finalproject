import {provideRouter, Route} from '@angular/router';

import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {ClustersPageComponent} from './clusters-page/clusters-page.component';
import {ClusterOverviewComponent} from './cluster-overview/cluster-overview.component';
import {HostDetailsComponent} from './host-details/host-details.component';
import {VmDetailsComponent} from './vm-details/vm-details.component';

export const routes: Route[] = [
  { path: '',   component: WelcomePageComponent },
  { path: 'clusters', component: ClustersPageComponent},
  { path: 'clusters/:clusterId', component: ClusterOverviewComponent},
  { path: 'hosts/:hostId', component: HostDetailsComponent},
  { path: 'virtualmachines/:virtualMachineId', component: VmDetailsComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];