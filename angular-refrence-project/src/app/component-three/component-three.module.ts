import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentThreeComponent } from './component-three.component';
import { MySharedModuleOne } from '../shared/my-shared-component-one/my-shared-component-one.module';

const routes: Routes = [{ path: '', component: ComponentThreeComponent }];

@NgModule({
  declarations: [ComponentThreeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MySharedModuleOne],
  exports: [RouterModule],
})
export class ComponentThreeModule {}
