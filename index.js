import "./component-v0.js";

(function(){
  let $input = document.querySelector('input[is="app-password-checked"]');
  if($input){
    $input.addEventListener('change', (ev) => console.log('strong--> ', ev.target));
  }
})();
