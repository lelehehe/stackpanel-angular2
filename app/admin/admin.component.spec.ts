

import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AdminComponent } from './admin.component';

describe('AdminComponent (templateUrl)', () => {

    let comp: AdminComponent;
    let fixture: ComponentFixture<AdminComponent>;
    let de: DebugElement;
    let el: HTMLElement; 

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminComponent], // declare the test component
        })
            .compileComponents()  // compile template and css\
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(AdminComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h2'));
        el = de.nativeElement;
    });

    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });
});
