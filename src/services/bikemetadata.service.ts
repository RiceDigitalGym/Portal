import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import { config } from '../app/app.config'
import 'rxjs/add/operator/map'

@Injectable()
export class BikeMetadataService{
	constructor(private http: Http){}

	getBikes(){
		return this.http.get(config.URI+'/bbb/getBikes').map(res => res.json());
	}

	getBikeStats(bikeid:any){
		return this.http.post(config.URI+'/bbb/bikeStats', {id:bikeid}).map(res => res.json());
	}


}