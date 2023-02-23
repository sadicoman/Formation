const controller = new ScrollMagic.Controller();

$('.projet').each(function(){

    let overlay = $(this).find('.overlay');
    let projetInfo = $(this).find('.projet-info');
    let smallTitle = $(this).find('.small-title');
    let projetLink = $(this).find('.projet-link');
    let title = $(this).find('h4');

    let TL = new TimelineMax();

    // to, fromto, from

    TL
    .fromTo(overlay, 2, {skewX: 30, scale: 1.5}, {skewX: 0, xPercent:100, transformOrigin: "0% 100%", ease: Power4.easeOut})
    .from(projetInfo, 1, {scaleY: 0, transformOrigin: "bottom left"}, "-=1.5")
    .from(smallTitle, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=0.8")
    .from(projetLink, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=0.8")
    .from(title, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=0.8");

    let scene = new ScrollMagic.Scene({
        triggerElement: this
    })
    .addIndicators()
    .setTween(TL)
    .reverse(false)
    .addTo(controller);

    

})