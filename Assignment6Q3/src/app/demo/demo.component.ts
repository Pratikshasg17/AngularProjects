import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  template:
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>Marvellous Infosystems</h1>
      <h1 [class] ="'col'">Enter your Message:</h1>
      <input type="text">
    </body>
    </html>`,
    styles:['.col { color:blue }']
})
export class DemoComponent {

}
