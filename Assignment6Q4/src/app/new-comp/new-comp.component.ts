import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  standalone: true,
  imports: [],
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css'
})
export class NewCompComponent 
{
    public Name: String = "Pratiksha";
    public Str1: String = "Infosystems";
}
