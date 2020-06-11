
// This generates the email from the Reservation Form
// Update recipient of email within the form component
export var Email = {
  send: function (a) {
    // eslint-disable-next-line no-unused-vars
    return new Promise(function (n, e) {
      a.nocache = Math.floor(1e6 * Math.random() + 1),
      a.Action = 'Send';
      var t = JSON.stringify(a);
      Email.ajaxPost('https://smtpjs.com/v3/smtpjs.aspx?', t, function (e) {
        n(e);
      });
    });
  }, ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest('POST', e);
    a.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    a.onload = function () {
      var e = a.responseText; null != t && t(e);
    },
    a.send(n);
  }, ajax: function (e, n) {
    var t = Email.createCORSRequest('GET', e);
    t.onload = function () {
      var e = t.responseText; null != n && n(e);
    }, t.send();
  }, createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest;
    return 'withCredentials' in t ? t.open(e, n, !0) : 'undefined' != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t;
  }
};


// This is the same as the above
/* SmtpJS.com - v3.0.0 
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };  */