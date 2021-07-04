const rightDiv = document.querySelector('.right-column')
const leftDiv = document.querySelector('.left-column')
const overlay = document.querySelector('.overlay')
const btnClose = document.querySelector('.close-button')
const sectionImagePreview = document.querySelector('.image-preview')


const imgBaseArr = [
  ['img1', 'left', 'https://i.pinimg.com/474x/de/ad/66/dead66442313d76f1a30bff04b23c3ab.jpg', ''],
  ['img2', 'left', 'https://i.pinimg.com/474x/c7/43/42/c7434280fbd48ca53df8c584ec825ad8.jpg', ''],
  ['img3', 'left', 'https://i.pinimg.com/474x/da/36/ab/da36aba584cc7e663f5fb0908dfc76ca.jpg', ''],
  ['img4', 'left', 'https://i.pinimg.com/474x/88/e6/ac/88e6ace71d34b5c8dec02b87980762bd.jpg', ''],
  ['img5', 'left', 'https://i.pinimg.com/474x/25/7d/df/257ddf9575c61ebca115d0946c22f56b.jpg', ''],
  ['img6', 'left', 'https://i.pinimg.com/474x/f2/0d/13/f20d132cf390c26678f9edfd1df73c18.jpg', ''],
  ['img7', 'left', 'https://i.pinimg.com/474x/eb/67/e5/eb67e5fbeed0cce87c71aa2eb43348e7.jpg', ''],
  ['img8', 'right', 'https://i.pinimg.com/474x/b0/4c/c6/b04cc64b420bdcedee3cc48160abc3f5.jpg', ''],
  ['img9', 'right', 'https://i.pinimg.com/474x/ee/b9/ab/eeb9abadf828414138686042fbf446e1.jpg', ''],
  ['img10', 'right', 'https://i.pinimg.com/474x/e6/53/f5/e653f5f2b28067b4d36fb537f2679ee4.jpg', ''],
  ['img11', 'right', 'https://i.pinimg.com/474x/98/e9/12/98e91212f5b76ec209e155dd335f61f7.jpg', ''],
  ['img12', 'right', 'https://i.pinimg.com/474x/04/66/d3/0466d3ba715ba02e95f9fefd15839679.jpg', ''],
  ['img13', 'right', 'https://i.pinimg.com/474x/e2/b9/96/e2b996cf85eacee2cb33b6aeb16cf561.jpg', ''],
  ['img14', 'right', 'https://i.pinimg.com/474x/fb/2e/09/fb2e09739a4a4d5f24a5f809ca276c6b.jpg', ''],
  ['img15', 'right', 'https://i.pinimg.com/474x/81/b1/9f/81b19f46cff181c3a810c52f6cbba0b3.jpg', ''],
  ['img16', 'right', 'https://i.pinimg.com/474x/3f/4c/7c/3f4c7ce518c60e3ce59ae5e34bff2bf4.jpg', ''],
  ['img17', 'right', 'https://i.pinimg.com/474x/3c/d4/86/3cd4868acd05152efe05ec9a3bad352e.jpg', ''],
  ['img18', 'right', 'https://i.pinimg.com/474x/a8/b0/ee/a8b0ee5a89e093ef6448f198c01fe8df.jpg', ''],
  ['img19', 'right', 'https://i.pinimg.com/474x/3d/25/34/3d253440c68ea63b86806912e278746f.jpg', ''],
  ['img20', 'right', 'https://i.pinimg.com/474x/0b/69/55/0b695505cf4528565a01dcd2d287b8bd.jpg', ''],
  ['img21', 'right', 'https://i.pinimg.com/474x/8b/6f/22/8b6f2299baf571e4197412164171cb37.jpg', ''],
  ['img22', 'right', 'https://i.pinimg.com/474x/c3/37/6b/c3376b53e858b4a1f2c1316c464a832e.jpg', ''],
  ['img23', 'left', 'https://i.pinimg.com/474x/a4/9f/d4/a49fd4465260f937f2b7779acc5a888f.jpg', ''],
  ['img24', 'left', 'https://i.pinimg.com/474x/c3/de/be/c3debeb47ec21910170a8b6619e4f995.jpg', ''],
  ['img25', 'left', 'https://i.pinimg.com/474x/da/67/11/da6711a71b6c8c17fc79bc3e6f08c351.jpg', ''],
  ['img26', 'left', 'https://i.pinimg.com/474x/7e/fd/35/7efd3533e8e8ab9a9ebd8c5fa45a6ec4.jpg', ''],
  ['img27', 'left', 'https://i.pinimg.com/474x/d4/1f/c1/d41fc116f371abe852886b4928c6436d.jpg', ''],
  ['img28', 'left', 'https://i.pinimg.com/474x/fc/4c/66/fc4c669856bcd85d6fb73b40e5ecf342.jpg', ''],
  ['img29', 'left', 'https://i.pinimg.com/474x/fc/4c/66/fc4c669856bcd85d6fb73b40e5ecf342.jpg', ''],
  ['img30', 'left', 'https://i.pinimg.com/474x/bc/7b/af/bc7bafcd9bf7ed57813d074ecd8c9a58.jpg', ''],
  ['img31', 'left', 'https://i.pinimg.com/474x/80/c3/09/80c3091fe79d904b1916a73b41aa11fb.jpg', ''],
  ['img32', 'right', 'https://i.pinimg.com/474x/76/f4/08/76f4086b08db98587576cf2304570367.jpg', ''],
  ['img33', 'right', 'https://i.pinimg.com/474x/9a/65/3a/9a653a04945b3b731a013d128e6c59c6.jpg', ''],
  ['img34', 'left', 'https://i.pinimg.com/474x/4d/86/87/4d86873fd51618af175341186c931329.jpg', ''],
  ['img35', 'right', 'https://i.pinimg.com/474x/02/8d/76/028d76743c47eb220e651dbd9f5a8029.jpg', ''],
  ['img36', 'right', 'https://i.pinimg.com/474x/c0/f1/66/c0f1668c7f38c3dbdfbe3566ab5ce326.jpg', ''],
  ['img37', 'right', 'https://i.pinimg.com/474x/bb/df/94/bbdf9470b9979af881ee2d725532f968.jpg', ''],
  ['img38', 'right', 'https://i.pinimg.com/474x/f0/eb/e4/f0ebe49f0a55e386981c027fd0140205.jpg', ''],
  ['img39', 'right', 'https://i.pinimg.com/474x/ed/eb/59/edeb59cd554c95645fbca777424e3c3c.jpg', ''],
  ['img40', 'right', 'https://i.pinimg.com/474x/0e/97/9d/0e979d9aa8644068c04a354f88e01467.jpg', ''],
  ['img41', 'right', 'https://i.pinimg.com/474x/fd/5c/a3/fd5ca31a0c3bedef24d236b8d36c6d10.jpg', ''],
  ['img42', 'left', 'https://i.pinimg.com/474x/1e/97/35/1e97350c33d22a6f90da8beef8263667.jpg', ''],
  ['img43', 'left', 'https://i.pinimg.com/474x/03/e8/48/03e848e8edf04e1744ab5dde6fb5f321.jpg', ''],
  ['img44', 'left', 'https://i.pinimg.com/474x/32/60/f7/3260f72d0980a7a38e7ce8ebb9ffbb63.jpg', ''],
  ['img45', 'left', 'https://i.pinimg.com/474x/d0/c6/1a/d0c61a5c5c4ca34b4fa45f23fcb59ddb.jpg', ''],
  ['img46', 'left', 'https://i.pinimg.com/474x/55/4e/76/554e7627abd0f651255f66998db91c35.jpg', ''],
  ['img47', 'right', 'https://i.pinimg.com/474x/6f/17/b6/6f17b6acf760db99cb3a0515798937ac.jpg', ''],
  ['img48', 'right', 'https://i.pinimg.com/474x/4c/fa/4f/4cfa4f39f4f7d4db663ae22f6578c763.jpg', ''],
  ['img49', 'right', 'https://i.pinimg.com/474x/d0/c6/1a/d0c61a5c5c4ca34b4fa45f23fcb59ddb.jpg', ''],
  ['img50', 'right', 'https://i.pinimg.com/474x/2e/8b/01/2e8b013bd630c641a88951f8182e27a6.jpg', ''],
  ['img51', 'right', 'https://i.pinimg.com/474x/40/4b/ab/404bab4ee1fecbe45c7a44b638599701.jpg', ''],
  ['img52', 'left', 'https://i.pinimg.com/474x/1b/70/61/1b7061e57ff4edde0b2d1628e508b6c4.jpg', ''],
  ['img53', 'left', 'https://i.pinimg.com/474x/2c/8b/1d/2c8b1db08a7b778bf4c80e2cb5000057.jpg', ''],
  ['img54', 'left', 'https://i.pinimg.com/474x/03/4c/31/034c31db02941bfeeff775ff7615ec48.jpg', ''],
  ['img55', 'left', 'https://i.pinimg.com/474x/1c/19/31/1c1931f09a88d4ff5ec524a247ebf9e1.jpg', ''],
  ['img56', 'left', 'https://i.pinimg.com/474x/a9/87/08/a987088fea7fad2df0ccb1305fabcc36.jpg', ''],
  ['img57', 'left', 'https://i.pinimg.com/474x/ec/c4/8e/ecc48ee5256b102233fe90428d94fc14.jpg', ''],
  ['img58', 'left', 'https://i.pinimg.com/474x/ac/32/40/ac32405cdd2f238a61709713d6d43f02.jpg', ''],
  ['img59', 'left', 'https://i.pinimg.com/474x/37/38/1c/37381c0e7e5831bfb27159a5f42f310a.jpg', ''],
  ['img60', 'left', 'https://i.pinimg.com/474x/0b/d8/51/0bd851f332f80d078972213793062f98.jpg', ''],
  ['img61', 'right', 'https://i.pinimg.com/474x/50/e7/6e/50e76edb2155f5dec0a2485ad8c0a1e9.jpg', ''],
  ['img62', 'right', 'https://i.pinimg.com/474x/e3/bb/d8/e3bbd89d4f1af87d9fa6607d5f2e7382.jpg', ''],
  ['img63', 'right', 'https://i.pinimg.com/474x/26/ec/22/26ec22a257e5ae2934689f4a401aa1bf.jpg', ''],
  ['img64', 'right', 'https://i.pinimg.com/474x/5f/34/a5/5f34a5216b0abad545ae44713c93e997.jpg', ''],
  ['img65', 'right', 'https://i.pinimg.com/474x/50/db/b2/50dbb205a5bc41f8f66b24df2e148ed8.jpg', ''],
  ['img66', 'right', 'https://i.pinimg.com/474x/56/d2/96/56d2967a461c368c30bc3be5014ba24e.jpg', ''],
  ['img67', 'right', 'https://i.pinimg.com/474x/79/cf/0c/79cf0c1776f861c787e32ad909f42849.jpg', ''],
  ['img68', 'right', 'https://i.pinimg.com/474x/91/cb/54/91cb543b99126f6f1149705622710029.jpg', ''],
  ['img69', 'right', 'https://i.pinimg.com/474x/2b/77/a3/2b77a3101b5de2a5f3098adcb54fdbf1.jpg', ''],
  ['img70', 'right', 'https://i.pinimg.com/474x/7d/fe/c4/7dfec4572eea2345b0812fc66144821f.jpg', ''],
  ['img71', 'right', 'https://i.pinimg.com/474x/6e/0e/ad/6e0ead31ba2a883bfb31c995c9830cbe.jpg', ''],
  ['img72', 'left', 'https://i.pinimg.com/474x/bc/4c/d5/bc4cd5a5ed967441f58260f7cb5c1313.jpg', ''],
  ['img73', 'left', 'https://i.pinimg.com/474x/a7/b2/d8/a7b2d819c95cc11154786567a78fb008.jpg', ''],
  ['img74', 'left', 'https://i.pinimg.com/474x/47/17/86/47178626549fe6895a69f65fbb877054.jpg', ''],
  ['img74', 'left', 'https://i.pinimg.com/474x/e1/e6/ac/e1e6aca9d9a393786ed402ffddba196e.jpg', ''],
  ['img76', 'left', 'https://i.pinimg.com/474x/89/8c/81/898c818df77e4ecbe9024419aa1a4f10.jpg', ''],
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
