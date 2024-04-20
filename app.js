let matrix1=[
    [2,3,3],
    [6,5,4],
    [3,7,6],
];
let matrix2=[
    [3,4,6],
    [8,3,6],
    [5,3,8],
];

let result=[[],[],[]];

for(let i=0;i<3;i++){
    result[i]
    for(let j=0; j<3;j++){
       let sum= (matrix1[i][j] + matrix2[i][j]);
        result[i].push(sum);
    }
}
console.log(result);
