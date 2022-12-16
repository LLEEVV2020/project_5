

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

    if(promocode_5paket === null){
        getElement2('https://base.x5quest.ru/api/extradition?name=QKCDNJG', '', function(element) {
            //console.log(element);
            localStorage.setItem('promocode_5paket', JSON.stringify(element));
        });
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



