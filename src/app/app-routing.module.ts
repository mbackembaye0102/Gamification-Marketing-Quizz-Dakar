import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
import { TestComponent } from './test/test.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 100],
};

const routes: Routes = [
  {
    path: '',
    redirectTo: '/quizz',
    pathMatch: 'full'
  },
  {
    path: 'quizz',
    component: QuizzComponent
  }
  ,
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'quizz/:ID',
    component: QuizzComponent
  },
  {
    path: 'test/:id',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
