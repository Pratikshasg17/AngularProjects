import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{

  @Output() public LaserLight = new EventEmitter;
  public message(value:any)
  {
    this.LaserLight.emit(value)
  }
}
