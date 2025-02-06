var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_trail_buffer_1 = new ol.format.GeoJSON();
var features_trail_buffer_1 = format_trail_buffer_1.readFeatures(json_trail_buffer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trail_buffer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trail_buffer_1.addFeatures(features_trail_buffer_1);
var lyr_trail_buffer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trail_buffer_1, 
                style: style_trail_buffer_1,
                popuplayertitle: 'trail_buffer',
                interactive: true,
                title: '<img src="styles/legend/trail_buffer_1.png" /> trail_buffer'
            });

lyr_EsriStreet_0.setVisible(true);lyr_trail_buffer_1.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_trail_buffer_1];
lyr_trail_buffer_1.set('fieldAliases', {'Id': 'Id', });
lyr_trail_buffer_1.set('fieldImages', {'Id': 'Range', });
lyr_trail_buffer_1.set('fieldLabels', {'Id': 'no label', });
lyr_trail_buffer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});