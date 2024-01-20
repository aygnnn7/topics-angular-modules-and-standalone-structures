import { PreloadingStrategy, Route } from "@angular/router";
import { of } from "rxjs";
import { Observable } from "rxjs";

export class CustomPreloadingStrategy implements PreloadingStrategy{
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        //customer - preloading: true
        //products - preloading: false



        if(route.data["preload"] == true){
            return fn();
        }
        return of();
        
    }

}