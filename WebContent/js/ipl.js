$(document).ready(function(){
	$('.ipl').on('click',function(){
		$('#IP').removeClass("").addClass("active");
		$('#mai').removeClass("active").addClass("");
		$('#OD').removeClass("active").addClass("");
		$('#TS').removeClass("active").addClass("");
		var js;
		var condtion=0;
		
		$.ajax({
			url:"Teams",
			type:"GET",
			async:true,
			success:function(response){
				js=$.parseXML(response);
				var value,set=new Set();
				var Page="<div class=\"col-sm-3\"><div style=\"color: white; font-size:14pt;\" >Team A:</div><div class=\"select\"><select id=\"TeamA\"  class=\"form-control\"><option>Choose First Team</option>";
				$(js).find("Data").each(function(){
					var title=$(this).find('TeamName').text();
						set.add(title);
				});
				for (value of set) {
					Page+="<option>"+value+"</option>"; 
				}
				
				Page+="</select></div></div><div class=\"MyCont\"></div>";
				
				$('#pages').html(Page);
				
				$('#TeamA').change(function(){
					var value,set1=new Set();
					var Tem2="<div class=\"col-sm-3\"><div style=\"color: white; font-size:14pt;\" >Team B:</div><div class=\"select\"><select id=\"TeamB\"  class=\"form-control\"><option>Choose Second Team</option>";
					$(js).find("Data").each(function(){
						var ttl=$(this).find('TeamName').text();
						if($('#TeamA').val()!=ttl){
							set1.add(ttl);
						}
					});
					for (value of set1) {
						Tem2+="<option>"+value+"</option>";   
					}
					Tem2+="</select></div></div><div class=\"innings\"></div>";
						$('.MyCont').empty();
					$('.MyCont').html(Tem2);
					
					$('#TeamB').change(function(){
						var inn="<div class=\"col-sm-3\"><div style=\"color: white; font-size:14pt;\" >Inning:</div><div class=\"select\"><select id=\"Inng\"  class=\"form-control\"><option>1st innings</option><option>2nd innings</option></select></div></div><div class=\"MatchHead\"></div><div class=\"Result\"></div><div class=\"DataTabe\"></div>";
						$('.innings').html(inn);
						
						
						
						var Mac=$('#TeamA').val()+"-"+$('#TeamB').val();
						if($('#Inng').val()=="1st innings"){
							var table1="<div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-header\"><div class=\"table-responsive\"><div style=\"font-size: 14pt\" align=\"center\"><b>BATTING</b></div><table class=\"table table-striped\" Style=\"font-size:11pt\"><thead><tr><th>Name</th><th>Status</th><th>Runs</th><th>Balls</th><th>Sixes</th><th>Fours</th><th>S/R</th></tr></thead><tbody>";
							var tableBowl="<div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-header\"><div class=\"table-responsive\"><div style=\"font-size: 14pt\" align=\"center\"><b>BOWLING</b></div><table Style=\"font-size:11pt\" class=\"table table-striped\"><thead><tr><th>Name</th><th>Overs</th><th>Runs</th><th>Wickets</th><th>E/R</th></tr></thead><tbody>";
							var total=0;var totalBat=0;
							var Name;var Status;var Runs;var Balls;var Sixes;var Fours;var typeP;var Overs; var GRun;var Wickets;
							var Result;
							$(js).find('Data').each(function(){
								
								
								if($(this).find('MatchBtw').text()==Mac){
									Result="<div><br></div><div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-header\" style=\"font-size: 14pt\"><b>Result:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+$(this).find('MatchStatus').text()+"</div></div></div>";
								if($(this).find('TeamName').text()==$('#TeamA').val()){
									if($(this).find('PlayerStatus').text()!="NotPlayed"){
								Name=$(this).find('PlayerName').text();
								Status=$(this).find('PlayerStatus').text();
								Runs=$(this).find('Runs').text();
								Balls=$(this).find('Balls').text();
								Sixes=$(this).find('Sixes').text();
								Fours=$(this).find('Fours').text();
								totalBat+=parseInt(Runs);
								var numb=((Runs/Balls)*100);
								numb=numb.toFixed(2);
								table1+="<tr><td>"+Name+"</td>" +
										"<td>"+Status+"</td>" +
												"<td>"+Runs+"</td>" +
														"<td>"+Balls+"</td>" +
																"<td>"+Sixes+"</td>" +
																		"<td>"+Fours+"</td>" +
																				"<td>"+numb+"</td><td></td>";
									}
								}
								}
							});
							
								var over=0;
								 $(js).find('Data').each(function(){
										
										if($(this).find('MatchBtw').text()==Mac){
										  
								if($(this).find('TeamName').text()==$('#TeamB').val()){
									if($(this).find('TypeP').text()=="Bowler"){
											tableBowl+="<tr><td>"+$(this).find('PlayerName').text()+"</td>"+
															"<td>"+$(this).find('Overs').text()+"</td>"+
															     "<td>"+$(this).find('RunsBowl').text()+"</td>"+
															          "<td>"+$(this).find('Wickets').text()+"</td>"+
															          "<td>"+((parseFloat($(this).find('RunsBowl').text())/parseFloat($(this).find('Overs').text())).toFixed(2))+"</td>";;
											over+=parseFloat($(this).find('Overs').text());
											total+=parseInt($(this).find('RunsBowl').text());
									}
								}
								
								
							
								}
								
							});
							$('.Result').html(Result);
							table1+="<tr><td>Total</td><td>("+over+"overs)</td><td></td><td></td><td>(Extras="+(total-totalBat)+")</td><td></td><td>"+total+"</td><td></td></tbody></table></div></div></div></div><br><div class=\"Bowl\"></div>";
							tableBowl+="<tr></tbody></table></div></div></div></div>";
							$('.DataTabe').html(table1);
							$('.Bowl').html(tableBowl);
						}
						
						/****************************************************************************************************************************************************/
						$('#Inng').change(function(){
							 var Mac=$('#TeamA').val()+"-"+$('#TeamB').val();
							 if($('#Inng').val()=="1st innings"){
								
								 var table2="<div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-header\"><div class=\"table-responsive\"><div style=\"font-size: 14pt\" align=\"center\"><b>BATTING</b></div><table Style=\"font-size:11pt\" class=\"table table-striped\"><thead><tr><th>Name</th><th>Status</th><th>Runs</th><th>Balls</th><th>Sixes</th><th>Fours</th><th>S/R</th></tr></thead><tbody>";
								 var tableBowl2="<div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-header\"><div class=\"table-responsive\"><div style=\"font-size: 14pt\" align=\"center\"><b>BOWLING</b></div><table Style=\"font-size:11pt\" class=\"table table-striped\"><thead><tr><th>Name</th><th>Overs</th><th>Runs</th><th>Wickets</th><th>E/R</th></tr></thead><tbody>";
								 var total=0;var totalBat=0;
								 var Name;var Status;var Runs;var Balls;var Sixes;var Fours;var typeP;var Overs; var GRun;var Wickets;
								 $(js).find('Data').each(function(){
									
									if($(this).find('MatchBtw').text()==Mac){
									  
										if($(this).find('TeamName').text()==$('#TeamA').val()){
											if($(this).find('PlayerStatus').text()!="NotPlayed"){
										Name=$(this).find('PlayerName').text();
										Status=$(this).find('PlayerStatus').text();
										Runs=$(this).find('Runs').text();
										Balls=$(this).find('Balls').text();
										Sixes=$(this).find('Sixes').text();
										Fours=$(this).find('Fours').text();
										totalBat+=parseInt(Runs);
										var numb=((Runs/Balls)*100);
										numb=numb.toFixed(2);
										table2+="<tr><td>"+Name+"</td>" +
												"<td>"+Status+"</td>" +
														"<td>"+Runs+"</td>" +
																"<td>"+Balls+"</td>" +
																		"<td>"+Sixes+"</td>" +
																				"<td>"+Fours+"</td>" +
																						"<td>"+numb+"</td><td></td>";
										}
										}
									}
									});
										var over=0;
										 $(js).find('Data').each(function(){
												
												if($(this).find('MatchBtw').text()==Mac){
												  
										if($(this).find('TeamName').text()==$('#TeamB').val() && $(this).find('TypeP').text()=="Bowler"){
												
													tableBowl2+="<tr><td>"+$(this).find('PlayerName').text()+"</td>"+
																	"<td>"+$(this).find('Overs').text()+"</td>"+
																	     "<td>"+$(this).find('RunsBowl').text()+"</td>"+
																	          "<td>"+$(this).find('Wickets').text()+"</td>"+
																	          "<td>"+((parseFloat($(this).find('RunsBowl').text())/parseFloat($(this).find('Overs').text())).toFixed(2))+"</td>";;
													over+=parseFloat($(this).find('Overs').text());
													total+=parseInt($(this).find('RunsBowl').text());
										}
										
										}
										 
									});
								 table2+="<tr><td>Total</td><td>("+over+"overs)</td><td></td><td></td>(Extras="+(total-totalBat)+")<td></td><td></td><td>"+total+"</td><td></td></tbody></table></div></div></div></div><br><div class=\"Bowl\"></div>";
									tableBowl2+="<tr></tbody></table></div></div></div></div>";
									$('.DataTabe').html(table2);
									$('.Bowl').html(tableBowl2);
									}else if($('#Inng').val()=="2nd innings"){
										var table3="<div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-header\"><div class=\"table-responsive\"><div style=\"font-size: 14pt\" align=\"center\"><b>BATTING</b></div><table Style=\"font-size:11pt\" class=\"table table-striped\"><thead><tr><th>Name</th><th>Status</th><th>Runs</th><th>Balls</th><th>Sixes</th><th>Fours</th><th>S/R</th></tr></thead><tbody>";
										 var tableBowl3="<div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-header\"><div class=\"table-responsive\"><div style=\"font-size: 14pt\" align=\"center\"><b>BOWLING</b></div><table Style=\"font-size:11pt\" class=\"table table-striped\"><thead><tr><th>Name</th><th>Overs</th><th>Runs</th><th>Wickets</th><th>E/R</th></tr></thead><tbody>";
										var total=0;var BatTotl=0;
										var Name;var Status;var Runs;var Balls;var Sixes;var Fours;var typeP;var Overs; var GRun;var Wickets;
										$(js).find('Data').each(function(){
										if($(this).find('MatchBtw').text()==Mac){
										  
											if($(this).find('TeamName').text()==$('#TeamB').val()){
												if($(this).find('PlayerStatus').text()!="NotPlayed"){
											Name=$(this).find('PlayerName').text();
											Status=$(this).find('PlayerStatus').text();
											Runs=$(this).find('Runs').text();
											Balls=$(this).find('Balls').text();
											Sixes=$(this).find('Sixes').text();
											Fours=$(this).find('Fours').text();
											BatTotl+=parseInt(Runs);
											var numb=((Runs/Balls)*100);
											numb=numb.toFixed(2);
											table3+="<tr><td>"+Name+"</td>" +
													"<td>"+Status+"</td>" +
															"<td>"+Runs+"</td>" +
																	"<td>"+Balls+"</td>" +
																			"<td>"+Sixes+"</td>" +
																					"<td>"+Fours+"</td>" +
																							"<td>"+numb+"</td><td></td>";
											}
											}
											
											
											}
										});
										var over=0;
										$(js).find('Data').each(function(){
											if($(this).find('MatchBtw').text()==Mac){
												if($(this).find('TeamName').text()==$('#TeamA').val() && $(this).find('TypeP').text()=="Bowler"){
													
													tableBowl3+="<tr><td>"+$(this).find('PlayerName').text()+"</td>"+
																		"<td>"+$(this).find('Overs').text()+"</td>"+
																		     "<td>"+$(this).find('RunsBowl').text()+"</td>"+
																		          "<td>"+$(this).find('Wickets').text()+"</td>" +
																		          		"<td>"+((parseFloat($(this).find('RunsBowl').text())/parseFloat($(this).find('Overs').text())).toFixed(2))+"</td>";
													over+=parseFloat($(this).find('Overs').text());
													total+=parseInt($(this).find('RunsBowl').text());
											}
											
											
											}});
										
										
										
										table3+="<tr><td>Total</td><td>("+over+"overs)</td><td></td><td>(Extras="+(total-BatTotl)+")</td><td></td><td></td><td>"+total+"</td><td></td></tbody></table></div></div></div></div><br><div class=\"Bowl\"></div>";
										tableBowl3+="<tr></tbody></table></div></div></div></div>";
										$('.DataTabe').html(table3);
										$('.Bowl').html(tableBowl3);
								}
						});
						
						/****************************************************************************************************************************************************/
						});
					});
				},
			error:function(error){
				alert("There is some Error");
			}
			
			
		});
	
});});