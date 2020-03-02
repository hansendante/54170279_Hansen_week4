import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employee;
  nameEdit:string;
  constructor(
    private es: EmployeeService, //untuk jalankan getEmployee()
    private route: ActivatedRoute //untuk dapatkan parameter id
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {
        const id = param.get("id");
        this.employee = this.es.getEmployee(+id);
        this.nameEdit = this.employee.name;
      }
    )
  }
  isDirty(): boolean{
    if (this.nameEdit !== this.employee.name){
      //jika isi textbox tidak sama dengan nama asi
      return true;
    }
    return false;
  }

}
