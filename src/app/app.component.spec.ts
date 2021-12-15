import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [ ServiceWorkerModule.register('ngsw-worker.js', { enabled: false })],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
   
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Found'`, () => {
    expect(app.title).toEqual('found');
  });

 /* it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('found app is running!');
  });*/
});
