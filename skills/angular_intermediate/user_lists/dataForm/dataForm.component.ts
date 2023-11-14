import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";

import { Item } from "../../types/Item";
import { NgForm } from "@angular/forms";

@Component({
  selector: "data-form",
  templateUrl: "./dataForm.component.html",
  styleUrls: ["./dataForm.component.scss"],
})
export class DataForm implements OnInit {
  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();

  @ViewChild("form") public theForm: NgForm;

  ngOnInit() {}

  onSubmit() {
    console.log("form submit ->", this.theForm.value);
    this.onItemAdded.emit(this.theForm.value);
    this.theForm.reset();
  }
}
