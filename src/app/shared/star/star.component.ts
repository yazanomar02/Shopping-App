import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";


@Component({
    selector: "app-star",
    templateUrl: "./star.component.html",
    styleUrl: "star.component.css",
    standalone: true
})
export class StarComponent implements OnInit, OnChanges {

    cropWidth : number = 0;

    @Input()
    rating: number = 0;

    @Output()
    ratingClicked = new EventEmitter<number>();

    ngOnInit(): void {
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75 / 5;
    }

    onClick(number : number) {
        this.ratingClicked.emit(number)
    }
}