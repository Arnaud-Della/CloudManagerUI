import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{

  showFiller = false;
  @ViewChild("drawer")drawer: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.navigate([{ outlets: { aux: ['cloud'] } }],{ relativeTo: this.route.parent })
  }

  ngAfterViewInit(): void {
    if (((navigator) as any).userAgentData?.mobile == false){
      setTimeout(() => this.drawer.toggle(),0);
    }
  }
    
  public navigate(path: any) {
    this.router.navigate([{ outlets: { aux: [path] } }],{ relativeTo: this.route.parent })
  }
}
