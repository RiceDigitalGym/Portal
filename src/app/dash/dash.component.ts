import { Component, OnInit } from '@angular/core';
import { BikeMetadataService } from './../../services/bikemetadata.service';
import { HttpClient } from './../../services/httpclient.service'



@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  providers: [HttpClient, BikeMetadataService]
})
export class DashComponent implements OnInit {

  constructor(private bikeMetadataService:BikeMetadataService) { }
  bikes = []
  bikedata = []

  ngOnInit() {
    
  	this.bikeMetadataService.getBikes().subscribe(
		response => {
			this.bikes = response;
     
      for (var bike of this.bikes){
        console.log(bike)
        this.bikeMetadataService.getBikeStats(bike).subscribe(response =>{
                       console.log(response)

             this.bikedata.push(response);
             // console.log(this.bikedata)
        }, error=>{
            console.log(error)
        })
      }
		},
		error => {
			console.log(error)
		}
  	)
  }

}
