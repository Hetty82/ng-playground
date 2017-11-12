import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents()
  }))

  let fixture
  let component

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.debugElement.componentInstance
  })

  it('creates the app', async(() => {
    expect(component).toBeTruthy()
  }))

  it(`has as title 'app'`, async(() => {
    expect(component.title).toEqual('app')
  }))

  it('renders title in a h1 tag', async(() => {
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!')
  }))
})
