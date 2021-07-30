import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiblingComponent } from './sibling.component';

const routes: Routes = [{ path: '', component: SiblingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiblingRoutingModule { }
