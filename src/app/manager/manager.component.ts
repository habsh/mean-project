import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(typeof (this.route.snapshot.params['id']) == "undefined");
    // if (typeof (this.route.snapshot.params['id']) == "undefined")
      // this.router.navigate(['/dashboard']);
  }

}
