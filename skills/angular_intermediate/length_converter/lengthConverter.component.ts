import { Component, OnInit } from "@angular/core";

interface LengthItem {
  id: number;
  label: string;
  unit: string;
}

@Component({
  selector: "length-converter",
  templateUrl: "./lengthConverter.component.html",
  styleUrls: ["./lengthConverter.component.scss"],
})
export class LengthConverter implements OnInit {
  lengthOptions: LengthItem[] = [
    {
      id: 0,
      label: "Kilometre",
      unit: "km",
    },
    {
      id: 1,
      label: "Metre",
      unit: "m",
    },
    {
      id: 2,
      label: "Centimetre",
      unit: "cm",
    },
  ];

  leftDropdownValue?: string;
  rightDropdownValue?: string;
  leftDropdownItem?: LengthItem;
  rightDropdownItem?: LengthItem;

  leftInputValue?: number;
  rightInputValue?: number;

  ngOnInit() {
    this.onDropdownChanges("0", 1);
    this.onDropdownChanges("1", 2);
  }

  onDropdownChanges(value: string, position: number) {
    console.log("dropdown:", value, typeof value, position);
    if (position === 1) {
      this.leftDropdownValue = value;
      this.leftDropdownItem = this.lengthOptions.find(
        (item) => item.id === parseInt(value)
      );
    } else {
      this.rightDropdownValue = value;
      this.rightDropdownItem = this.lengthOptions.find(
        (item) => item.id === parseInt(value)
      );
    }

    this.populateChanges(position);
  }

  onInputChanges(value: number, position: number) {
    console.log("input:", value, position);
    if (position === 1) {
      this.leftInputValue = value;
    } else {
      this.rightInputValue = value;
    }

    this.populateChanges(position);
  }

  populateChanges(triggeredPosition: number) {
    console.log(this.leftInputValue, this.rightInputValue);

    // left side
    if (this.leftDropdownItem?.unit === "km") {
      if (this.rightDropdownItem?.unit === "m") {
        this.rightInputValue = this.leftInputValue * 1000;
      } else if (this.rightDropdownItem?.unit === "cm") {
        this.rightInputValue = this.leftInputValue * 100000;
      }
    }

    switch (this.leftDropdownItem?.unit) {
      case "km":
        if (this.rightDropdownItem?.unit === "m") {
          this.rightInputValue = this.leftInputValue * 1000;
        } else if (this.rightDropdownItem?.unit === "cm") {
          this.rightInputValue = this.leftInputValue * 100000;
        } else {
          this.rightInputValue = this.leftInputValue;
        }
        break;

      case "m":
        if (this.rightDropdownItem?.unit === "km") {
          this.rightInputValue = this.leftInputValue / 1000;
        } else if (this.rightDropdownItem?.unit === "cm") {
          this.rightInputValue = this.leftInputValue * 100;
        } else {
          this.rightInputValue = this.leftInputValue;
        }
        break;

      case "cm":
        if (this.rightDropdownItem?.unit === "m") {
          this.rightInputValue = this.leftInputValue / 100;
        } else if (this.rightDropdownItem?.unit === "km") {
          this.rightInputValue = this.leftInputValue / 100000;
        } else {
          this.rightInputValue = this.leftInputValue;
        }
        break;
    }
  }
}
