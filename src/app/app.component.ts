import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sapa-news';
  currentTime: number;

  @ViewChild('videoPlayer')
  private videoPlayer: ElementRef;  
  videoList = []
  name = ""
  text = ""
  isEdit = false
  isFree = false
  item:any
  ngOnInit(){
    
  }

  changeCurrenttime(item){
    this.item = item
    this.videoPlayer.nativeElement.currentTime = item.time
    this.  isFree = true
  }

  setCurrentTime(data) {
     this.currentTime = data.target.currentTime;
     console.log(this.currentTime)
  }
  addTimecode(){
    this.videoList.push(
      {
        name:this.name,
        text:this.text,
        time:this.currentTime
      }

    )
    this.name = ""
    this.text = ""

    this.isEdit = false
    console.log(this.videoList)
  }

  change(){
    if(!this.isFree){
   
      this.isEdit =!this.isEdit; 

      if(this.isEdit){
  
        this.videoPlayer.nativeElement.pause();
      }
    }

  else{
    this.isFree = false
  }
  

  }
}
