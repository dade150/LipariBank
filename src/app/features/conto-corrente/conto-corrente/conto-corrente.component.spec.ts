import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContoCorrenteComponent } from "./conto-corrente.component";

describe("ContoCorrenteComponent", () => {
  let component: ContoCorrenteComponent;
  let fixture: ComponentFixture<ContoCorrenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContoCorrenteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContoCorrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
