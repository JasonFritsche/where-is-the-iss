import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { CrewComponent } from './components/side-nav/crew/crew.component';

const routes: Routes = [
  { path: 'app-map', component: MapComponent },
  { path: 'app-crew', component: CrewComponent },
  { path: '', redirectTo: '/app-map', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
