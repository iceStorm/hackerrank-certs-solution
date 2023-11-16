import { Component } from "@angular/core";
import { Item } from "../types/Item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  Book: string = "Book";
  Song: string = "Song";

  bookList = [];
  songList = [];

  constructor() {}

  ngOnInit() {}

  onItemAdded(item) {
    console.log("onItemAdded:", item);

    if (item.type === "Book") {
      this.bookList.push(item);
    } else {
      this.songList.push(item);
    }
  }

  onItemDelete(name, type) {
    console.log("onItemDelete:", name, type);

    if (type === "Book") {
      this.bookList = this.bookList.filter((item) => item.name !== name);
    } else {
      this.songList = this.songList.filter((item) => item.name !== name);
    }
  }
}
