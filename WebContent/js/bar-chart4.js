$(document).ready(function(){
    
    /* Make some random data for Flot Line Chart*/
    
	var data1 = [[1995,19], [1996,22], [1997,25], [1998,30], [1999,39], [2000,38], [2001,35],[2002,33],[2003,30],[2004,30],[2005,31],[2006,29],[2007,33],[2008,32],[2009,34],[2010,32],[2011,30]];//India
    var data2 = [[1995,19], [1996,20], [1997,22], [1998,23], [1999,20], [2000,26], [2001,27],[2002,27],[2003,26],[2004,26],[2005,27],[2006,30],[2007,30],[2008,27],[2009,30],[2010,29],[2011,26]];//Aus
    var data3 = [[1995,11], [1996,12], [1997,13], [1998,14], [1999,17], [2000,18], [2001,17],[2002,20],[2003,22],[2004,22],[2005,24],[2006,23],[2007,25],[2008,26],[2009,24],[2010,22],[2011,20]];//Eng
    
    
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
    if ($('#bar-chat')[0]) {
        $.plot($("#bar-chat"), barData, {
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