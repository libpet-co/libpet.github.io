var scene = $( '.c-scene' );

// Initialise the scrollmagic controller
var scrollMagicController = new ScrollMagic.Controller({
    globalSceneOptions:
    {
        triggerHook: 'onLeave'
    }
});

// Loop through each scene and create a new
// scrollmagic scene for each one
scene.each( function() 
{
    var scene = new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin( this )
    .addTo( scrollMagicController )
    // .addIndicators()
    .setClassToggle( scene, 'is-active' )
});