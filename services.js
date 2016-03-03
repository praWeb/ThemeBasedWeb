var app = angular.module("services",[]);

app.service("BasicInformation", function(){

	var basicInfo = this;

	var data = [
		{
			"firstName" : "prasanna",
			"lastName"  : "virigineni",
			"dob"		: "07/08/1991",
			"isMarried"	: "yes",
			"educationDetails":{
				"degree" : "MBA",
				"college": "LBS",
				"completion" : "10/10/2018",
				"isCompleted" : "yes"
			}
		},
		{
			"firstName" : "sravan",
			"lastName"  : "virigineni",
			"dob"		: "07/08/1994",
			"isMarried"	: "no",
			"educationDetails":{
				"degree" : "MBA",
				"college": "LBS",
				"completion" : "10/10/2018",
				"isCompleted" : "yes"
			}
		},
		{
			"firstName" : "pavan",
			"lastName"  : "gaddam",
			"dob"		: "27/08/1987",
			"isMarried"	: "yes",
			"educationDetails":{
				"degree" : "MBA",
				"college": "LBS",
				"completion" : "10/10/2018",
				"isCompleted" : "yes"
			}
		},
		{
			"firstName" : "varun",
			"lastName"  : "gaddam",
			"dob"		: "01/09/1991",
			"isMarried"	: "no",
			"educationDetails":{
				"degree" : "MBA",
				"college": "LBS",
				"completion" : "10/10/2018",
				"isCompleted" : "yes"
			}
		}
	];

	basicInfo.data = data;

	return{
		"data" : basicInfo.data
	};

});