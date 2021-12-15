import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { error } from 'protractor';
import { User } from '../model/user';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule], providers: [HttpClientModule] });
    service = TestBed.inject(UserService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new UserService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return error', (done: DoneFn)=>{
  
    const user = new User();
    service.register(user).subscribe(
      result => done.fail('expected an error, while the object is null'),
      error=>{
        expect(error.message).toContain('Error 501, Object null');
        done();
      }
    )
  })

  it('should save the user', (done:DoneFn)=>{
    let user: User;
    user.email = 'test@test.expl';
    user.firstName ='Bopdidus';
    user.lastName = ' Ange des Scripts';
    user.password = '13579';

    service.register(user).subscribe(
      result=> {
        expect(result).toBe(JSON);
        done();
      },
      done.fail
    )
  })

  it('cannot logged in', (done:DoneFn)=>{
    
    service.login(null).subscribe(
      result => done.fail('expected an error, while the object is null'),
      error=>{
        expect(error.message).toContain('Error 404, not found');
        done();
      }
    )
  })

  it('can logged in', (done: DoneFn)=>{
    let user = new User();
    user.email = 'test@test.expl';
    user.firstName ='Bopdidus';
    user.lastName = ' Ange des Scripts';
    user.password = '13579';
    
    let credential: any;
    credential.email = "test@test.expl";
    credential.password = '13579';
    service.login(credential).subscribe(
      result =>{
        expect(result).toEqual(user, 'type of expected value')
        done()
      },
      done.fail
    )

  })

});
