import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  centralAfica:any= []

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.loadCountries()
  }

  loadTown(){
    this.getSelectedCity()
  }

  getSelectedCity(){
    //console.log(this.formSteps.get('country').value);
    //this.towns = this.countries.find(x=>x.name == this.formSteps.get('country').value).cities;
   }

   loadCountries(){
    this.http.get("assets/countries.min.json").subscribe((data:any)=>{
      data.forEach(element => {
        this.centralAfica.push({'name': element.country, 'cities':[element.cities] } );
      });
    })
     /*if(this.translate.getActiveLang() =='fr'){
       this.http.get("assets/compolsary/countries.min.json").subscribe((data:any)=>{
         data.forEach(element => {
           this.countries.push({name: element.country, cities:element.cities } );
         });
       })
     }else{
       this.http.get("assets/compolsary/countries.min.json").subscribe((data:any)=>{
         data.forEach(element => {
           this.countries.push({name: element.country, cities:element.cities } );
         });
       })
     }*/
   }


}
