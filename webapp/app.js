    // var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	// var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	// var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

    var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    });
    var map = L.map('map')
        .addLayer(mapboxTiles)
        // .setView([40.72332345541449, -73.99], 14)
        .setView([55.01355585884185, -1.5236663818359375], 13);


//     var meteoPoints = [[54.965645,-1.603428,0],[54.992523739,-1.5687704086,1],[54.980095,-1.550289,2],[54.991308,-1.609327,3],[55.007634,-1.590481,4],[54.983255,-1.65862,5],[55.000748,-1.704298,6],[55.018165,-1.618791,7],[54.96932,-1.663941,8],[54.951477,-1.553981,9],[54.984308853,-1.5762135386,10],[54.9911393752,-1.5837880969,11],[55.007142,-1.620202,12],[54.973601,-1.609379,13],[54.972656,-1.614074,14],[54.9953516437,-1.7187985804,15],[55.023115,-1.594308,16],[54.994447,-1.616204,17],[54.972733718,-1.6236904332,18],[54.974514,-1.625461,19],[54.971422,-1.614957,20],[54.9714355724,-1.6223591348,21],[54.912025,-1.584885,22],[55.022829,-1.45333,23],[54.957331,-1.690413,24],[55.0073825381,-1.6201142297,25],[54.9707186773,-1.6230063157,26],[55.0073449836,-1.6195986229,27],[54.968563839,-1.6207147037,28],[54.9709415844,-1.6224418716,29],[54.986405,-1.595362,30],[55.006374794,-1.6197016067,31],[54.995627,-1.617637,32],[54.995359,-1.616042,33],[54.9683982048,-1.6223563699,34],[54.981342,-1.617473,35],[54.972024217,-1.6267432484,36],[54.9604069514,-1.6058166524,37],[54.96565,-1.60341,38],[54.981553,-1.616125,39],[54.972397608,-1.6225219524,40],[54.986389,-1.598611,41],[55.0129128011,-1.6207289722,42],[55.0079386911,-1.6197962686,43],[54.973636,-1.626982,44],[54.9730429519,-1.6219847606,45],[54.977193,-1.618485,46],[54.969581,-1.615085,47],[54.975625,-1.626511,48],[54.974787,-1.623115,49],[55.0125067785,-1.6206431416,50],[55.0066987276,-1.6198392586,51],[54.9720130272,-1.6289615998,52],[54.9726300323,-1.6221292315,53],[54.9493861346,-1.5992526003,54],[54.9487108841,-1.5980466173,55],[54.9483314742,-1.5993117833,56],[54.975124,-1.624017,57],[54.976282,-1.619008,58],[54.9505327953,-1.5991223468,59],[54.97461,-1.61014,60],[54.973759,-1.624536,61],[54.979084,-1.617592,62],[54.9656558649,-1.6042745895,63],[54.995504,-1.616718,64],[54.9517288541,-1.5989722967,65],[54.9730696243,-1.6247964478,66],[54.981944,-1.616611,67],[54.976079,-1.626372,68],[55.053906,-1.671329,69],[54.9736679,-1.6112187,70],[55.007407,-1.624621,71],[55.005077,-1.577439,72],[55.009801,-1.616806,73],[54.99596,-1.615112,74],[54.9723951921,-1.6246465145,75],[54.995961,-1.759989,76],[54.976195,-1.710721,77],[54.969172,-1.637606,78],[54.991754,-1.710531,79],[54.981186,-1.614386,80],[54.9509088634,-1.6003594321,81],[54.972047144,-1.6254308319,82],[54.9741848516,-1.6250985043,83],[54.959784,-1.615699,84],[55.007019,-1.619841,85],[55.007014,-1.619841,86],[55.007002,-1.619841,87],[54.979519,-1.649426,88],[54.979455,-1.617349,89],[54.987092,-1.594598,90],[54.979813,-1.616997,91],[54.975575,-1.625927,92],[54.980411,-1.616803,93],[54.972138805,-1.623102374,94],[55.007007,-1.619841,95],[55.0071465599,-1.6193659726,96],[54.9685529043,-1.6200900017,97],[54.975414,-1.625238,98],[54.969878,-1.616422,99],[54.9723691957,-1.6220535706,100],[54.9664773686,-1.6043272647,101],[54.976586,-1.618593,102],[54.981297,-1.616822,103],[54.982169,-1.616489,104],[54.978333,-1.610556,105],[54.971111,-1.609167,106],[54.977778,-1.614444,107],[54.9683108621,-1.6231694302,108],[54.9489218071,-1.5988084709,109],[54.9655680424,-1.603993894,110],[54.9617026199,-1.6057179385,111],[55.00026,-1.543059,112],[54.973198,-1.611006,113],[54.97431,-1.61169,114],[54.970005,-1.616135,115],[54.97223,-1.61069,116],[54.977854,-1.613355,117],[54.97575,-1.61273,118],[54.97226,-1.61731,119],[54.974211,-1.617166,120],[55.0121653472,-1.6214746263,121],[54.981188,-1.614387,122],[54.9730915862,-1.6260928595,123],[55.0116085926,-1.620482209,124],[54.9689755367,-1.6230694906,125],[54.9718949245,-1.6226984992,126],[54.9729518298,-1.6215794483,127],[54.9714549007,-1.6227963486,128],[54.9717950126,-1.6223557647,129],[54.992523739,-1.5698003769,130],[54.986412,-1.595367,131],[55.007883,-1.621092,132],[55.007358,-1.620889,133],[55.007159,-1.621252,134],[55.007296,-1.618097,135],[55.0136866982,-1.6663372543,136],[55.0058362715,-1.6199099478,137],[55.0050458492,-1.6200268562,138],[55.0043460176,-1.6203774151,139],[55.0054866487,-1.6201790373,140],[55.0039858481,-1.6201463055,141],[55.002478,-1.467674,142],[54.972771,-1.62314,143],[54.9703487986,-1.6225411529,144],[55.015287,-1.468363,145],[55.006886,-1.619756,146],[54.987092,-1.594598,147],[54.994983,-1.61638,148],[54.965771586,-1.6041831626,149],[54.9734549488,-1.621543477,150],[54.9514414508,-1.598127043,151],[54.9683762518,-1.6210757312,152],[54.975987,-1.618759,153],[54.9736159392,-1.6241977191,154],[54.9610121575,-1.6060009439,155],[54.9499702247,-1.5992153399,156],[54.9723866714,-1.6277240508,157],[55.0119777125,-1.6209489134,158],[54.96887,-1.618537,159],[54.969176,-1.616929,160],[54.995737,-1.616241,161],[55.0125390759,-1.6210481551,162],[54.9723388166,-1.6238503387,163],[54.975402,-1.618207,164],[54.9614030228,-1.6063334215,165],[54.9801201,-1.6097249,166],[54.981187,-1.614387,167],[54.9496657018,-1.5989471379,168],[54.9510999559,-1.5988530766,169],[54.9656928819,-1.6034598064,170],[54.97768,-1.6135,171],[54.973793,-1.606514,172],[54.9891617,-1.685734,173],[54.9683376,-1.5965875,174],[54.96926,-1.616354,175],[54.969449,-1.614991,176],[54.9606130071,-1.6063417375,177],[54.9514211152,-1.5988286317,178],[54.9512684928,-1.5994436494,179],[54.9519771307,-1.5993297681,180],[54.9498987367,-1.5994771703,181],[54.9490942329,-1.5992645762,182],[54.9738314,-1.625124,183],[54.981701,-1.613215,184],[55.011258,-1.566521,185],[55.039309,-1.593537,186],[54.996488,-1.558751,187],[54.965674,-1.60345,188],[54.9705299711,-1.6230080819,189],[54.97825,-1.610528,190],[54.973587551,-1.6208392374,191],[55.012987,-1.611256,192],[54.98891,-1.577888,193],[54.9842258057,-1.5818905857,194],[54.9986026375,-1.5885531929,195],[55.029411,-1.521943,196]];

//  var idw2 = L.idwLayer(meteoPoints,{
//             opacity: 0.3,
//             maxZoom: 18,
//             cellSize: 10,
//             exp: 1,
//             max: 50
//         }).addTo(map);

    // we will be appending the SVG to the Leaflet map pane
    // g (group) element will be inside the svg
    var svg = d3.select(map.getPanes().overlayPane).append("svg");
    // if you don't include the leaflet-zoom-hide when a
    // user zooms in or out you will still see the phantom
    // original SVG
    var g = svg.append("g").attr("class", "leaflet-zoom-hide");
    //read in the GeoJSON. This function is asynchronous so
    // anything that needs the json file should be within
    d3.json("ncl.geojson", function(collection) {
        // this is not needed right now, but for future we may need
        // to implement some filtering. This uses the d3 filter function
        // featuresdata is an array of point objects
        var featuresdata = collection.features.filter(function(d) {
            return d.properties.id != "route1"
        })
        //stream transform. transforms geometry before passing it to
        // listener. Can be used in conjunction with d3.geo.path
        // to implement the transform.
        var transform = d3.geo.transform({
            point: projectPoint
        });
        //d3.geo.path translates GeoJSON to SVG path codes.
        //essentially a path generator. In this case it's
        // a path generator referencing our custom "projection"
        // which is the Leaflet method latLngToLayerPoint inside
        // our function called projectPoint
        var d3path = d3.geo.path().projection(transform);
        // Here we're creating a FUNCTION to generate a line
        // from input points. Since input points will be in
        // Lat/Long they need to be converted to map units
        // with applyLatLngToLayer
        var toLine = d3.svg.line()
            .interpolate("linear")
            .x(function(d) {
                return applyLatLngToLayer(d).x
            })
            .y(function(d) {
                return applyLatLngToLayer(d).y
            });
        // From now on we are essentially appending our features to the
        // group element. We're adding a class with the line name
        // and we're making them invisible
        // these are the points that make up the path
        // they are unnecessary so I've make them
        // transparent for now
        var ptFeatures = g.selectAll("circle")
            .data(featuresdata)
            .enter()
            .append("circle")
            .attr("r", 3)
            .attr("class", "waypoints");
        // Here we will make the points into a single
        // line/path. Note that we surround the featuresdata
        // with [] to tell d3 to treat all the points as a
        // single line. For now these are basically points
        // but below we set the "d" attribute using the
        // line creator function from above.
        var linePath = g.selectAll(".lineConnect")
            .data([featuresdata])
            .enter()
            .append("path")
            .attr("class", "lineConnect");
        // This will be our traveling circle it will
        // travel along our path
        var marker = g.append("circle")
            .attr("r", 10)
            .attr("id", "marker")
            .attr("class", "travelMarker");
        // I'm taking
        // the first and the last object (the origin)
        // and destination and adding them separately to
        // better style them. There is probably a better
        // way to do this!
        var originANDdestination = [featuresdata[0], featuresdata[featuresdata.length -1]]
        var begend = g.selectAll(".drinks")
            .data(originANDdestination)
            .enter()
            .append("circle", ".drinks")
            .attr("r", 5)
            .style("fill", "red")
            .style("opacity", "1");
        // I want names for my coffee and beer
        var text = g.selectAll("text")
            .data(originANDdestination)
            .enter()
            .append("text")
            .text(function(d) {
                return d.properties.name
            })
            .attr("class", "locnames")
            .attr("y", function(d) {
                return -10
            })
        // when the user zooms in or out you need to reset
        // the view
        map.on("viewreset", reset);
        // this puts stuff on the map!
        reset();
        transition();
        // Reposition the SVG to cover the features.
        function reset() {
            var bounds = d3path.bounds(collection),
                topLeft = bounds[0],
                bottomRight = bounds[1];
            // here you're setting some styles, width, heigh etc
            // to the SVG. Note that we're adding a little height and
            // width because otherwise the bounding box would perfectly
            // cover our features BUT... since you might be using a big
            // circle to represent a 1 dimensional point, the circle
            // might get cut off.
            text.attr("transform",
                function(d) {
                    return "translate(" +
                        applyLatLngToLayer(d).x + "," +
                        applyLatLngToLayer(d).y + ")";
                });
            // for the points we need to convert from latlong
            // to map units
            begend.attr("transform",
                function(d) {
                    return "translate(" +
                        applyLatLngToLayer(d).x + "," +
                        applyLatLngToLayer(d).y + ")";
                });
            ptFeatures.attr("transform",
                function(d) {
                    return "translate(" +
                        applyLatLngToLayer(d).x + "," +
                        applyLatLngToLayer(d).y + ")";
                });
            // again, not best practice, but I'm harding coding
            // the starting point
            marker.attr("transform",
                function() {
                    var y = featuresdata[0].geometry.coordinates[1]
                    var x = featuresdata[0].geometry.coordinates[0]
                    return "translate(" +
                        map.latLngToLayerPoint(new L.LatLng(y, x)).x + "," +
                        map.latLngToLayerPoint(new L.LatLng(y, x)).y + ")";
                });
            // Setting the size and location of the overall SVG container
            svg.attr("width", bottomRight[0] - topLeft[0] + 120)
                .attr("height", bottomRight[1] - topLeft[1] + 120)
                .style("left", topLeft[0] - 50 + "px")
                .style("top", topLeft[1] - 50 + "px");
            // linePath.attr("d", d3path);
            linePath.attr("d", toLine)
            // ptPath.attr("d", d3path);
            g.attr("transform", "translate(" + (-topLeft[0] + 50) + "," + (-topLeft[1] + 50) + ")");
        } // end reset
        // the transition function could have been done above using
        // chaining but it's cleaner to have a separate function.
        // the transition. Dash array expects "500, 30" where
        // 500 is the length of the "dash" 30 is the length of the
        // gap. So if you had a line that is 500 long and you used
        // "500, 0" you would have a solid line. If you had "500,500"
        // you would have a 500px line followed by a 500px gap. This
        // can be manipulated by starting with a complete gap "0,500"
        // then a small line "1,500" then bigger line "2,500" and so
        // on. The values themselves ("0,500", "1,500" etc) are being
        // fed to the attrTween operator
        function transition() {
            linePath.transition()
                .duration(7500)
                .attrTween("stroke-dasharray", tweenDash)
                .each("end", function() {
                    // d3.select(this).call(transition);// infinite loop
                });
        } //end transition
        // this function feeds the attrTween operator above with the
        // stroke and dash lengths
        function tweenDash() {
            return function(t) {
                //total length of path (single value)
                var l = linePath.node().getTotalLength();

                // this is creating a function called interpolate which takes
                // as input a single value 0-1. The function will interpolate
                // between the numbers embedded in a string. An example might
                // be interpolatString("0,500", "500,500") in which case
                // the first number would interpolate through 0-500 and the
                // second number through 500-500 (always 500). So, then
                // if you used interpolate(0.5) you would get "250, 500"
                // when input into the attrTween above this means give me
                // a line of length 250 followed by a gap of 500. Since the
                // total line length, though is only 500 to begin with this
                // essentially says give me a line of 250px followed by a gap
                // of 250px.
                interpolate = d3.interpolateString("0," + l, l + "," + l);
                // interpolate = d3.interpolateString("0,500", "250,500");
                //t is fraction of time 0-1 since transition began
                var marker = d3.select("#marker");

                // p is the point on the line (coordinates) at a given length
                // along the line. In this case if l=50 and we're midway through
                // the time then this would 25.
                var p = linePath.node().getPointAtLength(t * l);
                //Move the marker to that point
                marker.attr("transform", "translate(" + p.x + "," + p.y + ")"); //move marker
                //console.log(interpolate(t))
                return interpolate(t);
            }
        } //end tweenDash
        // Use Leaflet to implement a D3 geometric transformation.
        // the latLngToLayerPoint is a Leaflet conversion method:
        //Returns the map layer point that corresponds to the given geographical
        // coordinates (useful for placing overlays on the map).
        function projectPoint(x, y) {
            var point = map.latLngToLayerPoint(new L.LatLng(y, x));
            this.stream.point(point.x, point.y);
        } //end projectPoint
    });
    // similar to projectPoint this function converts lat/long to
    // svg coordinates except that it accepts a point from our
    // GeoJSON
    function applyLatLngToLayer(d) {
        var y = d.geometry.coordinates[1]
        var x = d.geometry.coordinates[0]
        return map.latLngToLayerPoint(new L.LatLng(y, x))
    }