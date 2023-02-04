import KalmanFilter from 'kalmanjs';

const kf = new KalmanFilter();
kf.filter(20);
kf.filter(20);
kf.filter(21);
kf.filter(22);
kf.filter(20);
kf.filter(20);
kf.filter(21);
kf.filter(22);
kf.filter(20);
kf.filter(21);
kf.filter(22);
kf.filter(20);
var data1 = kf.filter(-1400);
console.log(data1)
const data=[20,21,22,20,-1400];
function getAvg(grades) {
    const total = grades.reduce((acc, c) => acc + c, 0);
    return total / grades.length;
  }
if (data1>40){
    const average = getAvg(data)
    console.log(average)
}else if(data1<-40){
    const average = getAvg(data)
    console.log(average)
}else{
    console.log(data1)
}
// console.log(data1);

// kf.filter(20);
// kf.filter(21);
// kf.filter(22);
// kf.filter(20);
// var data2 = kf.filter(data1);
// console.log(data2)