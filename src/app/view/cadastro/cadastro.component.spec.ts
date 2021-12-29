import { TestBed } from '@angular/core/testing';
import { CadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CadastroComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CadastroComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'funcionario'`, () => {
    const fixture = TestBed.createComponent(CadastroComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('funcionario');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CadastroComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('funcionario app is running!');
  });
});
