import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

interface Competition {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Competition[];
}

const URL = "https://jsonmock.hackerrank.com/api";

@Component({
  selector: "football-competitions",
  templateUrl: "./footballCompetitions.component.html",
  styleUrls: ["./footballCompetitions.component.scss"],
})
export class FootballCompetitions implements OnInit {
  apiData?: ApiResponse;

  // https://jsonmock.hackerrank.com/api/football_competitions?page=<pageNumber>
  constructor(private http: HttpClient) {}

  get pages() {
    return new Array(this.apiData?.total_pages ?? 0).fill(0);
  }

  ngOnInit() {
    this.paginate(1);
  }

  paginate(pageIndex: number) {
    this.http
      .get(`${URL}/football_competitions?page=${pageIndex}`)
      .subscribe((res: ApiResponse) => {
        console.log(res);
        this.apiData = res;
      });
  }
}
