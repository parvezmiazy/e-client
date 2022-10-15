import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-header',
  templateUrl: './pagination-header.component.html',
  styleUrls: ['./pagination-header.component.css'],
})
export class PaginationHeaderComponent implements OnInit {
  @Input() pageNumber: any;
  @Input() pageSize: any;
  @Input() totalCount: any;

  constructor() {}

  ngOnInit(): void {}
}
