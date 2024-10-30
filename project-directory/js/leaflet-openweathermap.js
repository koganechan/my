L.OWM = L.TileLayer.extend({
    initialize: function (options) {
        L.Util.setOptions(this, options);
    },
    options: {
        appId: 'YOUR_API_KEY',  // Replace with your actual API key
        showLegend: true,
        opacity: 0.5
    }
});
