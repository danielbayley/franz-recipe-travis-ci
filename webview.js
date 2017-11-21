'use strict'
module.exports = (Franz, {team}) => {
  return Franz.loop(() => {
    let selector = '.sidebar-list .repos-list .repo .tile:not(.passed)'
    if (document.URL.endsWith(team)) {
      selector = '.owner-tile.row-li:not(.passed)'
    }
    const unread = Array.from(document.querySelectorAll(selector))
    return Franz.setBadge(unread.length)
  })
}
