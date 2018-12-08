import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }

  @Input()
message: string;

  ngOnInit() {
  }

  markForCheck() {
    console.log('marking');
    this.cd.markForCheck();
  }

}

/*
a very very very very very very  very very very very very very
  very very very very very very  very very very very very very
  very very very very very very  very very very very very very
  very very very very very very  very very very very very very
  very very very very very very  very very very very very very
  very very very very very very  very very very very very very
  very very very very very very  very very very very very very
  very very very very very very  very very very very very very
  very very very very very very  very very very very very very
  very very very very very very  very very very very very very
  very very very very very very  very very very very very very
  long description*/