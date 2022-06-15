import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  bookList: Book[] = [
    new Book( 'Livro1', 50,'../assets/books/41XDTiGcN9L._SY344_BO1,204,203,200_QL70_ML2_.jpg'),
    new Book('Livro2', 45, '../assets/books/51V9EAv8OrL._SY344_BO1,204,203,200_QL70_ML2_.jpg'),
    new Book('Livro3', 60,'../assets/books/51WQuxQZ7XL._SY344_BO1,204,203,200_QL70_ML2_.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
