/**
 * GIBS Web Examples
 *
 * Copyright 2013 - 2014 United States Government as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 * All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

$(function() {

    var geojsonObject = {};

    var eonet_cat = "6";
    var eonet_day_range = "180";

    // Keep track of whether user wants to see these
    var base_layer_enabled = true;
    var coastline_enabled = false;
    var labels_enabled = false;
    var grid_enabled = false;

    var nasa_layer_name = "VIIRS_SNPP_CorrectedReflectance_TrueColor";
    var nasa_layer_format = "image/jpeg";
    var nasa_layer_matrix_set = "EPSG4326_250m";

    var fmt_hash = new Object();
    fmt_hash['MODIS_Terra_CorrectedReflectance_TrueColor'] = "image/jpeg";
    fmt_hash['AIRS_CO_Total_Column_Day'] = "image/png";
    fmt_hash['AIRS_CO_Total_Column_Night'] = "image/png";
    fmt_hash['AIRS_Dust_Score_Ocean_Day'] = "image/png";
    fmt_hash['AIRS_Dust_Score_Ocean_Night'] = "image/png";
    fmt_hash['AIRS_Prata_SO2_Index_Day'] = "image/png";
    fmt_hash['AIRS_Prata_SO2_Index_Night'] = "image/png";
    fmt_hash['AIRS_Precipitation_Day'] = "image/png";
    fmt_hash['AIRS_Precipitation_Night'] = "image/png";
    fmt_hash['MODIS_Aqua_Aerosol'] = "image/png";
    fmt_hash['MODIS_Aqua_Brightness_Temp_Band31_Day'] = "image/png";
    fmt_hash['MODIS_Aqua_Brightness_Temp_Band31_Night'] = "image/png";
    fmt_hash['MODIS_Aqua_Chlorophyll_A'] = "image/png";
    fmt_hash['MODIS_Aqua_CorrectedReflectance_TrueColor'] = "image/jpeg";
    fmt_hash['MODIS_Aqua_Land_Surface_Temp_Day'] = "image/png";
    fmt_hash['MODIS_Aqua_Land_Surface_Temp_Night'] = "image/png";
    fmt_hash['MODIS_Aqua_Sea_Ice'] = "image/png";
    fmt_hash['MODIS_Aqua_SurfaceReflectance_Bands121'] = "image/jpeg";
    fmt_hash['MODIS_Terra_Water_Vapor_5km_Day'] = "image/png";
    fmt_hash['MODIS_Terra_Water_Vapor_5km_Night'] = "image/png";
    fmt_hash['MODIS_Water_Mask'] = "image/png";
    fmt_hash['OMI_SO2_Lower_Troposphere'] = "image/png";
    fmt_hash['OMI_SO2_Middle_Troposphere'] = "image/png";
    fmt_hash['OMI_SO2_Upper_Troposphere_and_Stratosphere'] = "image/png";
    fmt_hash['VIIRS_SNPP_CorrectedReflectance_BandsM11-I2-I1'] = "image/jpeg";
    fmt_hash['VIIRS_SNPP_CorrectedReflectance_BandsM3-I3-M11'] = "image/jpeg";
    fmt_hash['VIIRS_SNPP_CorrectedReflectance_TrueColor'] = "image/jpeg";


    var matrix_hash = new Object();
    matrix_hash['MODIS_Terra_CorrectedReflectance_TrueColor'] = "EPSG4326_250m";
    matrix_hash['AIRS_CO_Total_Column_Day'] = "EPSG4326_2km";
    matrix_hash['AIRS_CO_Total_Column_Night'] = "EPSG4326_2km";
    matrix_hash['AIRS_Dust_Score_Ocean_Day'] = "EPSG4326_2km";
    matrix_hash['AIRS_Dust_Score_Ocean_Night'] = "EPSG4326_2km";
    matrix_hash['AIRS_Prata_SO2_Index_Day'] = "EPSG4326_2km";
    matrix_hash['AIRS_Prata_SO2_Index_Night'] = "EPSG4326_2km";
    matrix_hash['AIRS_Precipitation_Day'] = "EPSG4326_2km";
    matrix_hash['AIRS_Precipitation_Night'] = "EPSG4326_2km";
    matrix_hash['MODIS_Aqua_Aerosol'] = "EPSG4326_2km";
    matrix_hash['MODIS_Aqua_Brightness_Temp_Band31_Day'] = "EPSG4326_1km";
    matrix_hash['MODIS_Aqua_Brightness_Temp_Band31_Night'] = "EPSG4326_1km";
    matrix_hash['MODIS_Aqua_Chlorophyll_A'] = "EPSG4326_1km";
    matrix_hash['MODIS_Aqua_CorrectedReflectance_TrueColor'] = "EPSG4326_250m";
    matrix_hash['MODIS_Aqua_Land_Surface_Temp_Day'] = "EPSG4326_1km";
    matrix_hash['MODIS_Aqua_Land_Surface_Temp_Night'] = "EPSG4326_1km";
    matrix_hash['MODIS_Aqua_Sea_Ice'] = "EPSG4326_1km";
    matrix_hash['MODIS_Aqua_SurfaceReflectance_Bands121'] = "EPSG4326_250m";
    matrix_hash['MODIS_Terra_Water_Vapor_5km_Day'] = "EPSG4326_2km";
    matrix_hash['MODIS_Terra_Water_Vapor_5km_Night'] = "EPSG4326_2km";
    matrix_hash['MODIS_Water_Mask'] = "EPSG4326_250m";
    matrix_hash['OMI_SO2_Lower_Troposphere'] = "EPSG4326_2km";
    matrix_hash['OMI_SO2_Middle_Troposphere'] = "EPSG4326_2km";
    matrix_hash['OMI_SO2_Upper_Troposphere_and_Stratosphere'] = "EPSG4326_2km";
    matrix_hash['VIIRS_SNPP_CorrectedReflectance_BandsM11-I2-I1'] = "EPSG4326_250m";
    matrix_hash['VIIRS_SNPP_CorrectedReflectance_BandsM3-I3-M11'] = "EPSG4326_250m";
    matrix_hash['VIIRS_SNPP_CorrectedReflectance_TrueColor'] = "EPSG4326_250m";



    // Seven day slider based off today, remember what today is
    var today = new Date();

    // Selected day to show on the map
    var day = new Date(today.getTime());

    // When the day is changed, cache previous layers. This allows already
    // loaded tiles to be used when revisiting a day. Since this is a
    // simple example, layers never "expire" from the cache.
    var cache = {};
    var cache_grid = {};
    var cache_coastlines = {};
    var cache_labels = {};

    // GIBS needs the day as a string parameter in the form of YYYY-MM-DD.
    // Date.toISOString returns YYYY-MM-DDTHH:MM:SSZ. Split at the "T" and
    // take the date which is the first part.
    var dayParameter = function() {
        return day.toISOString().split("T")[0];
    };

    var map = new ol.Map({
        view: new ol.View({
            maxResolution: 0.5625,
            projection: ol.proj.get("EPSG:4326"),
            extent: [-180, -90, 180, 90],
            center: [0, 0],
            zoom: 2,
            maxZoom: 8
        }),
        target: "map",
        renderer: ["canvas", "dom"],
    });

    var coastlineLayer = function() {
        var source = new ol.source.WMTS({
            url: "//map1{a-c}.vis.earthdata.nasa.gov/wmts-geo/wmts.cgi?TIME=" + dayParameter(),
            layer: "Coastlines",
            format: "image/png",
            matrixSet: "EPSG4326_250m",
            tileGrid: new ol.tilegrid.WMTS({
                origin: [-180, 90],
                resolutions: [
                    0.5625,
                    0.28125,
                    0.140625,
                    0.0703125,
                    0.03515625,
                    0.017578125,
                    0.0087890625,
                    0.00439453125,
                    0.002197265625
                ],
                matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                tileSize: 512
            })
        });

        var layer = new ol.layer.Tile({source: source});
        return layer;
    };

    var labelLayer = function() {
        var source = new ol.source.WMTS({
            url: "//map1{a-c}.vis.earthdata.nasa.gov/wmts-geo/wmts.cgi?TIME=" + dayParameter(),
            layer: "Reference_Labels",
            format: "image/png",
            matrixSet: "EPSG4326_250m",
            tileGrid: new ol.tilegrid.WMTS({
                origin: [-180, 90],
                resolutions: [
                    0.5625,
                    0.28125,
                    0.140625,
                    0.0703125,
                    0.03515625,
                    0.017578125,
                    0.0087890625,
                    0.00439453125,
                    0.002197265625
                ],
                matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                tileSize: 512
            })
        });

        var layer = new ol.layer.Tile({source: source});
        return layer;
    };


    var gridLayer=new ol.layer.Vector({

        source: new ol.source.Vector({

            url: 'MODIS_Grid.EPSG_4326.json',
            format: new ol.format.GeoJSON({

                defaultDataProjection :'EPSG:4326',
                projection: 'EPSG:4326'

            })

        }),
        name: 'Grids',
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: "rgba(186, 180, 152, 0.6)",
                width: 1.5
            })
        })
    });

    var eonet_layer = function() {
        var vectorSource = new ol.source.Vector({
            features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
        });


        var vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            style: styleFunction
        });
        return vectorLayer;
    }

    var update = function() {

        // Using day as the cache key, see if the layer is already
        // in the cache.

        var key = dayParameter();
        var layer = cache[key];

        // today -- use as key for grid/coastline/label layers
        // since those values shouldn't change
        var ref_layer_key = new Date(today.getTime());

        var coast_layer = cache_coastlines[ref_layer_key];
        if (!coast_layer) {
            coast_layer = coastlineLayer();
            cache_coastlines[ref_layer_key] = coast_layer;
        }

        var lbl_layer = cache_labels[ref_layer_key];
        if (!lbl_layer) {
            lbl_layer = labelLayer();
            cache_labels[ref_layer_key] = lbl_layer;
        }

        // If not, create a new layer and add it to the cache.
        if ( !layer ) {
            layer = createLayer();
            cache[key] = layer;
        }

        // There is only one layer in this example, but remove them all
        // anyway
        clearLayers();

        // Add the new layer for the selected time
        if (base_layer_enabled) {
            map.addLayer(layer);
        }

        if (coastline_enabled) {
            map.addLayer(coast_layer);
        }
        if (labels_enabled) {
            map.addLayer(lbl_layer);
        }
        if (grid_enabled) {
            map.addLayer(gridLayer);
        }

        map.addLayer(eonet_layer());

        // Update the day label
        $("#day-label").html(dayParameter());
    };

    var clearLayers = function() {
        // Get a copy of the current layer list and then remove each
        // layer.
        var activeLayers = map.getLayers().getArray();
        for ( var i = 0; i < activeLayers.length; i++ ) {
            // Need to check to see whether layer actually exists
            if (activeLayers[i]) {
                map.removeLayer(activeLayers[i]);
            }
        }
    };

    // TODO refactor to accept layer, matrixSet, and format parameters?
    var createLayer = function() {
        var source = new ol.source.WMTS({
            url: "//map1{a-c}.vis.earthdata.nasa.gov/wmts-geo/wmts.cgi?TIME=" + dayParameter(),
            layer: nasa_layer_name,
            format: nasa_layer_format,
            matrixSet: nasa_layer_matrix_set,
            tileGrid: new ol.tilegrid.WMTS({
                origin: [-180, 90],
                resolutions: [
                    0.5625,
                    0.28125,
                    0.140625,
                    0.0703125,
                    0.03515625,
                    0.017578125,
                    0.0087890625,
                    0.00439453125,
                    0.002197265625
                ],
                matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                tileSize: 512
            })
        });

        var layer = new ol.layer.Tile({source: source});
        return layer;
    };

    update();

    // Slider values are in "days from present".
    $("#day-slider").slider({
        value: 0,
        min: -100,
        max: 0,
        step: 1,
        slide: function(event, ui) {
            // Add the slider value (effectively subracting) to today's
            // date.
            var newDay = new Date(today.getTime());
            newDay.setUTCDate(today.getUTCDate() + ui.value);
            day = newDay;
            update();
        }
    });

    var base_checkbox = $("#basecheck");

    base_checkbox.change(function(event) {
        var base_checkbox = event.target;
        if (base_checkbox.checked) {
            base_layer_enabled = true;
        } else {
            base_layer_enabled = false;
        }
        update();
    });


    var grid_checkbox = $("#gridcheck");

    grid_checkbox.change(function(event) {
        var grid_checkbox = event.target;
        if (grid_checkbox.checked) {
            grid_enabled = true;
        } else {
            grid_enabled = false;
        }
        update();
    });

    var coast_checkbox = $("#coastcheck");

    coast_checkbox.change(function(event) {
        var coast_checkbox = event.target;
        if (coast_checkbox.checked) {
            coastline_enabled = true;
        } else {
            coastline_enabled = false;
        }
        update();
    });

    var label_checkbox = $("#labelcheck");

    label_checkbox.change(function(event) {
        var label_checkbox = event.target;
        if (label_checkbox.checked) {
            labels_enabled = true;
        } else {
            labels_enabled = false;
        }
        update();
    });

    var layer_dropdown = $("#baselayer");
    layer_dropdown.change(function(event) {
        nasa_layer_name = this.value;
        nasa_layer_format = fmt_hash[nasa_layer_name];
        nasa_layer_matrix_set = matrix_hash[nasa_layer_name];
        // Better blow away cache
        cache = {};
        update();
    });

    var eonet_category = $("#eonet_category");
    eonet_category.change(function (event) {
        eonet_cat = this.value;
        console.log("eonet_cat: " + eonet_cat);
    });

    var eonet_days = $("#eonet_days");
    eonet_days.change(function (event) {
        eonet_day_range = this.value;
        console.log("eonet_day_range: " + eonet_day_range);
    });

    var eonet_button = $("#eonet_btn");
    eonet_button.click(function() {


        var feature_arr = new Array();
        var eonet_url = "http://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/" + eonet_cat + "?days=" + eonet_day_range ;
        $.getJSON(eonet_url, function(data){
            var items = [];
            $.each( data, function( key, val ) {
                items.push( "<li id='" + key + "'>" + val + "</li>" );
            });
            console.log(items);
            var events2 = data.events;
            for (var i = 0 ; i < events2.length; i++) {
                var our_event = events2[i];
                var our_title = our_event.title;
                console.log(our_title);
                var our_geometries = our_event.geometries;
                for (var j = 0; j < our_geometries.length; j++) {
                    var geom1 = our_geometries[j];
                    var our_feature = {};
                    // could also get sources
                    var coords = geom1.coordinates;
                    var date1 = geom1.date;
                    //console.log(geom1.date);
                    var type = geom1.type;
                    //console.log(geom1.type);
                    our_feature['type'] = 'Feature';
                    //our_feature['coordinates'] = geom1.coordinates;

                    var our_properties = {};
                    our_properties.name = our_title;
                    our_properties.date = date1;
                    feature_arr.push(our_feature);
                    our_feature['properties'] = our_properties;
                    var our_geometry = {};
                    our_geometry.type = geom1.type;
                    our_geometry.coordinates = geom1.coordinates;
                    our_feature['geometry'] = our_geometry;

                    console.log("feature array length: " + feature_arr.length);
                }
                console.log("feature array length2: " + feature_arr.length);
            }
            console.log("feature array length3: " + feature_arr.length);
            //geojsonObject['features'] = feature_arr;
            geojsonObject = {
                'type': 'FeatureCollection',
                'crs': {
                    'type': 'name',
                    'properties': {
                        'name': 'EPSG:4326'
                    }
                },
                'features': feature_arr
            };
            var geo_json_string = JSON.stringify(geojsonObject,null,2);
            console.log(geo_json_string);
            update();

        });


        //geojsonObject['features'] = feature_arr;



    });

    var image = new ol.style.Circle({
        radius: 5,
        fill: null,
        stroke: new ol.style.Stroke({color: 'magenta', width: 1})
    });

    var styles = {
        'Point': new ol.style.Style({
            image: image
        }),
        'LineString': new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'magenta',
                width: 4
            })
        }),
        'MultiLineString': new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'magenta',
                width: 4
            })
        }),
        'MultiPoint': new ol.style.Style({
            image: image
        }),
        'MultiPolygon': new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'magenta',
                width: 4
            }),
            fill: null
        }),
        'Polygon': new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'magenta',
                lineDash: [4],
                width: 4
            }),
            fill: null
        }),
        'GeometryCollection': new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'magenta',
                width: 4
            }),
            fill: null,
            image: new ol.style.Circle({
                radius: 10,
                fill: null,
                stroke: new ol.style.Stroke({
                    color: 'magenta'
                })
            })
        }),
        'Circle': new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'magenta',
                width: 4
            }),
            fill: null
        })
    };

    var styleFunction = function(feature) {
        return styles[feature.getGeometry().getType()];
    };

    var displayFeatureInfo = function(pixel) {

        var feature = map.forEachFeatureAtPixel(pixel, function(feature, layer) {
            return feature;
        });

        //var info = document.getElementById('info');
        if (feature) {
            document.getElementById('summaryLabel').innerHTML = '<p style="font-size:18px"><b>' + feature.get('name') + ' ' + feature.get('date') + '</b></p>';

        } else {
            document.getElementById('summaryLabel').innerHTML = '';
        }

    };

    map.on('click', function(evt) {
        displayFeatureInfo(evt.pixel);
    });



});
