import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { from } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {RestoService } from '../resto.service';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name:new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  constructor(private router:ActivatedRoute, private resto:RestoService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.resto.getCurrentresto(this.router.snapshot.params.id).subscribe((result)=>{
     this.editResto = new FormGroup({
        name:new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      })

    })
    
  }
  collection(){
    console.log(this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>
    {
      console.log(result);
      
    })
  }


}
