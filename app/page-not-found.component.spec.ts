import { PageNotFoundComponent } from './page-not-found.component';

import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('BannerComponent (inline template)', () => {

    let comp: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PageNotFoundComponent], // declare the test component
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });

        fixture = TestBed.createComponent(PageNotFoundComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h4> by CSS element selector
        de = fixture.debugElement.query(By.css('h4'));
        el = de.nativeElement;
    });

    it('should display original title', () => {
        //fixture.detectChanges();  
        expect(el.textContent).toContain('Inconceivable');
    });

    it('should display a different test title', () => {
        expect(el.textContent).toContain('Inconceivable');
    });

});
