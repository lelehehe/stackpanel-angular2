

import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal.component';

xdescribe('ModalComponent', () => {

    let comp: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;
    let componentModalService: ModalService; // the actually injected service
    let modalService: ModalService; // the TestBed injected service
    let de: DebugElement;
    let el: HTMLElement;
    let modalServiceStub: {
        activate: (message?: string, title?: string) => Promise<boolean>;
    };

 beforeEach(() => {
    // stub ModalService for test purposes
    modalServiceStub.activate = null;

    TestBed.configureTestingModule({
       declarations: [ ModalComponent ],
    // providers:    [ ModalService ]  // NO! Don't provide the real service!
                                      // Provide a test-double instead
       providers:    [ {provide: ModalService, useValue: modalServiceStub } ]
    });

    fixture = TestBed.createComponent(ModalComponent);
    comp    = fixture.componentInstance;

    // ModalService actually injected into the component
    modalService = fixture.debugElement.injector.get(ModalService);
    componentModalService = modalService;
    // ModalService from the root injector
    modalService = TestBed.get(ModalService);

    //  get the "title" element by CSS selector
    de = fixture.debugElement.query(By.css('h5'));
    el = de.nativeElement;
  });

  it('should title be ', () => {
    fixture.detectChanges();
    const content = el.textContent;
    //expect(content).toContain('Welcome', '"Welcome ..."');
  });
});
