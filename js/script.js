function abrirModal() {
  let modal = document.querySelector('.modal')
  modal.style.visibility = 'visible';
}

function fecharModal() {
  let modal = document.querySelector('.modal')
  modal.style.visibility = 'hidden';
}

  console.log($('.minus-btn'))

$('.minus-btn').on('click', function (e) {
  console.log('oi')
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);

});

$('.plus-btn').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value = 100;
  }

  $input.val(value);
});

$('.like-btn').on('click', function () {
  $(this).toggleClass('is-active');
});