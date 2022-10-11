$(function(){
	getJson();
});

//json데이터 읽어오는 함수
function getJson(){
	//lib.json에서 데이터 가져옴->function(data)로 처리->data에 저장
	$.getJSON("json/lib.json",function(data){
		$.each(data,function(key,val){
				if(key=="DESC"){
					$("table").attr("border","1");
					$("thead").append(
						"<tr>"+
						"<th>" + val.airline + "</th>" +			
						"<th>" + val.flightId + "</th>" +	
						"<th>" + val.airport + "</th>" +	
						"<th>" + val.gatenumber + "</th>" +	
						"<th>" + val.scheduleDateTime + "</th>" +	
						"<th>" + val.airportCode + "</th>" +	
						"</tr>"
					)
				} else{
				var list = val;
				for(var i = 0; i<list.length; i++){
					var str = list[i];
					$("tbody").append(
						"<tr>"+
						"<td>" + str.airline + "</td>" +			
						"<td>" + str.flightId + "</td>" +
						"<td>" + str.airport + "</td>" +
						"<td>" + str.gatenumber + "</td>" +
						"<td>" + str.scheduleDateTime + "</td>" +
						"<td>" + str.airportCode + "</td>" +
						"</tr>"
					)
				}
			}
		});
	});
}