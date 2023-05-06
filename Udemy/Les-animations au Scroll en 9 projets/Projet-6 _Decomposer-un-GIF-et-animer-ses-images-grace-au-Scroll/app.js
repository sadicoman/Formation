const viewer = document.querySelector('.viewer');
const nbFrames = 14;
const decalage = 100;

// création du controller
const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 0,
        reverse: true
    }
})

// creation de la scene épinglée
new ScrollMagic.Scene({
    triggerElement: '#sticky',
    duration: (nbFrames * decalage) + 'px'
})
.setPin('#sticky')
.addIndicators()
.addTo(controller);

// for loop pour créer toutes les scenes
for ( var i = 1; i <= nbFrames; i++) {
    new ScrollMagic.Scene({
        triggerElement: '#sticky',
        offset: i * decalage
    })
    .setClassToggle(viewer, 'frame' + i)
    .addIndicators()
    .addTo(controller);
}