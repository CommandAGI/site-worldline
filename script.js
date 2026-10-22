(function () {
  var ticker = document.querySelector('.ticker');
  if (!ticker) return;
  ticker.setAttribute('tabindex', '0');
  ticker.addEventListener('focus', function () { ticker.classList.add('paused'); });
  ticker.addEventListener('blur', function () { ticker.classList.remove('paused'); });
})();
