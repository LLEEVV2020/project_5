

function getElement(url, selector, c) {
    request(new XMLHttpRequest());

    function request(xhr) {
        xhr.open('GET', '' + url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    html = document.createElement('div');
                    html.innerHTML = xhr.responseText;
                    c(html.querySelector(selector));
                }
            }
        }
    }
  }


  function VizovStart(){


    getElement('http://like-minded.somee.com/PromoCode/api/QRGeneration?sringQR=QK21509', 'body', function(element) {
      console.log(element);
      let zapisatsa  = document.querySelector('.seats-10-00');
      zapisatsa.dataset.value = element.innerHTML;
    });

    /*getElement('https://pro-dex.ru/1.php', '.question-hyperlink2', function(element) {
        //console.log(element.innerHTML);
        let zapisatsa  = document.querySelector('.seats-11-15');
        zapisatsa.dataset.value = element.innerHTML;
    });

    getElement('https://pro-dex.ru/1.php', '.question-hyperlink3', function(element) {
      console.log(element);
    });*/

  }

    //VizovStart();


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

