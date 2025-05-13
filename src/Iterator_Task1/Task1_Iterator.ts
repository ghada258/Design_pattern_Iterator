function Iterator_range(start:number, end:number, step:number) {
    return {
      [Symbol.iterator]() {
        let current = start;
        return {
          next() {
            if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
              return { 
                done: true,
                 value: undefined
              };
            }
            const value = current;
            current += step;
            return {
                 done: false,
                 value 
                };
          }
        };
      }
    };
  }

 function* Generator_range(start: number, end: number, step: number) {
    let current = start;
    if (step > 0) {
      while (current < end) {
        yield current;
        current += step;
      }
    } else {
      while (current > end) {
        yield current;
        current += step;
      }
    }
  }
  console.log('*********for of Generator**************');
  for(const value of Generator_range(1,6,1)){
      console.log(value);
  }
  console.log('*********Spread Generator**************');
  console.log([...Generator_range(10, 15,1)]);

  console.log('*********for of Iterator**************');
  for(const value of Iterator_range(1,9,1)){
    console.log(value);
  }

  console.log('*********Spread Iterator**************');
  console.log([...Iterator_range(1,5,1)]);

  const iterator = Iterator_range(1,10,2)[Symbol.iterator]();
  console.log('*********iterator.next()**************')
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());