$(function () {
	
var data = [
	{ label: "Voted with majority", data: Math.floor (Math.random() * 100 + 650) }, 
	{ label: "Voted against majority", data: Math.floor (Math.random() * 100 + 250) }, 
	{ label: "Abstained from vote", data: Math.floor (Math.random() * 100 + 50) }
];
			
Charts.donut ('#donut-chart', data);
	
});