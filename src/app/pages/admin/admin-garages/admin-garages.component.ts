import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-garages',
  templateUrl: './admin-garages.component.html',
  styleUrls: ['./admin-garages.component.css']
})
export class AdminGaragesComponent implements OnInit {

  //  headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');
  //  options = { headers: this.headers };

  garagesData: any[];


  constructor(private http : HttpClient){

  } 
  ngOnInit(): void {
    // this.http.get('https://buggiegarages.com/php/api/read.php').subscribe(response =>{
    //   console.log(response);
    // })
  }


  onLogIn(){

    this.http.post('https://buggiegarages.com/php/api/adminLogin.php',{ admin_username: 'admine', admin_password: 'abcd'},{headers: {'Content-Type': 'application/json'}})
    .subscribe(response =>{
      console.log(response);
    },error=>{
      console.log(error);
    });


    // this.http.post('https://buggiegarages.com/php/api/create.php',{ admin_username: 'admin', admin_password: 'abcd',garage_name: 'testing',garage_mail: 'test@gmail.com',gst_in:'asdfg7894561230',location: '12.152,11.452',city: 'rajkot',garage_mobile: '7898798794',address: '17,dimond street',pin_code: '654123',password: 'test@123' },{headers: {'Content-Type': 'application/json'}})
    // .subscribe(response =>{
    //   console.log(response);
    // });
  }

  onRead(){
    this.http.get<{body: any[], itemscount: number}>('http://buggiegarages.com/php/api/read.php').subscribe(response =>{
      console.log(response);
      this.garagesData = response.body;
    })
  }

  onBook(){
    this.http.post('https://buggiegarages.com/php/api/bookService.php',{ garage_id: 1,user_name: 'booking testing',user_mail: 'bookingtest@gmail.com',user_car_model:'wagonar',user_location: '13.152,11.452',user_city: 'rajkot',user_mobile_number: '9999988888',services: 'dent, wash, battery' },{headers: {'Content-Type': 'application/json'}})
    .subscribe(response =>{
      console.log(response);
    });
  }
  

}
