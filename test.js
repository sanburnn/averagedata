import KalmanFilter from 'kalmanjs';

const kf = new KalmanFilter();

// kf.filter(20);
// kf.filter(21);
// kf.filter(22);
// kf.filter(20);
var data1 = 1380.80;
// console.log(data1)                   
const data=[18.80,18.90,18.70,18.60];
function getAvg(grades) {
    const total = grades.reduce((acc, c) => acc + c, 0);
    return total / grades.length;
  }
if (data1>40){
    const average = getAvg(data)
    console.log(average)
    console.log('data +')
}else if(data1<-40){
    const average = getAvg(data)
    console.log(average)
    console.log('data -')
}else{
    console.log(data1)
    console.log('data normal')
}
