import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.router.navigate(['produtos/create'])
  }

  logout() {
    this.router.navigate(['login']);
    this.authService.logout();
    this.toastrService.info('Logout realizado com sucesso!', 'Logout', {timeOut: 7000});
  }

}
