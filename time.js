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

    // Keep track of whether user wants to see these
    var coastline_enabled = false;
    var labels_enabled = false;
    var grid_enabled = false;

    var nasa_layer_name = "MODIS_Terra_CorrectedReflectance_TrueColor";
    var nasa_layer_format = "image/jpeg";
    var nasa_layer_matrix_set = "EPSG4326_250m";

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

    var update = function() {
        // TODO look into caching grid, coastlines, and labels
        // Using the day as the cache key, see if the layer is already
        // in the cache.
        console.log("grid: " + grid_enabled);
        var key = dayParameter();
        var layer = cache[key];

        // today -- use as key for grid/coastline/label layers
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
        map.addLayer(layer);

        if (coastline_enabled) {
            map.addLayer(coast_layer);
        }
        if (labels_enabled) {
            map.addLayer(lbl_layer);
        }
        if (grid_enabled) {
            map.addLayer(gridLayer);
        }

        // Update the day label
        $("#day-label").html(dayParameter());
    };

    var clearLayers = function() {
        // Get a copy of the current layer list and then remove each
        // layer.
        var activeLayers = map.getLayers().getArray();
        for ( var i = 0; i < activeLayers.length; i++ ) {
            console.log('removing layer');
            map.removeLayer(activeLayers[i]);
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

    var toggleGrid = function() {
        grid_enabled = !grid_enabled;
        update();
    };

    var toggleCoastline = function() {
        coastline_enabled = !coastline_enabled;
        update();
    };

    var toggleLabels = function() {
        labels_enabled = !labels_enabled;
        alert("did something!");
        update();
    };

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

});
