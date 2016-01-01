/*(2014)*/var salesData=[
                  	{label:"INC",value:44, color:"#3366CC"},//blue
                  	{label:"NDA",value:282, color:"#FF9900"},
                  	{label:"Other",value:37, color:"#109618"},
                  ];

       /*(2009)*/           var salesDat=[
                  	{label:"INC",value:206, color:"#3366CC"},//blue
                  	{label:"NDA",value:116, color:"#FF9900"},//orange
                  	{label:"Other",value:23, color:"#109618"},//green
                  ];
       
  /*(2004)*/     var salesDa=[
                   	{label:"INC",value:145, color:"#3366CC"},//blue
                   	{label:"NDA",value:138, color:"#FF9900"},//orange
                   	{label:"Other",value:43, color:"#109618"},//green
                   ];
  
  /*(1999)*/var salesD=[
                        	{label:"INC",value:114, color:"#3366CC"},//blue
                           	{label:"NDA",value:182, color:"#FF9900"},//orange
                           	{label:"Other",value:33, color:"#109618"},//green
                           ];
  
  /*(1998)*/var sales=[
                        	{label:"INC",value:141, color:"#3366CC"},//blue
                           	{label:"NDA",value:182, color:"#FF9900"},//orange
                           	{label:"Other",value:32, color:"#109618"},//green
                           ];
  /*(1996)*/var sale=[
                        	{label:"INC",value:140, color:"#3366CC"},//blue
                           	{label:"NDA",value:161, color:"#FF9900"},//orange
                           	{label:"Other",value:46, color:"#109618"},//green
                           ];
  
  /*(1991)*/var sal=[
                        	{label:"INC",value:232, color:"#3366CC"},//blue
                           	{label:"NDA",value:120, color:"#FF9900"},//orange
                           	{label:"Other",value:59, color:"#109618"},//green
                           ];
  

                  var svg = d3.select(".DonutChartP").append("svg").attr("width",350).attr("height",300);

                  svg.append("g").attr("id","salesDonut");
                 // svg.append("g").attr("id","quotesDonut");

                  Donut3D.draw("salesDonut", randomDataa(), 150, 150, 130, 100, 30, 0.4);
                //  Donut3D.draw("quotesDonut", randomData(), 450, 150, 130, 100, 30, 0);
                  	

                  function changeData(){
                  	Donut3D.transition("salesDonut", randomDataa(), 130, 100, 30, 0.4);
                  //	Donut3D.transition("quotesDonut", randomDataa(), 130, 100, 30, 0);
                  }
                  function randomData(){
                  return salesData.map(function(d){ 
                  		return {label:d.label, value:d.value, color:d.color};});
                  }

                  function randomDataa(){
                  var name=$('#drpdown option:selected').text();
                  if(name==2014){
                  	return salesData.map(function(d){ 
                  		return {label:d.label, value:d.value, color:d.color};});
                  		}else if(name==2009){
                  		return salesDat.map(function(d){ 
                  		return {label:d.label, value:d.value, color:d.color};});
                  		}else if(name==2004){
                      		return salesDa.map(function(d){ 
                          		return {label:d.label, value:d.value, color:d.color};});
                          		}else if(name==1999){
                              		return salesD.map(function(d){ 
                                  		return {label:d.label, value:d.value, color:d.color};});
                                  		}else if(name==1998){
                                      		return sales.map(function(d){ 
                                          		return {label:d.label, value:d.value, color:d.color};});
                                          		}else if(name==1996){
                                              		return sale.map(function(d){ 
                                                  		return {label:d.label, value:d.value, color:d.color};});
                                                  		}else if(name==1991){
                                                      		return sal.map(function(d){ 
                                                          		return {label:d.label, value:d.value, color:d.color};});
                                                          		}
                  }
       