import { Component, ViewEncapsulation, NgZone, ViewContainerRef, ViewChild } from '@angular/core';
import { Overlay, ScrollDispatcher, OverlayRef, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TooltipComponent } from './tooltip/tooltip.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

@ViewChild('tooltipMe') elementContainerRef: any;


private ref: OverlayRef;

  constructor(private overlay: Overlay, private _scrollDispatcher: ScrollDispatcher,  private _ngZone: NgZone) {}
  

  public createOverlay() {

    const connectedPosition: ConnectedPosition = {overlayX: 'center', overlayY: 'bottom', originX: 'center', originY: 'top'};

     const position = this.overlay.position().flexibleConnectedTo(this.elementContainerRef)
     .withPositions([connectedPosition])
     .withTransformOriginOn('.tooltip-container')
     .withFlexibleDimensions(false).withViewportMargin(8);

this.ref = this.overlay.create({positionStrategy: position});
const portal = new ComponentPortal(TooltipComponent);

const instance = this.ref.attach(portal).instance;
instance.message = 'Tomer K';
instance.markForCheck();

  }

  public clearOverlay() {
    this.ref.detach();
  }
}
