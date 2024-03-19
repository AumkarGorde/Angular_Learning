import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from './component-one.component';
import { MySharedModuleOne } from '../shared/my-shared-component-one/my-shared-component-one.module';

const routes: Routes = [{ path: '', component: ComponentOneComponent }];

@NgModule({
  declarations: [ComponentOneComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MySharedModuleOne],
  exports: [RouterModule],
})
export class ComponentOneModule {}
