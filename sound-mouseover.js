
//Junkrat
function playclip1() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all)
   {
  document.all.sound.src = "Junkrat-ult.mp3";
 }
}

  else {
{
var audio = document.getElementById("mySoundClip1"); audio.play();
audio.play();
}
}
}

//Clicks for hughlighting
function playclip2() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all)
   {
  document.all.sound.src = "click.mp3";
 }
}

  else {
{
var audio = document.getElementById("mySoundClip2"); audio.play();
audio.play();
}
}
}

//Lucio
function playclip3() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all)
   {
  document.all.sound.src = "Lucio-ult.mp3";
 }
}

  else {
{
var audio = document.getElementById("mySoundClip3"); audio.play();
audio.play();
}
}
}

//Mei
function playclip4() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all)
   {
  document.all.sound.src = "Mei-ult.mp3";
 }
}

  else {
{
var audio = document.getElementById("mySoundClip4"); audio.play();
audio.play();
}
}
}
//Mercy
function playclip5() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all)
   {
  document.all.sound.src = "Mercy-ult.mp3";
 }
}

  else {
{
var audio = document.getElementById("mySoundClip5"); audio.play();
audio.play();
}
}
}
//Mei gif
function playclip6() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all)
   {
  document.all.sound.src = "Mei-setup.mp3";
 }
}

  else {
{
var audio = document.getElementById("mySoundClip6"); audio.play();
audio.play();
}
}
}
//Ana
function playclip7() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all)
   {
  document.all.sound.src = "Ana-ult.mp3";
 }
}

  else {
{
var audio = document.getElementById("mySoundClip7"); audio.play();
audio.play();
}
}
}
//Zenyatta
function playclip8() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all)
   {
  document.all.sound.src = "Zenyatta-ult.mp3";
 }
}

  else {
{
var audio = document.getElementById("mySoundClip8"); audio.play();
audio.play();
}
}
}
//Swoosh
function playclip9() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
    if (document.all)
   {
  document.all.sound.src = "swoosh.mp3";
 }
}

  else {
{
var audio = document.getElementById("mySoundClip9"); audio.play();
audio.play();
}
}
}
//Lower Background Music
function setLowVolume() {
    var myAudio = document.getElementById("audio1");
    myAudio.volume = 0.10;
}
function setMidVolume() {
    var myAudio = document.getElementById("audio1");
    myAudio.volume = 0.50;
}
// *** TO BE CUSTOMISED ***

var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;
var style_domain = "thesitewizard.com" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// https://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie( style_cookie_name, css_title,
      style_cookie_duration, style_domain );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
    // https://www.thesitewizard.com/javascripts/cookies.shtml
    var cookie_string = document.cookie ;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match (
                        '(^|;)[\s]*' +
                        cookie_name +
                        '=([^;]*)' );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}
