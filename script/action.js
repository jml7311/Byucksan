$(document).ready(function () {
    let rollingNumber = 0;

    $('#section1 li').mouseenter(function () {
        clearInterval(autoRolling)
        rollingNumber = $(this).index()

        $(this).addClass('on').siblings().removeClass('on');

        let imgSrc = $(this).find('figure img').attr('src');
        let h3Text = $(this).find('h3').text();
        let cateText = $(this).find('.cate').text();

        $('.big_img img').attr('src', imgSrc);
        $('.big_img img').hide()
        $('.big_img img').fadeIn()


        $('.big_img').removeClass('on')

        setTimeout(function () {
            $('.big_img').addClass('on')
            $('.big_img .text strong').text(h3Text)
            $('.big_img .text .cate').text(cateText)
        }, 500)
    });

    $('#section1 li').mouseleave(function () {
        autoRolling = setInterval(imgRolling, 2000)
    })



    // let imgRolling = setInterval(함수, 시간)

    // clearInterval(imgRolling)

    let autoRolling = setInterval(imgRolling, 3000)

    function imgRolling() {
        rollingNumber++
        if (rollingNumber >= 4) {
            rollingNumber = 0
        }

        $('.small_img li').eq(rollingNumber).addClass('on').siblings().removeClass('on');

        let imgSrc = $('.small_img li').eq(rollingNumber).find('figure img').attr('src');
        let h3Text = $('.small_img li').eq(rollingNumber).find('h3').text();
        let cateText = $('.small_img li').eq(rollingNumber).find('.cate').text();

        $('.big_img img').attr('src', imgSrc)
        $('.big_img img').hide()
        $('.big_img img').fadeIn()


        $('.big_img').removeClass('on')

        setTimeout(function () {
            $('.big_img').addClass('on')
            $('.big_img .text strong').text(h3Text)
            $('.big_img .text .cate').text(cateText)
        }, 500)
    }


    // 이름 별표하기

    // $('#section3 .content .name').each(function () {
    //     let name = $(this).text(); //박경태
    //     let nameComp = name.substr(0, 1) + '*' + name.substr(2, 1)

    //     $(this).text(nameComp)

    // })



    $('.floating_menu a').click(function () {
        let target = $(this).attr('href');
        let targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos }, 500);
    })

    // $(window).scroll(function () {
    //     let scrollTop = $(this).scrollTop();
    //     let sec1Top = $('#section1').offset().top;
    //     let sec2Top = $('#section2').offset().top;
    //     let sec3Top = $('#section3').offset().top;
    //     let winH = $(window).height();


    //     if (scrollTop >= sec1Top - winH / 4) {
    //         $('.floating_menu a').removeClass('on');
    //         $('.floating_menu a[href="#section1"]').addClass('on');
    //     } else {
    //         $('.floating_menu a').removeClass('on');

    //     }

    //     if (scrollTop >= sec2Top - winH / 4) {
    //         $('.floating_menu a').removeClass('on');
    //         $('.floating_menu a[href="#section2"]').addClass('on');
    //     }
    //     if (scrollTop >= sec3Top - winH / 4) {
    //         $('.floating_menu a').removeClass('on');
    //         $('.floating_menu a[href="#section3"]').addClass('on');
    //     }
    // })

    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        let winH = $(window).height();
        $('.floating_menu a').removeClass('on');

        $('.floating_menu a').not('[href="#visualbox"]').each(function () {
            let target = $(this).attr('href')
            let targetPos = $(target).offset().top;

            if (scrollTop >= targetPos - winH / 4) {
                $('.floating_menu a').removeClass('on');
                $(this).addClass('on');
            }
        })

    })
})