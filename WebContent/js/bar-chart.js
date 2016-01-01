$(document).ready(function(){
    
    /* Make some random data for Flot Line Chart*/
    
	var data1 = [[1971,2], [1974,0], [1976,2], [1977,0], [1978,2], [1979,0], [1981,1],[1982,0],[1983,0],[1984,0],[1985,0],[1986,2],[1989,0],[1990,0],[1991,0],[1992,0],[1993,1],[1994,0],[1996,0],[1997,0]];//Won
    var data2 = [[1971,8],[1974,0],[1976,7], [1977,0], [1978,6], [1979,4], [1981,6],[1982,5],[1983,9],[1984,2],[1985,5],[1986,4],[1989,8],[1990,6],[1991,0],[1992,7],[1993,4],[1994,1],[1996,4],[1997,9]];//Draw
    var data3 = [[1971,0], [1974,3], [1976,5], [1977,2], [1978,5], [1979,1],[1981,3],[1982,2],[1983,4],[1984,0],[1985,1],[1986,0],[1989,3],[1990,2],[1991,2],[1992,3],[1993,0],[1994,0],[1996,2],[1997,2]];//Lost
    
    
    /* Create an Array push the data + Draw the bars*/
    
    var barData = new Array();

    barData.push({
            data : data1,
            label: 'Won',
            bars : {
                    show : true,
                    barWidth : 0.15,
                    order : 1,
                    lineWidth: 1,
                    fillColor: '#8BC34A'
            }
    });
    
    barData.push({
            data : data2,
            label: 'Draw',
            bars : {
                    show : true,
                    barWidth : 0.15,
                    order : 2,
                    lineWidth: .5,
                    fillColor: '#00BCD4'
            }
    });
    
    barData.push({
            data : data3,
            label: 'Lost',
            bars : {
                    show : true,
                    barWidth : 0.15,
                    order : 3,
                    lineWidth: 1,
                    fillColor: '#FF9800'
            }
    });
    
    /* Let's create the chart */
    if ($('#bar-chart')[0]) {
        $.plot($("#bar-chart"), barData, {
            grid : {
                    borderWidth: 0,
                    borderColor: '#eee',
                    show : true,
                    hoverable : true,
                    clickable : true
            },
            
            yaxis: {
                tickColor: '#eee',
                tickDecimals: 0,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "#9f9f9f",
                },
                shadowSize: 0
            },
            
            xaxis: {
                tickColor: '#fff',
                tickDecimals: 0,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "#9f9f9f"
                },
                shadowSize: 0,
            },
    
            legend:{
                container: '.flc-bar',
                backgroundOpacity: 0.5,
                noColumns: 0,
                backgroundColor: "white",
                lineWidth: 0
            }
        });
    }
    
    /* Tooltips for Flot Charts */
    
    if ($(".flot-chart")[0]) {
        $(".flot-chart").bind("plothover", function (event, pos, item) {
            if (item) {
                var x=item.datapoint[0].toFixed(0),
                y = item.datapoint[1];
                $(".flot-tooltip").html(item.series.label +" in "+x+" = " + y).css({top: item.pageY+5, left: item.pageX+5}).show();
            }
            else {
                $(".flot-tooltip").hide();
            }
        });
        
        $("<div class='flot-tooltip' class='chart-tooltip'></div>").appendTo("body");
    }
});