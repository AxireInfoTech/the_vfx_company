import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { client } from './admin.interface';

@Injectable({
  providedIn: 'root'
})


export class AdminService implements OnInit {

  clientData: client[] = [];
  createClientData: client;
  editClientData: client;
  emptyClientData: client;
  admin_username:string = 'test';
  admin_password:string = 'test';

  constructor(private http: HttpClient) { }

  ngOnInit(){
  }

  adminLogin(admin_username: string,admin_password:string ){
    return this.http.post<{admin_loggedIn: boolean}>('https://buggiegarages.com/php/api/admin/adminLogin.php',{admin_username: admin_username,admin_password: admin_password});
  }


  readGarages(){
    return this.http.get<any>("https://the-vfx-company-default-rtdb.firebaseio.com/client.json");
  // this.http.get<{body: any[], itemscount: number}>('https://buggiegarages.com/php/api/garagesFromPincode.php?pin_code=360311&city=Gondal').subscribe(response =>{
  //   console.log(response);
  //   this.garagesData = response.body;
  // });
  // return this.garagesData;
  }

  // deleteGarage(id: number){
  //   return this.http.post<{sucess: boolean} | {admin_loggedIn: boolean}>('http://localhost:80/php/api/admin/deleteGarage.php',{admin_username: 'abcd',admin_password: 'abcd',garage_id: id},{headers: {'Content-Type': 'application/json'}});
  // }

  deleteGarage(id: string){
    return this.http.delete<any>('https://the-vfx-company-default-rtdb.firebaseio.com/client/'+id+'.json');
  }

  createClient(client: client){
    // if(garage && garage.city){
    //   garage.city = garage.city.toLowerCase();
    //   garage.city = garage.city.charAt(0).toUpperCase() + garage.city.slice(1);
    // }

    return this.http.post<any>('https://the-vfx-company-default-rtdb.firebaseio.com/client.json',client);
  }

  updateGarage(client: client){
    

    return this.http.patch<any>('https://the-vfx-company-default-rtdb.firebaseio.com/client/'+client.id+'/.json',{ id : '', name: client.name, img: client.img, posts: client.posts });
  }

}
