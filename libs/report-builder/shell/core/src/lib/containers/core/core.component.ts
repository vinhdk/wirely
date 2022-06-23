import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'wr',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportBuilderCoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
