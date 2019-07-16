function initMap() {
    const loc = { lat: 40.712776, lng: -74.005974 };
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    const marker = new google.maps.Marker({ position: loc, map: map });
}

// smooth scrolling 
$('#navbar a, .btn').on('click', function(event) {
    if (this.hasd !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top - 100
         },
         100
        );
    }
});