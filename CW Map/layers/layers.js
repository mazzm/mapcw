var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CWAffiliatesFormerCWAffiliatesFormer_1 = new ol.format.GeoJSON();
var features_CWAffiliatesFormerCWAffiliatesFormer_1 = format_CWAffiliatesFormerCWAffiliatesFormer_1.readFeatures(json_CWAffiliatesFormerCWAffiliatesFormer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CWAffiliatesFormerCWAffiliatesFormer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CWAffiliatesFormerCWAffiliatesFormer_1.addFeatures(features_CWAffiliatesFormerCWAffiliatesFormer_1);
var lyr_CWAffiliatesFormerCWAffiliatesFormer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CWAffiliatesFormerCWAffiliatesFormer_1, 
                style: style_CWAffiliatesFormerCWAffiliatesFormer_1,
                interactive: true,
                title: '<img src="styles/legend/CWAffiliatesFormerCWAffiliatesFormer_1.png" /> CW Affiliates Former - CW Affiliates Former'
            });
var format_CWAffiliatesCurrent2CWAffiliatesCurrent2_2 = new ol.format.GeoJSON();
var features_CWAffiliatesCurrent2CWAffiliatesCurrent2_2 = format_CWAffiliatesCurrent2CWAffiliatesCurrent2_2.readFeatures(json_CWAffiliatesCurrent2CWAffiliatesCurrent2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CWAffiliatesCurrent2CWAffiliatesCurrent2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CWAffiliatesCurrent2CWAffiliatesCurrent2_2.addFeatures(features_CWAffiliatesCurrent2CWAffiliatesCurrent2_2);
var lyr_CWAffiliatesCurrent2CWAffiliatesCurrent2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CWAffiliatesCurrent2CWAffiliatesCurrent2_2, 
                style: style_CWAffiliatesCurrent2CWAffiliatesCurrent2_2,
                interactive: true,
                title: '<img src="styles/legend/CWAffiliatesCurrent2CWAffiliatesCurrent2_2.png" /> CW Affiliates Current-2 - CW Affiliates Current-2'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_CWAffiliatesFormerCWAffiliatesFormer_1,lyr_CWAffiliatesCurrent2CWAffiliatesCurrent2_2,],
                                title: "group1"});

lyr_OpenStreetMap_0.setVisible(true);lyr_CWAffiliatesFormerCWAffiliatesFormer_1.setVisible(true);lyr_CWAffiliatesCurrent2CWAffiliatesCurrent2_2.setVisible(true);
var layersList = [group_group1];
lyr_CWAffiliatesFormerCWAffiliatesFormer_1.set('fieldAliases', {'City of license / Market': 'City of license / Market', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Station': 'Station', });
lyr_CWAffiliatesCurrent2CWAffiliatesCurrent2_2.set('fieldAliases', {'City of license / Market': 'City of license / Market', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Station': 'Station', });
lyr_CWAffiliatesFormerCWAffiliatesFormer_1.set('fieldImages', {'City of license / Market': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Station': 'TextEdit', });
lyr_CWAffiliatesCurrent2CWAffiliatesCurrent2_2.set('fieldImages', {'City of license / Market': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Station': 'TextEdit', });
lyr_CWAffiliatesFormerCWAffiliatesFormer_1.set('fieldLabels', {});
lyr_CWAffiliatesCurrent2CWAffiliatesCurrent2_2.set('fieldLabels', {});
lyr_CWAffiliatesCurrent2CWAffiliatesCurrent2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});