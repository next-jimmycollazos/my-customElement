import "./component.js";

(function(){
  const $input = document.querySelector('#input');
  const $value = document.querySelector('#value');
  console.log($input, '<<<')
  const update = () => $value.innerText = $input.strong;
      $input.addEventListener('change', update);
      update();


    })();
