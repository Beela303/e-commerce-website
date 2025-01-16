$(document).ready(function(){
    $("#img-slide").owlCarousel({  
        autoPlay: 3000, //Set AutoPlay to 3 seconds
    
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        itemsTablet: [768,2],
        itemsTabletSmall: [500, 2],	
        itemsMobile: [479,1]
    });

    $("#open-menu-btn").click(function() {
        $("#menu").css("display", "block")
        $("#open-menu-btn").css("display", "none")
        $("#close-menu-btn").css("display", "block")
        $(".slidershow").css("display", "none")
    })
    $("#close-menu-btn").click(function() {
        $("#menu").css("display", "none")
        $("#open-menu-btn").css("display", "block")
        $("#close-menu-btn").css("display", "none")
        $(".slidershow").css("display", "block")
    })
    
    /*window.matchMedia("(min-width: 1025px)").matches;{
        $("#menu").css("display", "none")
    }*/

    /*========================== THEMES =============================*/
    $("#light-theme").css("display", "none");
    if ($("#dark-theme").css("display", "block")) {
        $("#dark-theme").click(function() {
            $("#dark-theme").css("display", "none")
            $("#light-theme").css("display", "block")
        })
    } else ($("#dark-theme").css("display", "none"));{
        $("#light-theme").click(function() {
            $("#light-theme").css("display", "none")
            $("#dark-theme").css("display", "block")
        })
    }
    
    /*$("#light-theme").css("display", "block");
    if ($("#dark-theme").css("display", "none")) {
        $("#dark-theme").click(function() {
            $("#dark-theme").css("display", "block")
            $("#light-theme").css("display", "none")
        })
    } else ($("#dark-theme").css("display", "block"));{
        $("#light-theme").click(function() {
            $("#light-theme").css("display", "block")
            $("#dark-theme").css("display", "none")
        })
    }*/
    
    let themeSwitches = document.getElementsByClassName('themeswitch')
    let style = localStorage.getItem('style')
    
    if (style == null) {
        setTheme('dark');
    } else {
        setTheme(style);
    }
    
    for (let i of themeSwitches){
        i.addEventListener('click', function() {
            let theme = this.dataset.theme;
            setTheme(theme);
        })
    }
    
    function setTheme(theme){
        if (theme == 'light'){
            document.getElementById('theme-style').href = './themes/light.css'
        } else if (theme == 'dark'){
            document.getElementById('theme-style').href = './themes/dark.css'  
        }
        localStorage.setItem('style', theme);
    }
    
    /*========================== SCROLL TO TOP =============================*/
    scrollToTopBtn = document.getElementById("scroll-to-top");
    
    window.onscroll = function(){scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }
        
        var rootElement = document.documentElement;
        
        function scrollToTop() {
            rootElement.scrollTo({
                top:0,
                behavior: "smooth"
            });
        }
        
        scrollToTopBtn.addEventListener("click", scrollToTop);
})
  
/*================================== PORTFOLIO SWIPER ====================*/
let swiperPortfolio = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*================================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});

$("#open-close-desc").click(function() {
    $("#description").toggle()
})

//js for product gallery

var ProductImg = document.getElementById("img-header");
var Smallimg = document.getElementsByClassName("header-img-list");

Smallimg[0].onclick = function(){
	ProductImg.src = Smallimg[0].src;
}

Smallimg[1].onclick = function(){
	ProductImg.src = Smallimg[1].src;
}

Smallimg[2].onclick = function(){
	ProductImg.src = Smallimg[2].src;
}

Smallimg[3].onclick = function(){
	ProductImg.src = Smallimg[3].src;
}

Smallimg[4].onclick = function(){
	ProductImg.src = Smallimg[4].src;
}

Smallimg[5].onclick = function(){
	ProductImg.src = Smallimg[5].src;
}

Smallimg[6].onclick = function(){
	ProductImg.src = Smallimg[6].src;
}

Smallimg[7].onclick = function(){
	ProductImg.src = Smallimg[7].src;
}

Smallimg[8].onclick = function(){
	ProductImg.src = Smallimg[8].src;
}

Smallimg[9].onclick = function(){
	ProductImg.src = Smallimg[9].src;
}

Smallimg[10].onclick = function(){
	ProductImg.src = Smallimg[10].src;
}

Smallimg[11].onclick = function(){
	ProductImg.src = Smallimg[11].src;
}

Smallimg[12].onclick = function(){
	ProductImg.src = Smallimg[12].src;
}

Smallimg[13].onclick = function(){
	ProductImg.src = Smallimg[13].src;
}

Smallimg[14].onclick = function(){
	ProductImg.src = Smallimg[14].src;
}

Smallimg[15].onclick = function(){
	ProductImg.src = Smallimg[15].src;
}

Smallimg[16].onclick = function(){
	ProductImg.src = Smallimg[16].src;
}

Smallimg[17].onclick = function(){
	ProductImg.src = Smallimg[17].src;
}

Smallimg[18].onclick = function(){
	ProductImg.src = Smallimg[18].src;
}

Smallimg[19].onclick = function(){
	ProductImg.src = Smallimg[19].src;
}

Smallimg[20].onclick = function(){
	ProductImg.src = Smallimg[20].src;
}
