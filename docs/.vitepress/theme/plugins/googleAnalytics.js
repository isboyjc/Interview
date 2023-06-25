/*
 * @LastEditTime: 2023-06-26 05:34:14
 * @Description: Google Analytics
 * @Date: 2023-06-26 05:34:03
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
function mountGoogleAnalytics(id) {
  if (window.dataLayer && window.gtag)
    return

  const gtagScript = document.createElement('script')
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  gtagScript.async = true
  document.head.appendChild(gtagScript)
  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', id)
}
export default ({ id }) => {
  if (process.env.NODE_ENV === 'production' && id && typeof window !== 'undefined')
    mountGoogleAnalytics(id)
}