import { Component, OnInit } from '@angular/core';
import { AzureAdDemoService } from '../azure-ad-demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserLoggedIn:boolean=false;
  constructor(private azureAdDemoService:AzureAdDemoService) { }

  ngOnInit(): void {
    this.azureAdDemoService.isUserLoggedIn.subscribe(
      x=>{
        this.isUserLoggedIn=x;
      }
    )
  }
}
