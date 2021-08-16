var scene = document.getElementById("scene");
var parallax = new Parallax(scene);
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString(
    "Kami bangsa Indonesia, dengan ini menjatakan kemerdekaan Indonesia."
  )
  .typeString(
    " Hal-hal jang mengenai pemindahan kekoeasaan d.l.l., diselenggarakan "
  )
  .typeString(
    `dengan tjara seksama dan dalam tempo jang sesingkat-singkatnja.<br><br>Djakarta, hari 17 boelan 8 tahoen '05'`
  )
  .typeString(
    `<br><br>
            Atas nama bangsa Indonesia.<br>Soekarno/Hatta.`
  )
  .start();

var quote = document.getElementById("quote");

var quotewrite = new Typewriter(quote, {
  loop: true,
});

quotewrite
  .typeString(
    `
<b>“Merdeka dan duka”</b><br>

 

Kembali, hari sejarah itu tiba<br>
Saat perdana bendera dikibarkan<br>
Juga saat proklamasi pertama dibacakan<br>
Itulah tanda kemerdekaan<br>
Tapi ada yang mendampingi<br>
Selain antusias untuk mengiringi<br>
Yakni sebuah pandemi<br>
Yang menggurat duka seluruh negeri<br>
Tapi jangan bersedih<br>
<br>
Cinta letaknya di hati<br>
Tidak akan pernah mati<br>
Walau bertahan membuat pedih<br>
Tetaplah menjadi indonesia<br>
Yang akan selalu merasa bangga<br>
Tetaplah selalu merdeka`
  )
  .start();

  $('#pengibar').click(function() {
    $('#pengibar').css({
        'background-color': 'red',
        'color': 'white',
        'font-size': '44px'
    });
});