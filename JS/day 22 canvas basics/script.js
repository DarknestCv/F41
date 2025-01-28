const canvasTag = document.querySelector('canvas')
canvasTag.height = 500; //! задаємл кількість точок(роздільну здатність)
canvasTag.width = 500; //! задаємл кількість точок(роздільну здатність)
// * змінення роздільної здатності очищає полотно, потрібно використовувати на самому початку

// ! getContext - метод щоб отримати інтерфейс, тобто обєкт через який ми будемо працювати, працює тільки з (canvas)

const ctx = canvasTag.getContext('2d');

// ! fillstyle - колір заливки
ctx.fillStyle = 'orange'

// ! strokeStyle = колір обводки або ліній
ctx.strokeStyle = 'lime'

// ! lineWidth - ширини ліній
ctx.lineWidth = 3

// ! fillRect - видає замальований прямокутник (x,y - довжина висота)
// x,y,w,h
ctx.fillRect(10,10,50,50)

// ! strokeRect - не залитий обведений прямокутник
ctx.strokeRect(20,20,50,50)


// ! clearRect - видатий очищений прямокутник
ctx.clearRect(40,40,10,10)


// ///////////////////////////////////////
ctx.beginPath()


ctx.moveTo(100,100)
ctx.lineTo(150,100)
ctx.lineTo(150,150)
ctx.closePath()
ctx.stroke()
ctx.fill()

// ! strokeText - обведения
// ! fillText - замальования
// ! малювання тексту на canvas забирає дуже багато часу
ctx.strokeText('hodor', 200, 100)
ctx.fillTextText('hodor', 200, 120)