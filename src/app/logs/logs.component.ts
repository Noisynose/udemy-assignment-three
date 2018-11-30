import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.css"]
})
export class LogsComponent implements OnInit {
  showDetails: Boolean = true;
  logs = [];

  constructor() {}

  ngOnInit() {}

  toggleDetails() {
    this.logs.push(new Date());
    this.showDetails = this.showDetails ? false : true;
  }

  isLogLate(logNumber: number) {
    return logNumber + 1 >= 5 ? true : false;
  }

  getLogColor(logNumber: number) {
    return this.isLogLate(logNumber) ? "blue" : "white";
  }
}
