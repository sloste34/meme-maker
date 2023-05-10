//canvas에 접근
const canvas = document.querySelector('canvas');

//canvas에서 쓸 붓 context(ctx)
const ctx = canvas.getContext('2d');

//JS에서도 canvas의 높이와 너비를 알려줘야함
canvas.width = 800;
canvas.height = 700;

ctx.moveTo(50, 50);
ctx.lineTo(150, 150);
ctx.moveTo(250, 250);
ctx.lineTo(350, 350);
ctx.stroke();
