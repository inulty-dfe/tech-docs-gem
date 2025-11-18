(function ($, Modules) {
  'use strict'

  Modules.CookieBanner = function () {
    let $cookieBanner

    this.start = function ($element) {
      $cookieBanner = $element

      if ($cookieBanner && getCookie('cookies_preferences_set') !== 'true') {
        $('#cookie-banner__accept').on('click', acceptCookies)
        $('#cookie-banner__reject').on('click', rejectCookies)

        $cookieBanner.removeAttr('hidden')
      }
    }

    function acceptCookies () {
      document.cookie = 'cookies_preferences_set=true'
      document.cookie = 'cookies_policy={"usage":true}'

      $cookieBanner.attr('hidden', 'hidden')
    }

    function rejectCookies () {
      document.cookie = 'cookies_preferences_set=true'
      document.cookie = 'cookies_policy={"usage":false}'

      $cookieBanner.attr('hidden', 'hidden')
    }

    function getCookie (name) {
      return document.cookie
        .split('; ')
        .find(cookie => cookie.split('=')[0] === name)
        ?.split('=')[1]
    }
  }
})(jQuery, window.GOVUK.Modules)
