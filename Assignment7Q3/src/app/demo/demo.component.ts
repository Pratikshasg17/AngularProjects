import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public text1: String = "Marvellous Infosystems";
  public Name: string = "";

  public InfosystemsEvent()
  {
    this.Name = "Educating for better tomorrow";
  }
}
