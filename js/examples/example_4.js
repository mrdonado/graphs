var linearGraph = function () {

    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 500 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // All the data sources. Each data source is a line in the graph.
    var dataSources = ['js/data/data1.tsv', 'js/data/data2.tsv', 'js/data/data3.tsv', 'js/data/data4.tsv'];

    var numSources = dataSources.length;

    // It stores the received (and parsed) data
    var allData = [];

    // Global maximum and minimum values, for all the data sources 
    // (calculated when the information is received).
    var maxX;
    var maxY;
    var minX;
    var minY;

    // A different color for each data source
    var lineColors =
        d3.scale.linear()
            .domain([0, numSources])
            .range(['red', 'blue']);

    var parseDate = d3.time.format("%d-%b-%y").parse;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(5);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var line = d3.svg.line()
        .interpolate("basis")
        .x(function (d) {
            return x(d.date);
        })
        .y(function (d) {
            return y(d.value);
        });

    // A responsive SVG is generated. It will be used as a canvas for the graphic.
    var svg = d3.select("#example-4").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr('viewBox', '0 0 ' + (margin.left + margin.right + width) + ' ' + (margin.top + margin.bottom + height))
        .attr('preserveAspectRatio', 'xMidYMid')
        .attr('data-aspect', (margin.left + margin.right + width) / (margin.top + margin.bottom + height))
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // The sources are retrieved.
    for (var i = 0; i < numSources; i += 1) {
        d3.tsv(dataSources[i], function (error, data) {
            if (error) throw error;
            data.forEach(function (d) {
                d.date = parseDate(d.date);
                d.value = +d.value;
            });
            allData.push(data);
            updateDomain(data);
            paintAll(); // paintAll will paint all the sources when the info is ready.

        });
    }

    // It updates the domain for all the sources
    var updateDomain = function (data) {
        'use strict';
        var currentMaxX,
            currentMaxY,
            currentMinX,
            currentMinY;
        currentMaxX = d3.max(data, function (d) {
            return d.date
        });
        currentMinX = d3.min(data, function (d) {
            return d.date
        });
        currentMaxY = d3.max(data, function (d) {
            return d.value
        });
        currentMinY = d3.min(data, function (d) {
            return d.value
        });
        maxX = d3.max([currentMaxX, maxX]);
        maxY = d3.max([currentMaxY, maxY]);
        minX = d3.min([currentMinX, minX]);
        minY = d3.min([currentMinY, minY]);
    }

    var paintAll = function () {
        // Paint nothing if the information is not there yet.
        if (allData.length < numSources) {
            return;
        }
        paintAxis();
        for (var i = 0; i < numSources; i += 1) {
            paintDataSource(allData[i], lineColors(i));
        }
    };

    // It defines the domain and paints the axes.
    var paintAxis = function () {

        x.domain([minX, maxX]);
        y.domain([minY, maxY]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end");
    };


    var paintDataSource = function (data, color) {

        var path = svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("stroke", color)
            .attr("d", line);

        var totalLength = path.node().getTotalLength();

        path
            .attr("stroke-dasharray", totalLength + " " + totalLength)
            .attr("stroke-dashoffset", totalLength)
            .transition()
            .duration(2500)
            .ease("linear")
            .attr("stroke-dashoffset", 0);
    };
};

// The function to generate the whole thing is called here
linearGraph();