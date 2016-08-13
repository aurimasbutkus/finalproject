import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

import {ClusterService} from '../services/Cluster/ClusterService';
import {HostService2} from '../services/Cluster/HostService2';

import {ClusterViewModel, HostViewModel} from '../viewModels/ClusterViewModel';

import {ICluster} from '../dtos/Cluster';
import {IHost} from '../dtos/Host';

@Component({
  moduleId: module.id,
  selector: 'app-cluster-overview',
  templateUrl: 'cluster-overview.component.html',
  styleUrls: ['cluster-overview.component.css']
})
export class ClusterOverviewComponent implements OnInit {

  private _service: ClusterService;

  private _hostService: HostService2;

  clusterId: string;

  cluster: ICluster;

  hosts$: Observable<IHost[]>;

  private _router: Router;
  private _route: ActivatedRoute;

  constructor(service: ClusterService, route: ActivatedRoute, router: Router, hostService: HostService2) {
    this._service = service;
    this._route = route;
    this._router = router;
    this._hostService = hostService;
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.clusterId = params['clusterId'];

      this.retrieveCluster();
      this.retrieveHosts();
    });
  }

  private retrieveCluster(): void {
    this._service.getItemById('/' + this.clusterId).subscribe(cluster => this.cluster = cluster);
  }

  private retrieveHosts(): void {
    this.hosts$ = this._hostService.getAllItems();
  }

  onNavigate(host: HostViewModel): void {
    console.log(`Navigating to '${host.name}'...`);

    this._router.navigateByUrl(`hosts/${host.hostId}`);
  }
}
