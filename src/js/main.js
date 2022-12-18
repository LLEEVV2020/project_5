

function getElement2(url, selector, c) {
    request(new XMLHttpRequest());

    function request(xhr) {
        xhr.open('GET', '' + url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    html = document.createElement('div');
                    html.innerHTML = xhr.responseText;
                    let text =  xhr.responseText;


                    var str = xhr.responseText;
                    if(str.length < 20 && selector === ""){
                        c(text);
                    }


                   // if(selector === ""){
                        //c(html.querySelector(selector));
                        //c(html);
                        //c(text);
                    //}

                }
            }
        }
    }
  }



  function promoCode (){

    let promocode_5paket = localStorage.getItem('promocode_5paket');

    if (promocode_5paket === "null"){
        promocode_5paket = null
    }

    let getAll = getAllUrlParams().pin; // '0000'

    if(promocode_5paket === null){
        getElement2('https://base.x5quest.ru/api/extradition?name=QKCDNJG', '', function(element) {
            //console.log(element);
            localStorage.setItem('promocode_5paket', JSON.stringify(element));
        });


        //console.log(getAll);
        localStorage.setItem('5paket_pin_1', getAll);

        var storedСodearr = JSON.parse(localStorage.getItem("codearr"));
        for (let i = 0; i < storedСodearr.length; i++ ) {
          if(storedСodearr[i] === getAll && getAll.length !== 0){

            storedСodearr[i] = "";
            localStorage.setItem("codearr", JSON.stringify(storedСodearr));
            return;
          }
        }
      }



    let codearritem = localStorage.getItem('codearr');

    if (codearritem === "null"){
        codearritem = null
    }

    if(codearritem === null){

        var codearr = [];
        codearr[0] = "4529";
        codearr[1] = "9163";
        codearr[2] = "8437";
        codearr[3] = "0375";
        codearr[4] = "4826";
        localStorage.setItem("codearr", JSON.stringify(codearr));

    }

    //localStorage.removeItem('name1_paket');

    //let zapisatsa  = document.querySelector('.seats-10-00');
    //zapisatsa.dataset.value = element.innerHTML;


  }
  promoCode();






// ИНПУТ С одной цифрой
    let input_cifri = document.querySelectorAll('.cifri-input');

    if(input_cifri !== null){

        for (let input of input_cifri) {

            input.addEventListener('keydown', function(event) {
                // Разрешаем: backspace, delete, tab и escape
                if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                    // Разрешаем: Ctrl+A
                    (event.keyCode == 65 && event.ctrlKey === true) ||
                    // Разрешаем: home, end, влево, вправо
                    (event.keyCode >= 35 && event.keyCode <= 39)) {

                    // Ничего не делаем
                    return;
                } else {
                    // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
                    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                        event.preventDefault();
                    }
                }
            });

        }

    }


function getAllUrlParams(url) {

    // извлекаем строку из URL или объекта window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // объект для хранения параметров
    var obj = {};

    // если есть строка запроса
    if (queryString) {

        // данные после знака # будут опущены
        queryString = queryString.split('#')[0];

        // разделяем параметры
        var arr = queryString.split('&');

        for (var i=0; i<arr.length; i++) {
        // разделяем параметр на ключ => значение
        var a = arr[i].split('=');

        // обработка данных вида: list[]=thing1&list[]=thing2
        var paramNum = undefined;
        var paramName = a[0].replace(/\[\d*\]/, function(v) {
            paramNum = v.slice(1,-1);
            return '';
        });

        // передача значения параметра ('true' если значение не задано)
        var paramValue = typeof(a[1])==='undefined' ? true : a[1];

        // преобразование регистра
        paramName = paramName.toLowerCase();
        paramValue = paramValue.toLowerCase();

        // если ключ параметра уже задан
        if (obj[paramName]) {
            // преобразуем текущее значение в массив
            if (typeof obj[paramName] === 'string') {
            obj[paramName] = [obj[paramName]];
            }
            // если не задан индекс...
            if (typeof paramNum === 'undefined') {
            // помещаем значение в конец массива
            obj[paramName].push(paramValue);
            }
            // если индекс задан...
            else {
            // размещаем элемент по заданному индексу
            obj[paramName][paramNum] = paramValue;
            }
        }
        // если параметр не задан, делаем это вручную
        else {
            obj[paramName] = paramValue;
        }
        }
    }

    return obj;
}





window.onresize = function (event) {
    applyOrientation();
}

function applyOrientation() {
    if (window.innerHeight > window.innerWidth) {
        //You are now in portrait
    } else {
    //You are now in landscape
    }
}

new WOW().init();

