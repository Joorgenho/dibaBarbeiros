function inicializar() {
    var coordenadas = {lat: -30.044063, lng: -51.126213};
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 15,
    center: coordenadas 
});
    var marker = new google.maps.Marker({
    position: coordenadas,
    map: mapa,
    title: 'Meu marcador'
});
}
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD2uXIs9lv9xePOyVzG-62t7rNiMvyKjOE&callback=inicializar">
</script>