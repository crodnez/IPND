// Object 1
var bio = {
	"name": "Chanceller Rodnez",
	"role": "IT Professional",
	"contacts": {
		"mobile": "404-641-8646",
		"email": "crodnez@atl.yearup.org",
		"github": "github.com/crodnez",
		"twitter": "twitter.com/crodnez",
		"location": "Atlanta, Georgia"
	},
	"welcomeMessage": '"An emerging professional cultivated in the areas of Project Coordination and Quality Assurance that strives for nothing but excellence by fusing innovative ideas with a resilient work ethic."',
	"skills": ["&checkmark;&nbsp; Project Management", "&checkmark;&nbsp; Front-End Development", "&checkmark;&nbsp; Agile Methodologies"],
	"biopic": "https://goo.gl/DZwkDl",
	"display": function() {
		var fmtName = HTMLheaderName.replace("%data%", bio.name);
		var fmtRole = HTMLheaderRole.replace("%data%", bio.role);
		var fmtMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var fmtEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var fmtGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var fmtTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var fmtLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var fmtMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		var fmtPic = HTMLbioPic.replace("%data%", bio.biopic);

		$("#header").prepend(fmtRole);
		$("#header").prepend(fmtName);
		$("#topContacts").append(fmtMobile, fmtEmail, fmtGithub, fmtTwitter, fmtLocation);
		$("#footerContacts").append(fmtMobile, fmtEmail, fmtGithub, fmtTwitter, fmtLocation);
		$("#header").append(fmtPic);
		$("#header").append(fmtMsg);
		$("#header").append(HTMLskillsStart);

		for (var skill in bio.skills) {
			var fmtSkills = HTMLskills.replace("%data%", bio.skills[skill]);

			$("#skills").append(fmtSkills);
		}
	}
};


// Object 2
var education = {
	"schools": [
		{
			"name": "Atlanta Metropolitan State College",
			"location": "Atlanta, Georgia",
			"degree": "(In Progress)",
			"majors": ["Comuputer Science"],
			"dates": "2013-2015",
			"url": "http://www.atlm.edu/"
		},
		{
			"name": "Year Up - Atlanta Chapter",
			"location": "Atlanta, Georgia",
			"degree": "(In Progress)",
			"majors": ["Information Technology"],
			"dates": "2015 - Present",
			"url": "http://www.yearup.org/"
		},
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming",
			"school": "Udacity",
			"date": "2015 - Present",
			"url": "http://www.udacity.com/"
		},
	],
	"display": function () {

		if (education.schools) {
			var schools = education.schools;

			for (var school in schools) {
				$("#education").append(HTMLschoolStart);
				var schoolAndDegree = HTMLschoolName.replace("%data%", schools[school].name)
													.replace("%url%", schools[school].url);
				schoolAndDegree += HTMLschoolDegree.replace("%data%", schools[school].degree);
				var fmtDates = HTMLschoolDates.replace("%data%",  schools[school].dates);
				var fmtMajors = HTMLschoolMajor.replace("%data%", schools[school].majors.join(", "));
				var fmtLocation = HTMLschoolLocation.replace("%data%",  schools[school].location);

				$(".education-entry:last").append(schoolAndDegree, fmtDates, fmtLocation, fmtMajors);
			}
		}

		if (education.onlineCourses) {
			var eCourses = education.onlineCourses;

			$("#education").append(HTMLonlineClasses);

			for (var course in eCourses) {
				$("#education").append(HTMLschoolStart);

				var titleAndSchool = HTMLonlineTitle.replace("%data%", eCourses[course].title)
													.replace("%url%", eCourses[course].url);
				titleAndSchool += HTMLonlineSchool.replace("%data%", eCourses[course].school);

				var fmtDate = HTMLonlineDates.replace("%data%", eCourses[course].date);

				// I'm not sure why this is needed, so I put the url in the school name hotlink.
// 					var fmtUrl = HTMLonlineURL.replace("%data%", eCourses[course].url)
// 											  .replace("%url%", eCourses[course].url);

				$(".education-entry:last").append(titleAndSchool, fmtDate);
			}
		}
	}
};


// Object 3
var work = {
	"jobs":[
		{
			"employer": "GE Energy Connections",
			"title": "Function Tool Project Manager (Intern)",
			"location": "Atlanta, Georgia",
			"dates": "2016 - Present",
			"description": "Responsible for working directly with the Product Management team to ensure that successful products and projects are delivered to clients."
		},
		{
			"employer": "ARMY National Guard",
			"title": "Healthcare Specialist",
			"location": "Charlotte, North Carolina",
			"dates": "2007 - 2015",
			"description": "Responsible for the training, sustainment, and well-being of 878th Eng. Company."
		},
	],
	"display": function() {

		for (var i=0; i < work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);

			var fmtEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var fmtTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var empTitle = fmtEmployer + fmtTitle;
			var fmtDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var fmtLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var fmtDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			$(".work-entry:last").append(empTitle, fmtDates, fmtLocation, fmtDescription);
		}
	}
};


// Object 4
var projects = {
	"projects":[
		{
			"title": "Sound Gardé",
			"dates": "2015",
			"description": "Website created to provide and highlight great music that's ahead of the crowd.",
			"images": ["http://goo.gl/VEKPh9", "http://goo.gl/mnViqy", "http://goo.gl/ehpOZB"]
		},
	],
	"display": function() {

		for (var i=0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);

			var fmtTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var fmtDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var fmtDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(fmtTitle, fmtDates, fmtDescription);

			for (var img in projects.projects[i].images) {
				var fmtImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);

				$(".project-entry:last").append(fmtImage);
			}
		}
	}
};


// Animates the navigation menu on page load
$("nav").animate({
	width: "50px"
}, 1500);

// Displays or hides the navigation menu
$("nav, nav li").click(function() {
	if ($("nav").css("width") === "50px") {
		$("nav").animate({
			width: "200px"
		}, function() {
			$("nav ul").css({
				"display": "block",
				"position": "absolute",
				"z-index": "1",
				"top": "52px",
				"padding-bottom": "10px",
				"width": "200px",
				"background-color": "#000000"
			});
		});
	}
	else {
		$("nav").animate({
			width: "50px"
		});
		$("nav ul").css("display", "none");
	}
});


// Modular functions
bio.display();
work.display();
projects.display();
education.display();


// Displays Google Map
$("#mapDiv").append(googleMap);