import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wr-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportBuilderViewComponent implements OnInit {


  constructor(protected readonly router: Router) { }

  ngOnInit(): void {
  }

  onClick(item: string): void {
    const mappedUrl = item.toLowerCase().replace(/ /g,'-');
    this.router.navigate([`/view/${mappedUrl}`]);
  }

}

