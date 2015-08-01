/* Examples from @d3Vienno in youtube */
var dataArray = [20, 50, 300];

var width = 500;

var height = 500;

var svg =
    d3.select('#example-1')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

// Example of a color scale
var color = d3.scale.linear()
    .domain([0, d3.max(dataArray)])
    .range(['red', 'blue']);

var widthScale =
    d3.scale.linear()
        .domain([0, d3.max(dataArray)])
        .range([0, width]);

var bars =
    svg.selectAll('rect')
        .data(dataArray)
        .enter()
        .append('rect')
        .attr('width', function (d) {
            return widthScale(d);
        })
        .attr('fill', function (d) {
            return color(d)
        })
        .attr('height', 50)
        .attr('y', function (d, i) {
            return i * 100
        });
