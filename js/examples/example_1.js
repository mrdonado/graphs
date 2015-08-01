var dataArray = [20, 50, 30];

var svg = d3.select('#example-1')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500);

var bars = svg.selectAll('rect')
    .data(dataArray)
    .enter()
    .append('rect')
    .attr('width', function (d) {
        return d * 10;
    })
    .attr('height', 50)
    .attr('y', function (d, i) {
        return i * 100
    });
