// import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

// import { fromEvent } from 'rxjs';

// const click$ = fromEvent(document, 'click');

// click$.pipe(
//     debounceTime(3000)
// );

// const input = document.createElement('input');
// document.querySelector('body').append(input);

// const input$ = fromEvent(input, 'keyup');

// input$.pipe(
//     debounceTime(1000),
//     pluck('target', 'value'),
//     distinctUntilChanged()
// ).subscribe(console.log);