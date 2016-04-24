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

    var geojsonObject3 = {
        "type": "FeatureCollection",
        "crs": {
            "type": "name",
            "properties": {
                "name": "EPSG:4326"
            }
        },
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-20T00:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -178.2,
                        -13.1
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-20T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -178.8,
                        -12.9
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-20T12:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -178.8,
                        -12.8
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-20T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -179.6,
                        -12.6
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-21T00:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -179.5,
                        -12.5
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-21T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -179.3,
                        -13
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-21T12:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -178.9,
                        -12.7
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-21T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -178.3,
                        -12.7
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-22T00:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -177.4,
                        -12.4
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-22T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -177,
                        -12.5
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-22T12:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -176.3,
                        -12.4
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-22T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -175.7,
                        -12.4
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-23T00:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -174.9,
                        -12.4
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Amos",
                    "date": "2016-04-23T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -173.2,
                        -12.8
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Clemmons Road Fire, North Carolina",
                    "date": "2016-04-19T13:45:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -78.187222222222,
                        33.9975
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Whipping Creek Fire, North Carolina",
                    "date": "2016-04-18T14:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -75.907777777778,
                        35.639166666667
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Railroad Grade 2016 Fire, Tennessee",
                    "date": "2016-04-18T01:45:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -82.109722222222,
                        36.216666666667
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Flooding in Houston, Texas",
                    "date": "2016-04-17T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -95.980224609375,
                                29.213727993972313
                            ],
                            [
                                -95.980224609375,
                                30.36072451862922
                            ],
                            [
                                -94.64599609375,
                                30.36072451862922
                            ],
                            [
                                -94.64599609375,
                                29.213727993972313
                            ],
                            [
                                -95.980224609375,
                                29.213727993972313
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Rocky Mount Fire, Virgina",
                    "date": "2016-04-17T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -78.907470703125,
                                38.0603639807185
                            ],
                            [
                                -78.907470703125,
                                38.44255951354092
                            ],
                            [
                                -78.47412109375,
                                38.44255951354092
                            ],
                            [
                                -78.47412109375,
                                38.0603639807185
                            ],
                            [
                                -78.907470703125,
                                38.0603639807185
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "West Africa Dust Storm, April 2016",
                    "date": "2016-04-14T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -34.6875,
                                0.6747501728730703
                            ],
                            [
                                -34.6875,
                                36.12650068285292
                            ],
                            [
                                -2.734375,
                                36.12650068285292
                            ],
                            [
                                -2.734375,
                                0.6747501728730703
                            ],
                            [
                                -34.6875,
                                0.6747501728730703
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Yemen Flash Floods, April 2016",
                    "date": "2016-04-13T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                42.45849609375,
                                14.874914697018605
                            ],
                            [
                                42.45849609375,
                                17.42107429246518
                            ],
                            [
                                45.18798828125,
                                17.42107429246518
                            ],
                            [
                                45.18798828125,
                                14.874914697018605
                            ],
                            [
                                42.45849609375,
                                14.874914697018605
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Flooding in Iran, April 2016",
                    "date": "2016-04-13T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                44.4140625,
                                30.877888118431578
                            ],
                            [
                                44.4140625,
                                38.9142723125973
                            ],
                            [
                                49.912109375,
                                38.9142723125973
                            ],
                            [
                                49.912109375,
                                30.877888118431578
                            ],
                            [
                                44.4140625,
                                30.877888118431578
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-11T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        71.4,
                        -12.9
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-12T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        69.7,
                        -13.3
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-12T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        68.8,
                        -12.8
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-13T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        66.7,
                        -12.9
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-13T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        65,
                        -12.7
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-14T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        63.4,
                        -12.5
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-14T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        61.6,
                        -12.3
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-15T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        59.7,
                        -12.3
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-15T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        58,
                        -12.4
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-16T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        56.3,
                        -12.3
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-16T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        54.4,
                        -11.5
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-17T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        52.6,
                        -10.6
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-17T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        50.8,
                        -9.8
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-18T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        49.7,
                        -9.3
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-18T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        49.4,
                        -9.3
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-19T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        50,
                        -9.3
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-19T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        51.1,
                        -9.8
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-20T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        52.7,
                        -10.5
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-20T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        54.1,
                        -11.5
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-21T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        55.6,
                        -12.3
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-21T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        56.6,
                        -12.9
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-22T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        57.1,
                        -13.2
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-22T18:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        57.3,
                        -12.9
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Cyclone Fantala",
                    "date": "2016-04-23T06:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        56.1,
                        -12.3
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Hydrogen Sulphide Eruptions, Coast of Namibia",
                    "date": "2016-04-11T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                12.3614501953125,
                                -19.79338954926769
                            ],
                            [
                                12.3614501953125,
                                -18.979356750355976
                            ],
                            [
                                12.9815673828125,
                                -18.979356750355976
                            ],
                            [
                                12.9815673828125,
                                -19.79338954926769
                            ],
                            [
                                12.3614501953125,
                                -19.79338954926769
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Long Pine Key Wildfire, Florida",
                    "date": "2016-04-10T12:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -80.662222222222,
                        25.398611111111
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Antarctic Iceberg C33",
                    "date": "2016-04-07T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                162.5390625,
                                -75.52624096698405
                            ],
                            [
                                162.5390625,
                                -73.99921071133521
                            ],
                            [
                                168.7841796875,
                                -73.99921071133521
                            ],
                            [
                                168.7841796875,
                                -75.52624096698405
                            ],
                            [
                                162.5390625,
                                -75.52624096698405
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Halls Top Fire, Tennessee",
                    "date": "2016-04-04T17:00:00Z"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -83.1675,
                        35.874166666667
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Fires in Darien Province, Panama, April 2016",
                    "date": "2016-04-03T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -78.0615234375,
                                8.26225285835533
                            ],
                            [
                                -78.0615234375,
                                8.480176033023001
                            ],
                            [
                                -77.8369140625,
                                8.480176033023001
                            ],
                            [
                                -77.8369140625,
                                8.26225285835533
                            ],
                            [
                                -78.0615234375,
                                8.26225285835533
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Kanlaon Volcano, Philippines",
                    "date": "2016-03-29T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                123.0487060546875,
                                10.34376311542687
                            ],
                            [
                                123.0487060546875,
                                10.490168599740784
                            ],
                            [
                                123.21014404296875,
                                10.490168599740784
                            ],
                            [
                                123.21014404296875,
                                10.34376311542687
                            ],
                            [
                                123.0487060546875,
                                10.34376311542687
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Phytoplankton Bloom off Argentina",
                    "date": "2016-03-21T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -63.8232421875,
                                -43.7598379031358
                            ],
                            [
                                -63.8232421875,
                                -41.42033699166035
                            ],
                            [
                                -59.7314453125,
                                -41.42033699166035
                            ],
                            [
                                -59.7314453125,
                                -43.7598379031358
                            ],
                            [
                                -63.8232421875,
                                -43.7598379031358
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Dukono Volcano, Indonesia",
                    "date": "2016-03-16T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                127.84286499023438,
                                1.6633016286241373
                            ],
                            [
                                127.84286499023438,
                                1.7379700300000804
                            ],
                            [
                                127.91641235351562,
                                1.7379700300000804
                            ],
                            [
                                127.91641235351562,
                                1.6633016286241373
                            ],
                            [
                                127.84286499023438,
                                1.6633016286241373
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Fuego Volcano, Guatemala",
                    "date": "2015-06-30T00:00:00Z"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                -90.91110229492188,
                                14.442392240227267
                            ],
                            [
                                -90.91110229492188,
                                14.501434647062004
                            ],
                            [
                                -90.84945678710938,
                                14.501434647062004
                            ],
                            [
                                -90.84945678710938,
                                14.442392240227267
                            ],
                            [
                                -90.91110229492188,
                                14.442392240227267
                            ]
                        ]
                    ]
                }
            }
        ]
    };


    // Keep track of whether user wants to see these
    var coastline_enabled = false;
    var labels_enabled = false;
    var grid_enabled = false;

    var nasa_layer_name = "MODIS_Terra_CorrectedReflectance_TrueColor";
    var nasa_layer_format = "image/jpeg";
    var nasa_layer_matrix_set = "EPSG4326_250m";

    var fmt_hash = new Object();
    fmt_hash['MODIS_Terra_CorrectedReflectance_TrueColor'] = "image/jpeg";
    fmt_hash['AIRS_CO_Total_Column_Day'] = "image/png";

    var matrix_hash = new Object();
    matrix_hash['MODIS_Terra_CorrectedReflectance_TrueColor'] = "EPSG4326_250m";
    matrix_hash['AIRS_CO_Total_Column_Day'] = "EPSG4326_2km";

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
        //map.addLayer(layer);

        if (coastline_enabled) {
            map.addLayer(coast_layer);
        }
        if (labels_enabled) {
            map.addLayer(lbl_layer);
        }
        if (grid_enabled) {
            map.addLayer(gridLayer);
        }

        var vectorSource = new ol.source.Vector({
            features: (new ol.format.GeoJSON()).readFeatures(geojsonObject3)
        });


        var vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            style: styleFunction
        });
        map.addLayer(vectorLayer);

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


    var eonet_button = $("#eonet_btn");
    eonet_button.click(function() {




        var feature_arr = new Array();
        $.getJSON("http://eonet.sci.gsfc.nasa.gov/api/v2.1/events", function(data){
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
            var geojsonObject = {
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

        });


        //geojsonObject['features'] = feature_arr;



    });

    var image = new ol.style.Circle({
        radius: 5,
        fill: null,
        stroke: new ol.style.Stroke({color: 'red', width: 1})
    });

    var styles = {
        'Point': new ol.style.Style({
            image: image
        }),
        'LineString': new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'green',
                width: 1
            })
        }),
        'MultiLineString': new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'green',
                width: 1
            })
        }),
        'MultiPoint': new ol.style.Style({
            image: image
        }),
        'MultiPolygon': new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'yellow',
                width: 1
            }),
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 0, 0.1)'
            })
        }),
        'Polygon': new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'blue',
                lineDash: [4],
                width: 3
            }),
            fill: new ol.style.Fill({
                color: 'rgba(0, 0, 255, 0.1)'
            })
        }),
        'GeometryCollection': new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'magenta',
                width: 2
            }),
            fill: new ol.style.Fill({
                color: 'magenta'
            }),
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
                color: 'red',
                width: 2
            }),
            fill: new ol.style.Fill({
                color: 'rgba(255,0,0,0.2)'
            })
        })
    };

    var styleFunction = function(feature) {
        return styles[feature.getGeometry().getType()];
    };


});
