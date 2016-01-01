$(document).ready(function(){
$('#Inng').change(function(){
							 var Mac=$('#TeamA').val()+"-"+$('#TeamB').val();
							 if($('#Inng').val()=="1st innings"){
								
								 var table2="<div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-header\"><div class=\"table-responsive\"><table class=\"table table-striped\"><thead><tr><th>Name</th><th>Status</th><th>Runs</th><th>Balls</th><th>Sixes</th><th>Fours</th><th>S/R</th></tr></thead><tbody>";
								 var total;
								 var Name;var Status;var Runs;var Balls;var Sixes;var Fours;
								 $(js).find('Data').each(function(){
									
									if($(this).find('MatchBtw').text()==Mac){
									  
										if($(this).find('TeamName').text()==$('#TeamA').val()){
											
										Name=$(this).find('PlayerName').text();
										Status=$(this).find('PlayerStatus').text();
										Runs=$(this).find('Runs').text();
										Balls=$(this).find('Balls').text();
										Sixes=$(this).find('Sixes').text();
										Fours=$(this).find('Fours').text();
										total+=parseInt(Runs);
										table2+="<tr><td>"+Name+"</td>" +
												"<td>"+Status+"</td>" +
														"<td>"+Runs+"</td>" +
																"<td>"+Balls+"</td>" +
																		"<td>"+Sixes+"</td>" +
																				"<td>"+Fours+"</td>" +
																						"<td>"+(Runs/Balls)+"</td><td></td>";
										
										}
										}
									});
								 table2+="<tr><td></td><td></td><td></td><td></td><td></td><td>Total</td><td>"+total+"</td><td></td></tbody></table></div>";
									
									$('.DataTabe').html(table2);
									}else if($('#Inng').val()=="2nd innings"){
										var table3="<div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-header\"><div class=\"table-responsive\"><table class=\"table table-striped\"><thead><tr><th>Name</th><th>Status</th><th>Runs</th><th>Balls</th><th>Sixes</th><th>Fours</th><th>S/R</th></tr></thead><tbody>";
										var total;
										var Name;var Status;var Runs;var Balls;var Sixes;var Fours;
										$(js).find('Data').each(function(){
										if($(this).find('MatchBtw').text()==Mac){
										  
											if($(this).find('TeamName').text()==$('#TeamB').val()){
												
											Name=$(this).find('PlayerName').text();
											Status=$(this).find('PlayerStatus').text();
											Runs=$(this).find('Runs').text();
											Balls=$(this).find('Balls').text();
											Sixes=$(this).find('Sixes').text();
											Fours=$(this).find('Fours').text();
											total+=parseInt(Runs);
											table3+="<tr><td>"+Name+"</td>" +
													"<td>"+Status+"</td>" +
															"<td>"+Runs+"</td>" +
																	"<td>"+Balls+"</td>" +
																			"<td>"+Sixes+"</td>" +
																					"<td>"+Fours+"</td>" +
																							"<td>"+(Runs/Balls)+"</td><td></td>";
											
											}
											}
										});
										table3+="<tr><td></td><td></td><td></td><td></td><td></td><td>Total</td><td>"+total+"</td><td></td></tbody></table></div>";
										
										$('.DataTabe').html(table3);
								}
						});
});