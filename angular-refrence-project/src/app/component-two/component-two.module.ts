import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentTwoComponent } from './component-two.component';

const routes: Routes = [{ path: '', component: ComponentTwoComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentTwoModule {}
