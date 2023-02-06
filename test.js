import KalmanFilter from 'kalmanjs';

const kf = new KalmanFilter();

// kf.filter(20);
// kf.filter(21);
// kf.filter(22);
// kf.filter(20);
var data1 = 1380.80;
// console.log(data1)                   
const data=[18.80,18.90,18.70,18.60];
// function getAvg(grades) {
//     const total = grades.reduce((acc, c) => acc + c, 0);
//     return total / grades.length;
//   }
// if (data1>40){
//     const average = getAvg(data)
//     console.log(average)
//     console.log('data +')
// }else if(data1<-40){
//     const average = getAvg(data)
//     console.log(average)
//     console.log('data -')
// }else{
//     console.log(data1)
//     console.log('data normal')
// }
// function compareValues(a, b) {
//     if (a !== b) {
//       b = a;
//     }
//     return b;
//   }
  
// //   let valueA = 10;
// //   let valueB = 20;
//   data1 = compareValues(data, data1);
//   console.log(data1); // 10
  

//   function compareValues(a, b, threshold) {
//     if (Math.abs(a - b) > threshold) {
//       b = a;
//     }
//     return b;
//   }
  
//   let valueA = 10;
//   let valueB = 14;
//   let threshold = 5;
//   valueB = compareValues(valueA, valueB, threshold);
//   console.log(valueB); //

  function compareValues(a, b, delta) {
    if (Math.abs(a - b) > delta) {
      b = a;
    }
    return b;
  }
  
  let dataA = 10;
  let dataB = 20;
  let delta = 40;
  dataB = compareValues(dataA, dataB, delta);
  console.log(dataB); // 10
  