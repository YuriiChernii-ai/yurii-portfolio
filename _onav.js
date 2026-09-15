    /* ---------- OSMO-STYLE HEADER: pill morph ---------- */
    /* width grows first (CSS), then the panel drops to its exact measured
       height (CSS transition on a JS-set --panel-h). No JS per-frame work,
       no y-slide on the content -> one clean motion, no jank. */
    var onavToggle = document.getElementById('onavToggle');
    var onavPanel  = document.getElementById('onavPanel');
    var onavScrim  = document.getElementById('onavScrim');
    var onavClip   = document.querySelector('.onav__clip');
    var onavEl     = document.querySelector('.onav');

    /* measure the panel height ONCE (and on resize) — never during a toggle,
       so the open transition always has a clean start value */
    function measurePanel() {
      if (root.classList.contains('onav-open')) return;   /* don't disturb an open menu */
      onavEl.classList.add('is-measuring');
      var h = onavPanel.offsetHeight;
      onavEl.classList.remove('is-measuring');
      onavClip.style.setProperty('--panel-h', h + 'px');
    }
    measurePanel();
    window.addEventListener('load', measurePanel);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measurePanel);

    var rzT;
    window.addEventListener('resize', function () {
      clearTimeout(rzT);
      rzT = setTimeout(measurePanel, 200);
    });

    function setONav(open) {
      root.classList.toggle('onav-open', open);
      onavToggle.setAttribute('aria-expanded', open);
      onavPanel.setAttribute('aria-hidden', !open);
    }
    onavToggle.addEventListener('click', function () { setONav(!root.classList.contains('onav-open')); });
    onavScrim.addEventListener('click', function () { setONav(false); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { setONav(false); }
    });

