//Prepare canvas size
var isMobile = innerWidth < 768;

// set the dimensions and margins of the graph
// Margin convention: https://bl.ocks.org/mbostock/3019563
var screenwidth = d3.select("#barrios").node().clientWidth;

var margin = {top: 50, right: 0, bottom: 30, left: screenwidth/1.8},
		ratio = 9, // Height ratio
		width = screenwidth - margin.left - margin.right, // Width depending on the div
		height = width * (isMobile ? (ratio*3) : ratio) - margin.top - margin.bottom; // Height depending on the ratio
// Margin for second plot
var margin2 = {top: margin.top, right: screenwidth/5.5, bottom: margin.bottom, left:20},
		ratio2 = ratio, // Height ratio
		width2 = screenwidth - width - margin2.left - margin2.right, // Width depending on the div
		height2 = height; // Height depending on the ratio

var vis = d3.select("#barrios"),
isMobile = innerWidth < 768;

// set the ranges
var y = d3.scaleBand()
				  .range([0,height])
				  .padding(0.1);
var x = d3.scaleLinear()
				  .range([0,width]);

var y2 = d3.scaleBand()
	.range([0,height])
	.padding(0.1);
var x2 = d3.scaleLinear()
	.range([width2,0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#barrios").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", 
				  "translate(" + margin.left + "," + margin.top + ")");

var tooltip = d3.select("body").append("div") 
		.attr("class", "tooltip2")

d3.selection.prototype.first = function() {
  return d3.select(this[0][0]);
};
var tickLines = svg.selectAll('.xaxis2 .tick line');

// get the data
d3.tsv("/airbnb/data/barrios/barrios.tsv", function(error, data) {
	if (error) throw error;

	// format the data
	data.forEach(function(d) {
		d.ads_ratio = +d.ads_ratio;
		d.ads = +d.ads;
	});

	// Scale the range of the data in the domains
	y.domain(data.map(function(d) { return d.barrio; }));
	x.domain([0, d3.max(data, function(d) { return d.ads_ratio; })]);

	// Scale the range of the data in the domains
	y2.domain(data.map(function(d) { return d.barrio; }));
	x2.domain([0, d3.max(data, function(d) { return d.ads; })]);

	var xaxis1 = d3.axisTop(x).tickSize([height]).tickPadding([6]).ticks(isMobile ? 3 : 10)
	var xaxis2 = d3.axisTop(x2).tickSize([height]).ticks(isMobile ? 3 : 8)
	var yaxis1  = d3.axisLeft(y)
	// add the x Axis
	svg.append("g").attr("class", "xaxis")
			.attr("transform", "translate(0," + height + ")")
			.call(xaxis1);
	// removes first tick at 0
	svg.selectAll('.xaxis .tick line').filter(function(d, i,list) {
		  return i === 0;
	}).attr('display', 'none');
	
	// add the x2 Axis
	svg.append("g").attr("class", "xaxis2")
			.attr("transform", "translate("+ (-width2-margin2.right) + "," + height2 + ")")
			.call(xaxis2);
	// removes first tick at 0
	svg.selectAll('.xaxis2 .tick line').filter(function(d, i,list) {
		  return i === 0;
	}).attr('display', 'none');

	// add the y Axis
	svg.append("g").attr("class", "yaxis")
			.call(yaxis1);

	// alligns y xis label to middle
	svg.selectAll(".yaxis text")
		.attr("y", 0)
		.attr("x", -margin2.right/2)
		.style("text-anchor", "middle");

	// append the rectangles for the bar chart
	svg.append("g").attr("class", "bars").selectAll(".bar")
			.data(data)
			//.sort(sortItems)
		.enter().append("rect")
			.attr("class", "bar")
			.attr("y", function(d) { return y(d.barrio); })
			.attr("height", y.bandwidth())
			.attr("x", 0)
			.attr("width", function(d) { return x(d.ads_ratio); })
			.attr("fill", function(d) { return d.municipio == "Pamplona-Iruña" ? "#c076c0" : d.municipio == "Donostia / San Sebastián" ? "#4199cb" : d.municipio == "Bilbao" ? "#da5455" : d.municipio == "Madrid" ? "#f6ae01" : "#5cd79b"; })
			.on("mousemove", showTooltip) // AÑADIR EVENTO SHOW TOOLTIP
			.on("mouseout", hideTooltip); // OCULTAR TOOLTIP

	// append the rectangles for the bar chart2
	svg.append("g").attr("class", "bars2").selectAll(".bar")
			.data(data)
			//.sort(sortItems)
		.enter().append("rect")
			.attr("class", "bar")
			.attr("y", function(d) { return y2(d.barrio); })
			.attr("height", y2.bandwidth())
			//.attr("x", function(d) { return -x2(d.ads_ratio); })
			.attr("x", function(d) { return -width2-margin2.right	+x2(d.ads); })
			.attr("width",  function(d) { return width2-x2(d.ads); })
			.attr("fill", function(d) { return d.municipio == "Pamplona-Iruña" ? "#c076c0" : d.municipio == "Donostia / San Sebastián" ? "#4199cb" : d.municipio == "Bilbao" ? "#da5455" : d.municipio == "Madrid" ? "#f6ae01" : "#5cd79b"; })
			.on("mousemove", showTooltip) // AÑADIR EVENTO SHOW TOOLTIP
			.on("mouseout", hideTooltip); // OCULTAR TOOLTIP

			// Assign a listener to the resize event
			window.onresize = resize;

			function resize() {
				// Update width & height
				width = d3.select("#barrios").node().clientWidth - margin.left - margin.right,
				height = width * ratio - margin.top - margin.bottom;

				// Update scales
				x.range([0, width]);
				y.range([height, 0]);

				// Update axis
				xAxis.tickSize(-height);
				yAxis.tickPadding(10);

				// Update SVG
				d3.selectAll("svg")
						.attr("height", height + margin.top + margin.bottom)
						.attr("width", width + margin.left + margin.right);

				// Update axis TODO
				d3.select(".yaxis").call(yAxis);

				d3.select(".xaxis")
					.attr("transform", "translate(0," + height + ")")
					.call(xAxis);

				// Update dots TODO
				svg.selectAll(".bar")
						.attr("x", function(d) { return x(d.pop_2013); })
						.attr("y", function(d) { return y(d.renta_2013); });

				// Update label TODO
				svg.selectAll('.text-label')
					.attr('x', function(d) { return x(d.pop_2013) })
					.attr('y', function(d) { return y(d.renta_2013) });

				svg.select('.label.pop')
					.attr('x', width)
					.attr('y', height);

				svg.select('.label.rent')
					.attr('x', 0)
					.attr('y', 0);
			}
			function showTooltip(d) {
					// Fill the tooltip
					tooltip.html(
						"<div><table class='tooltip-table'></div>" +
								"<tr class='zero-row'><td><strong>" + d.barrio + "</strong> (" + d.municipio + ")</td></tr>" +
								"<tr class='first-row'>" +
										"<td>"+ d.ads_ratio +"</span> alojamientos Airbnb por cada 100 viviendas</td>" +
								"</tr>" +
								"<tr class='second-row'>" +
										"<td>" + d.ads + " alojamientos Airbnb</td>" +
								"</tr>" +
						"</table>")
						.style("opacity", 1)

					//tooltip.style("left", "300px")
					//tooltip.style("top", "6200px")
	
					tooltip.style("left", (d3.event.pageX)+5 + "px")
					tooltip.style("top", (d3.event.pageY)+5 + "px")
				}

			function hideTooltip(d) {
				// Hide tooltip
				tooltip.style("opacity", 0)
			}
});

	svg.append("text").attr("x", -width2).attr("y", -20)
		.text(isMobile ? "Alojam. Airbnb" : "Alojamientos Airbnb")
		.style("text-anchor", "middle")
		.attr("font-size", "12px")
		.attr("fill", "black")
		.attr("font-weight", "bold");
	svg.append("text").attr("x", width/2).attr("y", -20)
		.text(isMobile ? "Airbnbs/100 viviendas" : "Alojamientos Airbnb por cada 100 viviendas")
		.style("text-anchor", "middle")
		.attr("font-size", "12px")
		.attr("fill", "black")
					.attr("font-weight", "bold");
