import { Component, Input, Output,  EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Input() public pMessage: any;

  @Output() public LaserLight = new EventEmitter;
  public SendMessage()
  {
    this.LaserLight.emit("Hello Parent")
  }

}
