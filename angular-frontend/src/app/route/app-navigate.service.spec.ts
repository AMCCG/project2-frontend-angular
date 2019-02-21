import { Location } from "@angular/common";
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { AppURLConstants } from '../models/constants/app-url-constants.model';
import { AppAuthenticationComponent } from '../modules/app-authentication/app-authentication.component';
import { AppNavigateService } from './app-navigate.service';
import { appRoutes } from './app-routing.module';
import { ShareModule } from '../modules/share-modules/share.module';


describe('Router', () => {
  let location: Location;
  let router: Router;
  let fixture

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppAuthenticationComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        ShareModule
      ],
    })
    router = TestBed.get(Router);
    location = TestBed.get(Location)
    fixture = TestBed.createComponent(AppAuthenticationComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /login', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/login');
  }));

});


describe('AppNavigateService', () => {
  let service: AppNavigateService
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let mockLocation = {
    navigate: jasmine.createSpy('back')
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Location, useValue: mockLocation },
      ]
    })
    service = TestBed.get(AppNavigateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should goTo AppAuthenticationComponent when url == "login" ', () => {
    service.goTo(AppURLConstants.URL.appAuthentication.key);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['login']);
  });

  it('should goTo AppAuthenticationComponent when url == "app-management" ', () => {
    service.goTo(AppURLConstants.URL.appManageMent.key);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['management']);
  });

});

