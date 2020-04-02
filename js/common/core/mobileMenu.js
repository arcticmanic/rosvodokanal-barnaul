$(document).ready(function() {
  const menu = new MmenuLight(document.querySelector('#my-menu'))

  const navigator = menu.navigation({
    title: 'logo'
  })
  const drawer = menu.offcanvas({
    position: 'right'
  })

  document
    .querySelector("a[href='#my-menu']")
    .addEventListener('click', evnt => {
      evnt.preventDefault()
      drawer.open()
    })

  $(document).on(
    'click',
    '.mobile-menu .all-sites .all-sites__text',
    function() {
      const it = $(this)
      it.closest('.all-sites').toggleClass('active')
      $('.city-list').fadeToggle(500)
    }
  )
})
