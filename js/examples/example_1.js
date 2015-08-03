/* Examples from @d3Vienno in youtube */
var dataArray = [20, 50, 300];

var width = 500;

var height = 500;

// Example of a color scale
var color = d3.scale.linear()
    .domain([0, d3.max(dataArray)])
    .range(['red', 'blue']);

// Example of a linear width scale
var widthScale =
    d3.scale.linear()
        .domain([0, d3.max(dataArray)])
        .range([0, width]);

var axisex1 =
    d3.svg.axis()
        .ticks(5)
        .scale(widthScale);


var svg =
        d3.select('#example-1')
            .append('svg')
//            .attr('width', width)
//            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(20, 0)')
            .attr('viewBox', '0 0 ' + width + ' ' + height)
            .attr('preserveAspectRatio', 'xMidYMid')
            .attr('data-aspect', width/height)
    ;

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

svg.append('g')
    .attr('transform', 'translate(0,400)')
    .call(axisex1);