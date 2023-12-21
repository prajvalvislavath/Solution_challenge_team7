import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.css']
})
export class RegistartionComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
