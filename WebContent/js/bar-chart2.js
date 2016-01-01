$(document).ready(function(){
    
    /* Make some random data for Flot Line Chart*/
    
	var data1 = [[1972,0], [1973,2], [1974,0], [1975,2], [1976,2], [1977,1], [1978,0],[1979,4],[1980,1],[1981,1],[1982,0],[1983,0],[1984,1],[1985,0],[1986,0],[1987,1],[1988,1],[1990,1],[1993,4],[1994,4]];//Won
    var data2 = [[1972,0], [1973,4], [1974,0], [1975,0], [1976,4], [1977,4], [1978,2],[1979,14],[1980,3],[1981,3],[1982,4],[1983,9],[1984,0],[1985,3],[1986,4],[1987,9],[1988,0],[1990,0],[1993,0],[1994,6]];//Draw
    var data3 = [[1972,1], [1973,0], [1974,2], [1975,3], [1976,3], [1977,3], [1978,0],[1979,0],[1980,2],[1981,0],[1982,0],[1983,3],[1984,2],[1985,1],[1986,1],[1987,3],[1988,4],[1990,0],[1993,0],[1994,5]];//Lost
    
    
    /* Create an Array push the data + Draw the bars*/
    
    var barData = new Array();

    barData.push({
            data : data1,
            label: 'Won',
            bars : {
                    show : false,
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
                    show : false,
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
                    show : false,
                    barWidth : 0.15,
                    order : 3,
                    lineWidth: 1,
                    fillColor: '#FF9800'
            }
    });
    
    /* Let's create the chart */
    if ($('#bar-char')[0]) {
        $.plot($("#bar-char"), barData, {
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
    
  /*  if ($(".flot-char")[0]) {
        $(".flot-char").bind("plothover", function (event, pos, item) {
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
    }*/
});