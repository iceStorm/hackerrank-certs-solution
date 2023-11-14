import { Component } from "@angular/core";
import { Item } from "../types/Item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  bookList = [];
  songList = [];

  Book: string = "Book";
  Song: string = "Song";

  constructor() {}

  ngOnInit() {}

  onItemAdded(item) {
    if (item.type === "Book") {
      this.bookList.push(item);
    } else {
      this.songList.push(item);
    }
  }

  onItemDelete(item) {}
}
