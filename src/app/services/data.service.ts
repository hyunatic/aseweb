import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameRecord } from '../model/GameRecord'


@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private http: HttpClient){}

    getColourGame(){
        return this.http.get<GameRecord>("https://aseapi.hyunatic.com/public/index.php/api/colorgame");
    }
    getSimonSays(){
        return this.http.get<GameRecord>("https://aseapi.hyunatic.com/public/index.php/api/simonsays");
    }
    getNumberGame(){
        return this.http.get<GameRecord>("https://aseapi.hyunatic.com/public/index.php/api/numbergame");
    }
    loginAuthentication(formData){
        return this.http.post("https://aseapi.hyunatic.com/public/index.php/api/login",formData);
    }
}