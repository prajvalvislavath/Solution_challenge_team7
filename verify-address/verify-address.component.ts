import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-verify-address',
  templateUrl: './verify-address.component.html',
  styleUrls: ['./verify-address.component.css']
})
export class VerifyAddressComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
