import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Survey } from "../../types/Survey";

@Component({
  selector: "survey-list",
  templateUrl: "./surveyList.component.html",
  styleUrls: ["./surveyList.component.scss"],
})
export class SurveyList implements OnInit, OnChanges {
  @Input() surveyList: Survey[];

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("surverListComponent onChanges:", changes);
  }
}
