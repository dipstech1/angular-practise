import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { map, tap, takeUntil } from 'rxjs/operators'
import { Subject, forkJoin } from 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.notifier.next()
    this.notifier.complete()
  }

  name = "Souradip";
  userCompany: any;
  useremail: any;
  notifier = new Subject();

  constructor(private service: ApiService) { }

  ngOnInit() {
    let u = this.service.getInfo();
    this.useremail = u.pipe(
      tap(d => console.log(d)),
      map(x => x.data.email),
    )

    this.userCompany = u.pipe(
      tap(d => console.log(d)),
      map(x => x.ad.company)
    )

  }

  editName(): string {
    let n = this.name.substr(1, 4);
    return n;
  }

  login() {

    let user = this.service.login() // user
    let place = this.service.login() // place

    forkJoin(user, place)
    .pipe(
      takeUntil(this.notifier)
    )
    .subscribe(res => {
      console.log(res)
        let userData = res[0];
        let placeData = res[1];
    })



    // this.service.login()
    //   .pipe(
    //     takeUntil(this.notifier)
    //   )
    //   .subscribe(
    //     (res: any) => {
    //     console.log("LOGIN", res)
    //     },
    //     (err)=>{

    //     },
    //     ()=>{
    //       console.log("Here")
    //     }
    //   )
  }

}
