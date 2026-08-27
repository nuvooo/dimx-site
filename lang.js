// Bilingual toggle: the page carries both languages, the root attribute
// decides which one shows. Default follows the browser, the choice sticks.
(function () {
  var stored = null;
  try { stored = localStorage.getItem('dimx-lang'); } catch (e) {}
  var lang = stored === 'de' || stored === 'en'
    ? stored
    : (navigator.language || 'en').slice(0, 2) === 'de' ? 'de' : 'en';
  document.documentElement.setAttribute('data-lang', lang);

  window.setLang = function (next) {
    document.documentElement.setAttribute('data-lang', next);
    try { localStorage.setItem('dimx-lang', next); } catch (e) {}
    var buttons = document.querySelectorAll('.lang-switch button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle('active', buttons[i].dataset.lang === next);
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    window.setLang(lang);
  });
})();
