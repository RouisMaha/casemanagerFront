import { Component } from '@angular/core'; 
import { Router } from '@angular/router';


    
@Component({    
    selector:'app-navaiagation-bar',    
    templateUrl:'./navigation-bar.component.html',    
    styleUrls:['./navigation-bar.component.css']

})
export class NavigationBarComponent    
{   
    constructor(private router:Router) {}
        goToPage(pageName:string):void{
            this.router.navigate(['$pageName']);
        }
        
    }   
