/*!
* Start Bootstrap - Creative v6.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Magnific popup calls
    $('#portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict




// 追加したエフェクト

$(function() {
  // ↓windowがスクロールされた時に実行する処理
  $(window).scroll(function() {
    // ↓複数のオブジェクトに対して繰り返し処理を行う
    $(".scroll-block").each(function() {
      // ↓要素が画面上に表示されたかどうかを判定させる変数を定義----------
      var scroll = $(window).scrollTop(); // 画面トップからのスクロール量
      var blockPosition = $(this).offset().top; // 画面トップから見たブロックのある位置
      var windowHeihgt = $(window).height(); // ウィンドウの高さ
      // ↓if式で計算する流れ----------
      // 手順① 表示させたいブロックの位置している高さ - ウィンドウの高さ
      // 手順② スクロール量が①より多くなった時＝要素が画面上に表示されたと認識
      // 手順③ 要素に「blockIn」クラスを付与。動きはCSSで制御。
      if (scroll > blockPosition - windowHeihgt + 300) {
        $(this).addClass("blockIn");
      }
    });
  });
});
