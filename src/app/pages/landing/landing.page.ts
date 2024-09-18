import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private authService:AuthServiceService,private router: Router) {

  }
  ngOnInit(): void {

    // this.authService.getProfile().then(user => {
    //   this.email = user?.email;
    //   console.log(user?.email);
    // }).catch(error => {
    //   console.error('Error getting user profile:', error);
    // });
    
  }

  signOut(){
    this.authService.signOut().then(() =>{
      this.router.navigate(['/login'])
    })
   }

}
