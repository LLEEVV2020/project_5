

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
  

  
    VizovStart();
  
