import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { componentFactoryName } from '@angular/compiler';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@Injectable({
  providedIn: 'root'
})
export class BackNavGuard implements CanDeactivate<EmployeeDetailComponent> {
    canDeactivate(component : EmployeeDetailComponent): boolean{
      if(component.isDirty()){
        //kalau textbox sudah diisi
        return confirm("Yakin ingin keluar?");
      }
      return true;
    
  }
  
}
