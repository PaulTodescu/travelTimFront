import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user/user.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {ImageService} from "../services/image/image.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username: string | undefined;
  profileImage: any;

  constructor(
    private userService: UserService,
    private imageService: ImageService,
    private router: Router) { }

  public goToOffers(categoryName: string): void {
    this.router.navigate(['offers'], {
      queryParams: {'category': categoryName}
    });
  }

  public getCurrentUser(): void{
    this.userService.getUsername().subscribe(
      (response: string) => {
        this.username = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getProfileImage() {
    this.imageService.getProfileImageForLoggedInUser().subscribe(
      (response: string) => {
        this.profileImage = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public goToAddOffer(): void {
    if (this.userService.checkIfUserIsLoggedIn()){
      this.router.navigateByUrl('offer/add');
    } else {
      this.goToAuthenticationPage();
    }
  }

  public goToHomePage(): void{
    this.router.navigateByUrl('/home');
  }

  public goToAuthenticationPage(): void{
    this.router.navigateByUrl('/authenticate');
  }

  public goToMyAccountDashboard(): void {
    this.router.navigateByUrl('/account');
  }

  public logout(): void{
    localStorage.removeItem('token');
    if (this.router.url === '/account' || this.router.url === '/offer/add'){
      this.router.navigateByUrl('/home');
    } else {
      window.location.reload();
    }
  }

  ngOnInit(): void {
    if (this.userService.checkIfUserIsLoggedIn()) {
      this.getCurrentUser();
      this.getProfileImage();
    }
  }

}
