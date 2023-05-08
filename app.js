//canvas에 접근
const canvas = document.querySelector('canvas');

//canvas에서 쓸 붓 context(ctx)
const ctx = canvas.getContext('2d');

//JS에서도 canvas의 높이와 너비를 알려줘야함
canvas.width = 800;
canvas.height = 700;

ctx.rect(50, 50, 200, 200); //사각형을 만든다
ctx.rect(250, 250, 200, 200); //사각형을 만든다
ctx.fill();
//도형을 만든 후 fill할지 stroke할지 고르게 된다
//fill -> 색을 채워 넣는 것 stroke -> 선만 있는 것
ctx.beginPath(); //위에 있는 사각형과 다른 경로를 만든다.
ctx.rect(450, 450, 200, 200); //사각형을 만든다
ctx.fillStyle = 'green';
ctx.fill(); //위에 있는 사각형을 단색으로 채운다

//모든 사각형의 색이 변하는 이유는 같은 경로에 있기 때문이다.
