import "./component.js";

(function(){
      const update = () => $value.innerText = $input.strong;
      $input.addEventListener('change', update);
      update();
    })();
