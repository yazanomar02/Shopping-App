import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: "convertToSpace",
    standalone: true
})
export class ConvertToSpacePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return value.replaceAll(args[0], " ");
    }
}