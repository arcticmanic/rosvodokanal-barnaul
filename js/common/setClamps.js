$(document).ready(function() {
  function setClamps(object) {
    for (const elQuerySel in object) {
      const els = document.querySelectorAll(elQuerySel)
      if (els.length !== 0) {
        els.forEach(el => {
          $clamp(el, { clamp: object[elQuerySel] })
        })
      }
    }
  }

  const elWithClammpSizes = {
    '.section-info .info-slider__text': 3,
    '.section-news .news__title': 2,
    '.section-quick-menu .quick-menu__p': 4
  }

  setClamps(elWithClammpSizes)
})
