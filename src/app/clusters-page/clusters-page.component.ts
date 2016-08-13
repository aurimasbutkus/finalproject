import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import {ClusterService} from '../services/Cluster/ClusterService';

import {ClusterViewModel} from '../viewModels/ClusterViewModel';

import {ICluster} from '../dtos/Cluster';

@Component({
  moduleId: module.id,
  selector: 'app-clusters-page',
  templateUrl: 'clusters-page.component.html',
  styleUrls: ['clusters-page.component.css']
})
export class ClustersPageComponent implements OnInit {

  private _service: ClusterService;
  private _router: Router;

  clusters$: Observable<ICluster[]>;

  constructor(service:ClusterService, router: Router) {
    this._service = service;
    this._router = router;
    this.clusters$ = service.getAllItems();
   }

  ngOnInit() {
  }

  onNavigate(cluster: ClusterViewModel): void {
    console.log(`Navigating to '${cluster.name}'...`);

    this._router.navigateByUrl(`clusters/${cluster.clusterId}`);
  }
}
