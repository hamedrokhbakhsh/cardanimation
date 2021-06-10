$(document).ready(() => {

    $(".menu").click(() => {
        $(".navbar").toggleClass("change");
        $(".menu").toggleClass("change");
    })


    var video = $(".video");


    var videoBar = $(".video-bar");
    var barVid ;

    video.on("timeupdate", event => {
        barVid =  video.get(0).currentTime / video.get(0).duration  * 100 ;
        videoBar.css("width", barVid+"%")
        console.log(barVid);

    })
    video.on("ended", () => {
        btn.removeClass("fa-pause-circle");
        btn.addClass("fa-play-circle");

        video.css("opacity", ".3");
    })
    var btn = $(".button i").click(() => {
            videoPlayPouse();

    });
    var bar = $(".video-bar");


    const videoPlayPouse = () => {
        if (video.get(0).paused){
            video.trigger('play');
            btn.removeClass("fa-play-circle");
            btn.addClass("fa-pause-circle");
            video.css("opacity", "1");

        }else {
            video.trigger('pause');
            btn.removeClass("fa-pause-circle");
            btn.addClass("fa-play-circle");
            video.css("opacity", ".3");
        }
    }
});

//section 3
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 180,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    },
    loop: false
});
