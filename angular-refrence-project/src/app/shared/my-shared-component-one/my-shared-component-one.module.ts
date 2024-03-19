import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedComponentOneComponent } from './my-shared-component-one.component';

@NgModule({
  declarations: [MySharedComponentOneComponent],
  imports: [CommonModule],
  exports: [MySharedComponentOneComponent],
})
export class MySharedModuleOne {}
