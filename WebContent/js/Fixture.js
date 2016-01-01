$(document).ready(function(){
	var jds;
	var myMap=new Map();
	$.ajax({
		url:"Teams",
		type:"GET",
		success:function(response){
			jds=$.parseXML(response);
			
			$(jds).find("Data").each(function(){
				
				var fix=$(this).find('MatchBtw').text();
				var fixDT=$(this).find('MatchDate').text();
				myMap.set(fix,fixDT);
			});
			var dst="<label><span style=\"font-size: 16pt\">Date And Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Match</span></label><br><br>";
			$('.IPLFix').html(dst);
			myMap.forEach(function(value, key) {

				//  console.log(key + " = " + value);
				var datas="<label><input type=\"checkbox\" checked disabled=\"disabled\"><i class=\"input-helper\"></i>"+"<span>"+value+"&nbsp;&nbsp;&nbsp;&nbsp;"+key+"</span>"+"</label><br><br>";
				$('.IPLFix').append(datas);
			}, myMap)
		}
	});
});