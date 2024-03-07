import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { SidebarService } from '@services/sidebar.service';
import Utils from '../../shared/utils';
import { Subscription, filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  sidebarWidth: number = 300;

  isSidebarExpanded = true;
  isSidebarShowing = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscriptions.push(
      this.router.events
        .pipe(
          map((event) => event as NavigationEnd),
          map(() => this.activatedRoute),
          map((route) => {
            while (route.firstChild) route = route.firstChild;
            return route;
          }),
          filter((route) => route.outlet === 'primary'),
          mergeMap((route) => route.data)
        )
        .subscribe((event) => {
          // if (event) {
          //   this.sidebarService.fireEventUrlChange(this.router.url);
          // }
        })
    );
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    Utils.unsubscribe(this.subscriptions);
  }

  public onSidebarToggle(event: any): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.isSidebarShowing = false;
  }

  public onSidebarClick(event: any): void {
    if (!this.isSidebarExpanded) {
      this.isSidebarExpanded = true;
      this.isSidebarShowing = false;
    }
  }

  public onMouseenter(): void {
    if (!this.isSidebarExpanded) {
      this.isSidebarShowing = true;
    }
  }

  public onMouseleave(): void {
    if (!this.isSidebarExpanded) {
      this.isSidebarShowing = false;
    }
  }
}
