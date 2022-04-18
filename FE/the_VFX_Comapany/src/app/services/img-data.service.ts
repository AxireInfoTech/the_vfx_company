import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgDataService {
  data = "all";
  constructor() { }

  setData(abc:any){
    if(abc == "client1"){
      this.data = "client1"
    }
    else if(abc == "client2"){
      this.data = "client2"
    }
    else if(abc == "client3"){
      this.data = "client3"
    }
    else{
      this.data = "all";
    }
  }

  getData(){
    return this.data;
  }
}
