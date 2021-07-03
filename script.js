const rightDiv = document.querySelector('.right-column')
const leftDiv = document.querySelector('.left-column')
const overlay = document.querySelector('.overlay')
const btnClose = document.querySelector('.close-button')


const imgBaseArr = [
  ['img1', 'left', 'https://i.pinimg.com/474x/17/76/c4/1776c49caeb27d4542105a8fcea38369.jpg', ''],
  ['img2', 'left', 'https://i.pinimg.com/474x/e7/7e/bc/e77ebc223874a56c0212e273e3540448.jpg', ''],
  ['img3', 'left', 'https://i.pinimg.com/474x/67/07/63/670763135b86611c8e160087c721c53f.jpg', ''],
  ['img4', 'left', 'https://i.pinimg.com/474x/86/79/18/867918a2bc097a637890f302fe9b3ff7.jpg', ''],
  ['img5', 'left', 'https://i.pinimg.com/474x/2f/ae/e0/2faee0f348ef9a274b7d76fc8aab1f15.jpg', ''],
  ['img6', 'left', 'https://i.pinimg.com/474x/86/37/96/863796feee8a8ec21578b08150975564.jpg', ''],
  ['img7', 'left', 'https://i.pinimg.com/474x/86/79/18/867918a2bc097a637890f302fe9b3ff7.jpg', ''],
  ['img8', 'right', 'https://i.pinimg.com/474x/62/bb/2d/62bb2d25bed6c414d2b115893659f5ff.jpg', ''],
  ['img9', 'right', 'https://i.pinimg.com/474x/cc/ee/47/ccee47695413546193dc3e4ec653cc41.jpg', ''],
  ['img10', 'right', 'https://i.pinimg.com/474x/3c/c0/3b/3cc03b834a0109d49b3278342225d5b0.jpg', ''],
  ['img11', 'right', 'https://i.pinimg.com/474x/1a/57/9d/1a579d36809dd6de85078e98d17c74a2.jpg', ''],
  ['img12', 'right', 'https://i.pinimg.com/474x/be/b7/65/beb76518c49a94a73a7e9a6c3eb9064e.jpg', ''],
  ['img13', 'right', 'https://i.pinimg.com/474x/2e/8b/01/2e8b013bd630c641a88951f8182e27a6.jpg', ''],
  ['img14', 'right', 'https://i.pinimg.com/474x/ed/eb/59/edeb59cd554c95645fbca777424e3c3c.jpg', ''],
]


// Выбираем из массива элементы left

  // пустой массив, который будет заполняться url вертикальных элементов при фильтрации
  const imgLeft = []


  // прогоняем циклом и фильтруем элементы с фильтром 'left', их url загоняем в массив imgUrlFilterArrVertical
  for(let i = 0; i < imgBaseArr.length; i++) {
    if(imgBaseArr[i][1] == 'left') {
      imgLeft.push(imgBaseArr[i][2])
    }
  }

  const numbersLeftArray = imgLeft.length


  for (let i = 0; i < numbersLeftArray; i++) {
  leftDiv.insertAdjacentHTML("beforeEnd", `<div class="image-box"><img src="${imgLeft[i]}" alt="" class="image"></div>`)
}
//



// Выбираем из массива элементы right

  // пустой массив, который будет заполняться url вертикальных элементов при фильтрации
  const imgRight = []


  // прогоняем циклом и фильтруем элементы с фильтром 'left', их url загоняем в массив imgUrlFilterArrVertical
  for(let i = 0; i < imgBaseArr.length; i++) {
    if(imgBaseArr[i][1] == 'right') {
      imgRight.push(imgBaseArr[i][2])
    }
  }

  const numbersRightArray = imgRight.length


  for (let i = 0; i < numbersRightArray; i++) {
    rightDiv.insertAdjacentHTML("beforeEnd", `<div class="image-box"><img src="${imgRight[i]}" alt="" class="image"></div>`)
  }
//




// Открытие кликнутой картинки на главной для отдельного просмотра

  const imgPrevieBoxes = document.querySelectorAll('.image')


  imgPrevieBoxes.forEach(function(unit) {

    unit.addEventListener('click', function() {

    const src = unit.src

    document.querySelector('.image_big-view').src = src

    overlay.style.display = 'block';

    document.body.style.overflow = 'hidden'

    })
  })
//




// Закрытие просмотра изображения

btnClose.addEventListener('click', function() {

  overlay.style.display = 'none';

  document.body.style.overflow = 'auto'

})
























// r
