import { map, takeWhile } from 'rxjs/operators';

import { fromEvent } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({ x, y}) => ({ x, y})),

    takeWhile(({ y }) => y <= 150, true)
).subscribe({
    next: (value)=> console.log('next', value ),
    complete: () => console.log('complete'),
});