export default function ipLocation(ip : string) {

  var httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', 'http://ip-api.com/json/'+ip+'?lang=zh-CN', false);
  httpRequest.send();
  if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    let a = JSON.parse(httpRequest.responseText);
    return a.city + a.regionName;
  }else
    return '地球';
}
