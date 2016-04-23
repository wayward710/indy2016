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

    // Seven day slider based off today, remember what today is
    var today = new Date();

    // Selected day to show on the map
    var day = new Date(today.getTime());

    // When the day is changed, cache previous layers. This allows already
    // loaded tiles to be used when revisiting a day. Since this is a
    // simple example, layers never "expire" from the cache.
    var cache = {};

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
        var key = dayParameter();
        var layer = cache[key];

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

        coastLayer = coastlineLayer();
        lblLayer = labelLayer();
        map.addLayer(coastLayer);
        map.addLayer(lblLayer);
        map.addLayer(gridLayer);

        // Update the day label
        $("#day-label").html(dayParameter());
    };

    var clearLayers = function() {
        // Get a copy of the current layer list and then remove each
        // layer.
        var activeLayers = map.getLayers().getArray();
        for ( var i = 0; i < activeLayers.length; i++ ) {
            map.removeLayer(activeLayers[i]);
        }
    };


    var createLayer = function() {
        var source = new ol.source.WMTS({
            url: "//map1{a-c}.vis.earthdata.nasa.gov/wmts-geo/wmts.cgi?TIME=" + dayParameter(),
            layer: "MODIS_Terra_CorrectedReflectance_TrueColor",
            //layer: "Coastlines",
            format: "image/jpeg",
            //format: "image/png",
            matrixSet: "EPSG4326_250m",
            //matrixSet: "EPSG4326_2km",
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
});
