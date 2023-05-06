//canvas에 접근
const canvas = document.querySelector('canvas');

//canvas에서 쓸 붓 context(ctx)
const ctx = canvas.getContext('2d');

//JS에서도 canvas의 높이와 너비를 알려줘야함
canvas.width = 800;
canvas.height = 700;

ctx.fillRect(5, 5, 300, 300);
