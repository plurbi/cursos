
console.log('ejercicio 1');

const { Observable } = require('rxjs');

const obs = new Observable(subs => {
  subs.next(1);
  subs.next(3);
  subs.next(5);
  subs.complete();
});

obs.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});

console.log('ejercicio 2');

const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
});

foo.subscribe(x => {
  console.log(x);
});
foo.subscribe(y => {
  console.log(y);
});

console.log('ejercicio 3');

const ej3 = new Observable(function subscribe(subscriber) {
    try {
      subscriber.next('test');
      subscriber.next('test 2');
      subscriber.next(() => {
        return 4/0
      });
    }catch(err)
    {
      subscriber.error(err);
    }
});


ej3.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
})