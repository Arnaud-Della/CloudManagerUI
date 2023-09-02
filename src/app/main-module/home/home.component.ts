import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit,OnInit{

  showFiller = false;
  @ViewChild("drawer")drawer: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.router.parseUrl(this.router.url).queryParams['addcloud'] == "success"){
      this.navigate('setting');
    }
    else{
      this.navigate('cloud');
    }
  }

  ngAfterViewInit(): void {
    if (((navigator) as any).userAgentData?.mobile == false){
      setTimeout(() => this.drawer.toggle(),0);
    }
  }
    
  public navigate(path: any) {
    this.router.navigate([{ outlets: { aux: [path] } }],{ relativeTo: this.route.parent,skipLocationChange: true })
  }
}
