import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
    public items?: Array<unknown>

    public ngOnInit(): void {
        console.log(this);
    }

    public trackBy(index: number): number {
        return index;
    }
}
