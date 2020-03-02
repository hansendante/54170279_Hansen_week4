import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeService } from "./employee.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService {

  constructor(private es: EmployeeService) { }
  resolve(): Observable<Employee[]>{
    return this.es.getEmployees();
  }
}
