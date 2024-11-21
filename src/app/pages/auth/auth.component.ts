import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
  ],
  providers: [
    
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoginMode = true;
  private https

  listado_companies = []

  constructor(https: HttpClient){
    this.https = https
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(){
    this.getCompanies()
    console.log("cargar listado de compañías...")
  }

  getCompanies(){
    console.log("llamado a funcion");
    
    this.https.get('api/v1/companies').subscribe( (resCompanies:any) => {
      if(resCompanies.status == 'ok'){
        this.listado_companies = resCompanies.data
      }
    })
  }

}
