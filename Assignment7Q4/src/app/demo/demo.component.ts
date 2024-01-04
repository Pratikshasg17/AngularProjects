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
  public Name: string ="";
  public Name1: string ="";
    public upperEvent()
    {
       this.Name = "MARVELLOUS INFOSYSTEM";
    }

    public lowerEvent()
    {
       this.Name1 = "marvellous infosystem";
    }
}
