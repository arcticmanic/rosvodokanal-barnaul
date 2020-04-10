$(document).ready(function () {
  const menu = new MmenuLight(document.querySelector('#my-menu'))

  const navigator = menu.navigation({
    title: 'logo',
  })
  const drawer = menu.offcanvas({
    position: 'right',
  })
  document
    .querySelector("a[href='#my-menu']")
    .addEventListener('click', (evnt) => {
      evnt.preventDefault()
      drawer.open()
    })
  document
    .querySelector('#close-mobile-menu-btn')
    .addEventListener('click', (evnt) => {
      evnt.preventDefault()
      drawer.close()
    })

  $('.mm-spn .mobile-menu__footer .all-sites__text').on('click', function () {
    const it = $(this)
    it.closest('.all-sites').toggleClass('active')
    $('.city-list').fadeToggle(500)
  })
})
