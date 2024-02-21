import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'product-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('constructor');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('ngOnChanges(');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  increasePrice(): number {
    return this.currentPrice++;
  }
}
