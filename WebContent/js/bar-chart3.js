$(document).ready(function(){
    
    /* Make some random data for Flot Line Chart*/
    
	var data1 = [[1975,3.5], [1979,4.0], [1983,4.0], [1987,5.3], [1992,4.5], [1996,5.3], [1999,4.5],[2003,5.5],[2007,4.0],[2011,6.0]];//India
    var data2 = [[1975,4.4], [1979,3.5], [1983,4.8], [1987,5.2], [1992,4.3], [1996,5.0], [1999,5.4],[2003,5.3],[2007,6.7],[2011,5.5]];//Aus
    var data3 = [[1975,4.3], [1979,3.4], [1983,4.6], [1987,5.0], [1992,4.2], [1996,4.5], [1999,4.1],[2003,4.8],[2007,4.7],[2011,5.2]];//Eng
    
    
    /* Create an Array push the data + Draw the bars*/
    
    var barData = new Array();

    barData.push({
            data : data1,
            label: 'India',
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
            label: 'Australia',
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
            label: 'England',
            bars : {
                    show : false,
                    barWidth : 0.15,
                    order : 3,
                    lineWidth: 1,
                    fillColor: '#FF9800'
            }
    });
    
    /* Let's create the chart */
    if ($('#bar-cha')[0]) {
        $.plot($("#bar-cha"), barData, {
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