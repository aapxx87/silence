const rightDiv = document.querySelector('.right-column')
const leftDiv = document.querySelector('.left-column')
const overlay = document.querySelector('.overlay')
const btnClose = document.querySelector('.close-button')
const sectionImagePreview = document.querySelector('.image-preview')


const imgBaseArr = [
  ['img1', 'left', 'https://i.pinimg.com/564x/7d/fe/c4/7dfec4572eea2345b0812fc66144821f.jpg', ''],
  ['img2', 'left', 'https://i.pinimg.com/564x/a7/b2/d8/a7b2d819c95cc11154786567a78fb008.jpg', ''],
  ['img3', 'left', 'https://i.pinimg.com/564x/f0/eb/e4/f0ebe49f0a55e386981c027fd0140205.jpg', ''],
  ['img4', 'left', 'https://i.pinimg.com/564x/7e/fd/35/7efd3533e8e8ab9a9ebd8c5fa45a6ec4.jpg', ''],
  ['img5', 'left', 'https://i.pinimg.com/564x/bc/4c/d5/bc4cd5a5ed967441f58260f7cb5c1313.jpg', ''],
  ['img6', 'left', 'https://i.pinimg.com/564x/2b/77/a3/2b77a3101b5de2a5f3098adcb54fdbf1.jpg', ''],
  ['img7', 'left', 'https://i.pinimg.com/564x/ae/79/f1/ae79f141f536a7b77c7a456c8e829cbc.jpg', ''],
  ['img8', 'right', 'https://i.pinimg.com/564x/e1/e6/ac/e1e6aca9d9a393786ed402ffddba196e.jpg', ''],
  ['img9', 'right', 'https://i.pinimg.com/564x/91/cb/54/91cb543b99126f6f1149705622710029.jpg', ''],
  ['img10', 'right', 'https://i.pinimg.com/564x/6e/0e/ad/6e0ead31ba2a883bfb31c995c9830cbe.jpg', ''],
  ['img11', 'right', 'https://i.pinimg.com/564x/5f/34/a5/5f34a5216b0abad545ae44713c93e997.jpg', ''],
  ['img12', 'right', 'https://i.pinimg.com/originals/1c/19/31/1c1931f09a88d4ff5ec524a247ebf9e1.gif', ''],
  ['img13', 'right', 'https://i.pinimg.com/564x/40/4b/ab/404bab4ee1fecbe45c7a44b638599701.jpg', ''],
  ['img14', 'right', 'https://i.pinimg.com/564x/56/d2/96/56d2967a461c368c30bc3be5014ba24e.jpg', ''],
  ['img15', 'right', 'https://i.pinimg.com/564x/26/ec/22/26ec22a257e5ae2934689f4a401aa1bf.jpg', ''],
  ['img16', 'right', 'https://i.pinimg.com/564x/2c/8b/1d/2c8b1db08a7b778bf4c80e2cb5000057.jpg', ''],
  ['img17', 'right', 'https://i.pinimg.com/564x/ac/32/40/ac32405cdd2f238a61709713d6d43f02.jpg', ''],
  ['img18', 'right', 'https://i.pinimg.com/564x/2e/8b/01/2e8b013bd630c641a88951f8182e27a6.jpg', ''],
  ['img19', 'right', 'https://i.pinimg.com/564x/4c/fa/4f/4cfa4f39f4f7d4db663ae22f6578c763.jpg', ''],
  ['img20', 'right', 'https://i.pinimg.com/564x/9a/65/3a/9a653a04945b3b731a013d128e6c59c6.jpg', ''],
  ['img21', 'right', 'https://i.pinimg.com/564x/a9/87/08/a987088fea7fad2df0ccb1305fabcc36.jpg', ''],
  ['img22', 'right', 'https://i.pinimg.com/564x/79/cf/0c/79cf0c1776f861c787e32ad909f42849.jpg', ''],
  ['img23', 'left', 'https://i.pinimg.com/564x/ec/c4/8e/ecc48ee5256b102233fe90428d94fc14.jpg', ''],
  ['img24', 'left', 'https://i.pinimg.com/564x/d4/1f/c1/d41fc116f371abe852886b4928c6436d.jpg', ''],
  ['img25', 'left', 'https://i.pinimg.com/564x/d0/c6/1a/d0c61a5c5c4ca34b4fa45f23fcb59ddb.jpg', ''],
  ['img26', 'left', 'https://i.pinimg.com/564x/03/4c/31/034c31db02941bfeeff775ff7615ec48.jpg', ''],
  ['img27', 'left', 'https://i.pinimg.com/564x/e3/bb/d8/e3bbd89d4f1af87d9fa6607d5f2e7382.jpg', ''],
  ['img28', 'left', 'https://i.pinimg.com/564x/bc/7b/af/bc7bafcd9bf7ed57813d074ecd8c9a58.jpg', ''],
  ['img29', 'left', 'https://i.pinimg.com/564x/bb/df/94/bbdf9470b9979af881ee2d725532f968.jpg', ''],
  ['img30', 'left', 'https://i.pinimg.com/564x/6f/17/b6/6f17b6acf760db99cb3a0515798937ac.jpg', ''],
  ['img31', 'left', 'https://i.pinimg.com/564x/89/8c/81/898c818df77e4ecbe9024419aa1a4f10.jpg', ''],
  ['img32', 'right', 'https://i.pinimg.com/564x/0e/97/9d/0e979d9aa8644068c04a354f88e01467.jpg', ''],
  ['img33', 'right', 'https://i.pinimg.com/564x/8b/6f/22/8b6f2299baf571e4197412164171cb37.jpg', ''],
  ['img34', 'left', 'https://i.pinimg.com/564x/55/4e/76/554e7627abd0f651255f66998db91c35.jpg', ''],
  ['img35', 'right', 'https://i.pinimg.com/564x/fd/5c/a3/fd5ca31a0c3bedef24d236b8d36c6d10.jpg', ''],
  ['img36', 'right', 'https://i.pinimg.com/564x/0b/69/55/0b695505cf4528565a01dcd2d287b8bd.jpg', ''],
  ['img37', 'right', 'https://i.pinimg.com/564x/80/c3/09/80c3091fe79d904b1916a73b41aa11fb.jpg', ''],
  ['img38', 'right', 'https://i.pinimg.com/564x/32/60/f7/3260f72d0980a7a38e7ce8ebb9ffbb63.jpg', ''],
  ['img39', 'right', 'https://i.pinimg.com/564x/0b/d8/51/0bd851f332f80d078972213793062f98.jpg', ''],
  ['img40', 'right', 'https://i.pinimg.com/564x/ed/eb/59/edeb59cd554c95645fbca777424e3c3c.jpg', ''],
  ['img41', 'right', 'https://i.pinimg.com/564x/02/8d/76/028d76743c47eb220e651dbd9f5a8029.jpg', ''],
  ['img42', 'left', 'https://i.pinimg.com/564x/c0/f1/66/c0f1668c7f38c3dbdfbe3566ab5ce326.jpg', ''],
  ['img43', 'left', 'https://i.pinimg.com/564x/03/e8/48/03e848e8edf04e1744ab5dde6fb5f321.jpg', ''],
  ['img44', 'left', 'https://i.pinimg.com/564x/1e/97/35/1e97350c33d22a6f90da8beef8263667.jpg', ''],
  ['img45', 'left', 'https://i.pinimg.com/564x/c3/de/be/c3debeb47ec21910170a8b6619e4f995.jpg', ''],
  ['img46', 'left', 'https://i.pinimg.com/564x/50/e7/6e/50e76edb2155f5dec0a2485ad8c0a1e9.jpg', ''],
  ['img47', 'right', 'https://i.pinimg.com/564x/cb/eb/92/cbeb923205106da55a1b15ced6c1246e.jpg', ''],
  ['img48', 'right', 'https://i.pinimg.com/564x/da/67/11/da6711a71b6c8c17fc79bc3e6f08c351.jpg', ''],
  ['img49', 'right', 'https://i.pinimg.com/564x/a4/9f/d4/a49fd4465260f937f2b7779acc5a888f.jpg', ''],
  ['img50', 'right', 'https://i.pinimg.com/564x/c3/37/6b/c3376b53e858b4a1f2c1316c464a832e.jpg', ''],
  ['img51', 'right', 'https://i.pinimg.com/564x/37/38/1c/37381c0e7e5831bfb27159a5f42f310a.jpg', ''],
  ['img52', 'left', 'https://i.pinimg.com/564x/3f/4c/7c/3f4c7ce518c60e3ce59ae5e34bff2bf4.jpg', ''],
  ['img53', 'left', 'https://i.pinimg.com/564x/81/b1/9f/81b19f46cff181c3a810c52f6cbba0b3.jpg', ''],
  ['img54', 'left', 'https://i.pinimg.com/564x/04/66/d3/0466d3ba715ba02e95f9fefd15839679.jpg', ''],
  ['img55', 'right', 'https://i.pinimg.com/564x/ee/b9/ab/eeb9abadf828414138686042fbf446e1.jpg', ''],
  ['img56', 'right', 'https://i.pinimg.com/564x/eb/67/e5/eb67e5fbeed0cce87c71aa2eb43348e7.jpg', ''],
  ['img57', 'right', 'https://i.pinimg.com/564x/98/e9/12/98e91212f5b76ec209e155dd335f61f7.jpg', ''],
  ['img58', 'left', 'https://i.pinimg.com/564x/f2/0d/13/f20d132cf390c26678f9edfd1df73c18.jpg', ''],
  ['img59', 'left', 'https://i.pinimg.com/564x/b0/4c/c6/b04cc64b420bdcedee3cc48160abc3f5.jpg', ''],
  ['img60', 'left', 'https://i.pinimg.com/564x/e6/53/f5/e653f5f2b28067b4d36fb537f2679ee4.jpg', ''],
  ['img61', 'left', 'https://i.pinimg.com/564x/3d/25/34/3d253440c68ea63b86806912e278746f.jpg', ''],
  ['img62', 'left', 'https://i.pinimg.com/564x/fb/2e/09/fb2e09739a4a4d5f24a5f809ca276c6b.jpg', ''],
  ['img63', 'left', 'https://i.pinimg.com/564x/a8/b0/ee/a8b0ee5a89e093ef6448f198c01fe8df.jpg', ''],
  ['img64', 'right', 'https://i.pinimg.com/564x/47/17/86/47178626549fe6895a69f65fbb877054.jpg', ''],
  ['img65', 'right', 'https://i.pinimg.com/564x/6a/30/db/6a30dbdd31d82f4f67249cc0f99a3e20.jpg', ''],
  ['img66', 'right', 'https://i.pinimg.com/564x/65/1e/9b/651e9b91f9bbb580f1b26913a565eba4.jpg', ''],
  ['img67', 'right', 'https://i.pinimg.com/564x/48/e4/6d/48e46d86f9fc73b3e9b009b6907dbc0a.jpg', ''],
  ['img68', 'right', 'https://i.pinimg.com/564x/84/55/bc/8455bc57cafc1049fc8eb6d40a240b0a.jpg', ''],
  ['img69', 'right', 'https://i.pinimg.com/564x/7b/29/e0/7b29e099f7c04cc36cb6041c15c2bc8c.jpg', ''],
  ['img70', 'right', 'https://i.pinimg.com/564x/4c/04/e2/4c04e289afb5dc60244ecc67f3c09b64.jpg', ''],
  ['img71', 'right', 'https://i.pinimg.com/564x/47/6b/17/476b1793984a510710f431dc68432365.jpg', ''],
  ['img72', 'left', 'https://i.pinimg.com/564x/f1/e1/cd/f1e1cd116901fc68dcc4379711bc61ae.jpg', ''],
  ['img73', 'left', 'https://i.pinimg.com/564x/ce/99/f9/ce99f99bd558e1fbd91e364ca6566c60.jpg', ''],
  ['img74', 'left', 'https://i.pinimg.com/564x/83/b0/11/83b0117384e82632e83cc4741bdc5081.jpg', ''],
  ['img75', 'left', 'https://i.pinimg.com/564x/43/10/be/4310be2a1e733e14169ea5117d86c23a.jpg', ''],
  ['img76', 'left', 'https://i.pinimg.com/564x/53/18/62/5318621ee33750927f2f78a30a67816d.jpg', ''],
  ['img77', 'left', 'https://i.pinimg.com/564x/ff/4c/a0/ff4ca09a82803447d00fc6f942ea35c5.jpg', ''],
  ['img78', 'left', 'https://i.pinimg.com/564x/b8/58/25/b85825b47e3af963481835d1c540ff64.jpg', ''],
  ['img79', 'left', 'https://i.pinimg.com/564x/7b/23/eb/7b23ebe8e8230e543d1669a864fa3996.jpg', ''],
  ['img80', 'left', 'https://i.pinimg.com/564x/cd/4a/09/cd4a096b2096ebb4f460c171cf0f913e.jpg', ''],
  ['img81', 'left', 'https://i.pinimg.com/564x/91/5e/4c/915e4cf8f21f1ed8cfce9f66ac4c64d4.jpg', ''],
  ['img82', 'left', 'https://i.pinimg.com/564x/61/3e/53/613e53cc12574047390b3092424c19bb.jpg', ''],
  ['img83', 'left', 'https://i.pinimg.com/564x/86/37/96/863796feee8a8ec21578b08150975564.jpg', ''],
  ['img84', 'right', 'https://i.pinimg.com/564x/8e/3f/59/8e3f59787f6802df7cf2b31b8b36d396.jpg', ''],
  ['img85', 'right', 'https://i.pinimg.com/564x/ad/66/17/ad66173fbfb98ff0458cfc7cd1d4be12.jpg', ''],
  ['img86', 'right', 'https://i.pinimg.com/564x/0a/ac/4e/0aac4eef5035f22c9e27ee2673ad729f.jpg', ''],
  ['img87', 'right', 'https://i.pinimg.com/564x/3b/c6/a3/3bc6a3c557aeaff4636490b6fc141acc.jpg', ''],
  ['img88', 'right', 'https://i.pinimg.com/564x/f5/5b/a7/f55ba7e8f126f2f527d8db352255bee2.jpg', ''],
  ['img89', 'right', 'https://i.pinimg.com/564x/0f/31/d3/0f31d36f07ffce7352ef1a876d0a98e4.jpg', ''],
  ['img90', 'right', 'https://i.pinimg.com/564x/a3/88/8c/a3888c1e0f2f2cc377140baedbdda912.jpg', ''],
  ['img91', 'left', 'https://i.pinimg.com/564x/34/0c/23/340c23d6c950c2253c0a6662a2844388.jpg', ''],
  ['img92', 'left', 'https://i.pinimg.com/564x/b7/f8/77/b7f877487511a58a3befed50f5bb46d2.jpg', ''],
  ['img93', 'left', 'https://i.pinimg.com/564x/6b/fc/c6/6bfcc6e329f81868aa46553edb4a9d81.jpg', ''],
  ['img94', 'left', 'https://i.pinimg.com/564x/ee/5d/45/ee5d45c079706026f24289bbfef09763.jpg', ''],
  ['img95', 'left', 'https://i.pinimg.com/564x/96/af/bf/96afbf8dd580a8fe959a8723aa233918.jpg', ''],
  ['img96', 'left', 'https://i.pinimg.com/564x/1f/0f/6e/1f0f6ee6ca705b95b9a8f3a9912a0aae.jpg', ''],
  ['img97', 'left', 'https://i.pinimg.com/564x/13/b2/6b/13b26ba3829d59147f00185f6f5648b7.jpg', ''],
  ['img98', 'left', 'https://i.pinimg.com/564x/0b/ca/08/0bca0832d7eaae6ad84454948884665a.jpg', ''],
  ['img99', 'left', 'https://i.pinimg.com/564x/14/ed/13/14ed1306690c77e6facf53944f7fb6ef.jpg', ''],
  ['img100', 'right', 'https://i.pinimg.com/564x/01/38/d8/0138d866d31a8cacfc740ad429e5f9df.jpg', ''],
  ['img101', 'right', 'https://i.pinimg.com/564x/cc/ee/47/ccee47695413546193dc3e4ec653cc41.jpg', ''],
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
