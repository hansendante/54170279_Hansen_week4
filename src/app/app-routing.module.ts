import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Page404Component } from './page404/page404.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { BackNavGuard } from './back-nav.guard';
import { EmployeeResolverService } from './employee-resolver.service';




const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [{
      path: "", //jika path kosong, arahkan ke url/employee
      redirectTo: "/employee",
      pathMatch: "full" //jika dan hanya jika url kosong
    },
    {
      path: "employee",
      component: EmployeeListComponent,
      resolve: {employees: EmployeeResolverService}
    },
    {
      path: "**", //**=wildcard 
      component: Page404Component
    },
    {
      path: "employee/:id", //:id adalah parameter
      component: EmployeeDetailComponent,
      canDeactivate: [BackNavGuard]
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
