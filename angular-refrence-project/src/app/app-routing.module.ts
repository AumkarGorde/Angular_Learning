import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'one',
    loadChildren: () =>
      import('./component-one/component-one.module').then(
        (m) => m.ComponentOneModule
      ),
  },
  {
    path: 'two',
    loadChildren: () =>
      import('./component-two/component-two.module').then(
        (m) => m.ComponentTwoModule
      ),
  },
  {
    path: 'three',
    loadChildren: () =>
      import('./component-three/component-three.module').then(
        (m) => m.ComponentThreeModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
