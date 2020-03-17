$(document).ready(function() {
  if ($('.partner__item').length !== 0) {
    const amountOfPartnerItems = $('.partners__cont .partner__item').length
    const set = new Set()
    let ampountOfVisiblePartners = 6

    while (set.size < ampountOfVisiblePartners) {
      const prevSetSize = set.size,
        generatedRandomNum = Math.floor(
          Math.random() * (amountOfPartnerItems - 1 + 1) + 1
        )
      set.add(generatedRandomNum)
      if (set.size !== prevSetSize) {
        $(
          '.partners__cont .partner__item:nth-child(' + generatedRandomNum + ')'
        )[0].style.display = 'flex'
      }
    }
  }
})
