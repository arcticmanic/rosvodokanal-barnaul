function setClamps(object) {
  for (const elQuerySel in object) {
    const elsNodeList = document.querySelectorAll(elQuerySel)
    const els = [...elsNodeList]
    if (els.length !== 0) {
      els.forEach(el => {
        $clamp(el, { clamp: object[elQuerySel] })
      })
    }
  }
}
