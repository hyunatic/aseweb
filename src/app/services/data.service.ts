import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private http: HttpClient){}

    getColourGame(){
        return this.http.get("http://localhost/aseapi/public/index.php/api/colorgame");
    }
    getSimonSays(){
        return this.http.get("http://localhost/aseapi/public/index.php/api/simonsays");
    }
    getNumberGame(){
        return this.http.get("http://localhost/aseapi/public/index.php/api/numbergame");
    }
}