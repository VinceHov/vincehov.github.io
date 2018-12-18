document.write("<script type=\"text/javascript\" src=\"/js/tipsy-master/jquery.tipsy.js\"></script>"); 

/* Дядя Больжедор бегин */

var httpRequest = createHttpRequest();
var result = '';

function sendRequest(file, _result, getRequestProc) {
  result = _result;
  document.getElementById(result).innerHTML = 'Загрузка... <img src="/images/loadings.gif">';
  httpRequest.open('POST', file, true);
  httpRequest.onreadystatechange = getRequest;
  httpRequest.send(null);
}


function getRequest() {
  if (httpRequest.readyState == 4) {   
    if (httpRequest.status == 200) {
      document.getElementById(result).innerHTML = httpRequest.responseText;
    }}
  }

  function showContent(link, idBody) {    
    var contentBody=idBody;
    var cont = document.getElementById(contentBody);  
    var loading = document.getElementById('loading');  
    cont.innerHTML = loading.innerHTML;    
    var http = createHttpRequest();  
    if( http )   
    {  
      http.open('get', link);  
      http.onreadystatechange = function ()   
      {  
        if(http.readyState == 4)  {  cont.innerHTML = http.responseText; }  
      }  
      http.send(null);      
    }  
    else  {    document.location = link;   }  
  } 


  function createHttpRequest()
  {
    if (window.XMLHttpRequest) {
      try {
        return new XMLHttpRequest();
      } catch (e){}
    } else if (window.ActiveXObject) {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP');
      } catch (e){
        try {
          return new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e){}
      }
    }
    return null;
  }

/* Дядя Больжедор аниме копнул */

/*************** Копипаста дефенс бегин ******************/
function AddCopy() {
  var e;
  window.getSelection ? e = window.getSelection() : document.getSelection ? e = document.getSelection() : document.selection && (e = document.selection.createRange());
  var t = e.toString().replace(/(?:\r\n|\r|\n)/g, "<br />") + "<br /><br />Источник: <a href='"+document.location.href+"'>" + document.location.href +"</a><br />Спиздил — ставь копирайт. Не знаешь чьё — не пости. Не поставил — пидорас.<br/>13 заповедей интернета ©",
  i = document.createElement("div"),
  n = document.getElementsByTagName("body")[0];
  i.style.position = "absolute", i.style.left = "-99999px", n.appendChild(i), i.innerHTML = t, e.selectAllChildren(i), window.setTimeout(function() {
    n.removeChild(i)
  }, 0)
} 
// document.oncopy = AddCopy;

/*************** Копипаста дефенс эндинг ******************/


function rubrics(x)
{
  if (x==1) { document.getElementById('A1').style.display = 'block'; document.getElementById('A2').style.display = 'none';  document.getElementById('A3').style.display = 'none';  document.getElementById('A4').style.display = 'none';  } 
  if (x==2) { document.getElementById('A1').style.display = 'none'; document.getElementById('A2').style.display = 'block';  document.getElementById('A3').style.display = 'none'; document.getElementById('A4').style.display = 'none';   } 
  if (x==3) { document.getElementById('A1').style.display = 'none'; document.getElementById('A2').style.display = 'none';  document.getElementById('A3').style.display = 'block';  document.getElementById('A4').style.display = 'block'; } 
}




var OBJ;
function MyFuncClick(x)
{
  var WallAdd = 'WallAdd' + x;
  var t = document.getElementById(WallAdd);  
  var FormAddWall = document.getElementById('FormAddWall').innerHTML;
  document.getElementById(WallAdd).innerHTML = FormAddWall;  
  document.getElementById('parent').value = x; 
  if (OBJ != t)  { if (OBJ) OBJ.style.display = 'none';    t.style.display = 'block';  OBJ = t;    }
  else {t.style.display = 'none'; OBJ = null}
} 


function formatAll()
{
    var name_reed = document.getElementById('name');
    var info_reed = document.getElementById('info');
    var pic_file = document.getElementById('pic').value;
      var picrush;
      var reg=/.jpg|.jpeg|.gif|.png|.rar|.zip|pdf|doc/i;
      var result=reg.test(pic_file) ? picrush=1 : picrush=2
        if ((pic_file!='') && (picrush!='1')) {  document.getElementById('pic').value=''; alert ('Формат файла должен быть .jpg .png .gif  .rar  .zip  pdf или doc');  }
        var btn = document.getElementById('btn');
        if ((name_reed.value != '')  && (info_reed.value!= '') ) { btn.disabled = false; } else { btn.disabled = true; }
}

function formatIMG(x)
{
    var pic='pic' + x;
    var pic_file = document.getElementById(pic).value;
    var picrush;
    var reg=/.jpg|.jpeg|.gif|.png/i;
    var result=reg.test(pic_file) ? picrush=1 : picrush=2
    if ((pic_file!='') && (picrush!='1')) {  document.getElementById(pic).value=''; alert ('Формат рисунка должен быть .jpg  .gif или .png');  }
}

