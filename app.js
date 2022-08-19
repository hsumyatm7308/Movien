// for nav 
$(document).ready(function() {

    $('#baricon').click(function() {
        $('#nav').toggle();
        $("#nav").css("visibility", "visible");
    })

    $("#home").click(function() {
        $("#ol").toggle();
        $("#ol").css("visibility", "visible");
    })
})

// start carousel
var getinner = document.getElementsByClassName('carousel-inners')
var getcarousels = document.getElementsByClassName('carousel-items')
console.log(getcarousels.length)
var getprev = document.getElementById('prev');
// console.log(getprev)
var getnext = document.getElementById('next');

var currvalue = 1;

// for next 
getnext.addEventListener('click', function() {
    carousel(currvalue += 1)
})

// for prev 
getprev.addEventListener('click', function() {
    carousel(currvalue -= 1)
})


function carousel(abc) {
    // console.log(abc);
    for (var x = 0; x < getcarousels.length; x++) {
        getcarousels[x].style.opacity = '0';
    }

    if (abc > getcarousels.length) {
        currvalue = 1;
    } else if (abc < 1) {
        currvalue = getcarousels.length;

    }

    console.log(currvalue)

    getcarousels[currvalue - 1].style.opacity = "1";
}

carousel(currvalue);

// end carousel





// start login 
$(document).ready(function() {

    var getattr = $('#password').attr('type');
    var getpw = document.getElementById('pw');
    var getcpw = document.getElementById('cpw')

    $(getpw).click(function() {
        // console.log('helo')
        if (getattr === 'password') {
            // console.log('hello')
            getattr = 'text';
            $(getpw).html(`<i class="fa-solid fa-lock-open"></i>`)
        } else {
            getattr = 'password'
            $(getpw).html(`<i class="fa-solid fa-lock" ></i>`)
        }
        $('#password').attr("type", getattr);
    })

    $(getcpw).click(function() {
        if (getattr === 'password') {
            getattr = 'text';
            $(getcpw).html(`<i class="fa-solid fa-lock-open"></i>`)
        } else {
            getattr = 'password'
            $(getcpw).html(`<i class="fa-solid fa-lock" ></i>`)
        }
        $("#compassword").attr("type", getattr)
    })

    // password match 
    $("#compassword").on('keyup', function() {
        let psw = $('#password').val();
        let compw = $('#compassword').val();
        if (compw != psw) {
            $("#space").html("password does not match!!");
        } else {
            $("#space").html("password match")
        }
    })

    $("#logbtn").click(function() {
        $('#login').css("display", "block")
    })

    $('#reset').click(function() {
        $('#login').css("display", "none")
    })


})


// end login