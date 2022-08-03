import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   // chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Clean bathroom'];
   chores = [
      {title: "Today's Chores", tasks: ['Complete LaunchCode prep work', 'Clean bathroom']},
      {title: "Tomorrow's Chores", tasks: ['Complete LaunchCode prep work', 'Scoop cat litter', 'Work']},
      {title: "Thursday's Chores", tasks: ['Groceries', 'Therapy']}
   ]
   todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores", "Thursday's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
