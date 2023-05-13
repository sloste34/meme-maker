//canvas에 접근
const canvas = document.querySelector('canvas');

//canvas에서 쓸 붓 context(ctx)
const ctx = canvas.getContext('2d');

//JS에서도 canvas의 높이와 너비를 알려줘야함
canvas.width = 800;
canvas.height = 700;

ctx.moveTo(50, 50);
ctx.lineTo(250, 50);
ctx.lineTo(250, 250);
ctx.lineTo(50, 250);
ctx.lineTo(50, 50);
ctx.fill();
ctx.stroke();

//가로선 : x 세로선 : y
//moveTo = 선을 긋지 않으면서 연필을 종이의 다른 부분으로 움직인다. 브러쉬를 0,0에서 시작해서 숫자만큼 옮겨준다.
//lineTo = 연필을 선을 그으면서 움직인다. 브러쉬가 위치한 곳에서 좌표만큼 라인을 그려준다. 브러쉬는 끝부분에 위치힌다.
//stroke = 테두리에 색을 넣어준다
//fill = 도형에 색을 채운다
