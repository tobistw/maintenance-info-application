import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MaintenanceInfoApplicationSharedModule } from 'app/shared/shared.module';
import { MaintenanceInfoApplicationCoreModule } from 'app/core/core.module';
import { MaintenanceInfoApplicationAppRoutingModule } from './app-routing.module';
import { MaintenanceInfoApplicationHomeModule } from './home/home.module';
import { MaintenanceInfoApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MaintenanceInfoApplicationSharedModule,
    MaintenanceInfoApplicationCoreModule,
    MaintenanceInfoApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MaintenanceInfoApplicationEntityModule,
    MaintenanceInfoApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class MaintenanceInfoApplicationAppModule {}
