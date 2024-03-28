$('nav div').click(function () {
    $('nav div a').removeClass('on')
    $(this).find('a').addClass('on')

    let index = $(this).index()
    for (let i = 0; i < 6; i++) {
        $('#cube').removeClass('cube' + i)
    }
    $('#cube').addClass('cube' + index)

    for (let i = 0; i < 6; i++) {
        $('.title').removeClass('t' + i)
    }
    $('.title').addClass('t' + index)

    $('.text .t-in').removeClass('on')
    $('.text .t-in').eq(index).addClass('on')
})
