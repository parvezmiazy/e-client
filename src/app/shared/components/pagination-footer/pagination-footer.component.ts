import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-footer',
  templateUrl: './pagination-footer.component.html',
  styleUrls: ['./pagination-footer.component.css'],
})
export class PaginationFooterComponent implements OnInit {
  @Input() totalCount: any;
  @Input() pageSize: any;
  @Output() pageChanged = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onPagerChange(event: any) {
    this.pageChanged.emit(event);
  }
}
