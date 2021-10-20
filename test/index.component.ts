import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
    public ngOnInit(): void {
        console.log(this);
    }
}
