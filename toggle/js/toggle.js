// console.log('hello');
var toggleBtn = document.getElementById('toggleButton');
var toggleWrapper = document.getElementById('toggleOuter');




toggleBtn.addEventListener('click', function() {
  var btnState = toggleBtn.classList[1];
  if (btnState === "off") {
    console.log("off");
    toggleBtn.classList.remove('off');
    toggleBtn.classList.add('on');
    toggleWrapper.classList.remove('unchecked');
    toggleWrapper.classList.add('checked');
  };
  if (btnState === "on") {
    console.log("on");
    toggleBtn.classList.remove('on');
    toggleBtn.classList.add('off');
    toggleWrapper.classList.remove('checked');
    toggleWrapper.classList.add('unchecked');

  }
})
