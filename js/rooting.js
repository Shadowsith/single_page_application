$(document).ready(function() {
    var cl = new ContentLoader(); 
    $("#home").click(function() {
        cl.getContent('home');
    });

    $("#about").click(function() {
        cl.getContent('about'); 
    });
    cl.getCookie();
});


class ContentLoader {

    constructor() {
        this.rooting = 'php/rooting.php'; 
    }

    getContent(content) {
        this.setCookie(content); 
        switch(content) {
            case 'home':
                $('#nav_'+content).addClass('.active'); 
                this.load(content);
                break; 

            case 'about':
                $('#nav_'+content).addClass('.active'); 
                this.load(content); 
                break;

            default: break;
        }
    }

    load(content) {
        $.ajax({    
            url: this.rooting,
            type: 'GET',
            data: {'content': content},
            dataType: 'html', 
            success: function(response) {
                if (response != '\n') {
                    $("#content").html(response); 
                }
            },
            error: function(xhr, status, error) {
                $("#content").html(xhr.responseText); 
            }
        }); 
    }

    getCookie() {
        this.load(localStorage.getItem('spa_lastsite'));
    }

    setCookie(site) {
        localStorage.setItem('spa_lastsite', site); 
    }
}
