//formatting index.html using javascript, Stage 5 Project by Chanceller Rodnez

//prepend role, then name
var role = "IT Professional";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

var name = "Chanceller Rodnez";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

//include bio pic
var bioPic = "images/pic.jpg";
var bio = "bioPic";
var formattedbioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").prepend(formattedbioPic);

//create bio object -- json lint validated
var bio = {
    "name": "Chance",
    "role": "Student",
    "welcomeMsg": "An emerging professional cultivated in the areas of Project Coordination and Quality Assurance that strives for nothing but excellence by fusing innovative ideas with a resilient work ethic.",
    "skills": ["HTML", "CSS", "Python", "Agile Methodologies", "Project Management"],
    "contacts":
        {
        "mobile": "404.641.8646",
        "email": "crodnez@atl.yearup.org",
        "github": "github.com/crodnez",
        "location": "Atlanta, GA"
        }
  }

//display bio information
bio.display = function() {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
  $("#header").append(formattedWelcomeMsg);  

  //if info in skills section, display (if statement)
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills [4]);
    $("#skills").append(formattedSkill);
  }
};
  
  //display bio info
  bio.display();

//create work object -- json lint validated
var work = {
  "jobs": [
  {
  "employer": "GE Energy",
  "role": "IT Project Manager (Intern)",
  "location": "Atlanta, GA",
  "dates": "January 2016 - present",
  "description": "Responsible for working directly with the Product Management team to ensure that successful products and projects are delivered to clients. "
  },
  {
  "employer": "ARMY National Guard",
  "role": "Healthcare Specialist (68 WHISKEY)",
  "location": "Charlotte, NC",
  "dates": "November 2007 - November 2015",
  "description": "Responsible for the training, sustainment, and well-being of 878th Eng. Company."
  }  
  ]
}

//display work object
work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].role);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedworkLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    }
}

  //call work function
  work.display();

//create project object
var projects = {
  "projects": [
    {
    "title":"SoundeGarde.com",
    "dates":"2015",
    "description":"Website created to provide and highlight great music that's ahead of the crowd.",
    "images": "images/sg2.png"
    }
    ]
}


//display projects info
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
    $(".project-entry:last").append(formattedImage);
  }
}

  //call display function
  projects.display();


  //create education object, ok on jsonlint
  var education = {
    "schools": [
        {
          "name": "Atlanta Metropolitan State College",
          "degree": "(In Progress)",
          "dates": "2013 - 2015",
          "url": "http://www.atlm.edu",
          "major": "Computer Science"
          },
          {
          "name": "Year Up Atlanta",
          "degree": "(In Progress)",
          "dates": "2015 - Present",
          "url": "http://www.yearup.org",
          "major": "Information Technology"
          }
        ],
   
    "onlineCourses": [
        {
        "title": "Intoduction to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2015 - Present",
        "url": "http://www.udacity.com"
        }
      ]
}

  education.display = function (){
    for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("#", education.schools.url);
      $(".education-entry:last").append(formattedSchoolName);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
      $(".education-entry:last").append(formattedSchoolDegree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
      $(".education-entry:last").append(formattedSchoolDates);
      var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);
    }
  
    $(".education-entry:last").append(HTMLonlineClasses);

    for(var onlineCourse in education.onlineCourses) {
      formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title).replace("#", education.onlineCourses[onlineCourse].url);
      formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
      formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
      $(".education-entry:last").append(formattedOnlineDates);
      formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url).replace("#", education.onlineCourses[onlineCourse].url);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }

  //display education
  education.display();


  //internationalize name display
  function inName(name) {
    var name_var = name.trim().split(" ");
    name_var[0] = name_var[0].slice(0,1).toUpperCase() + name_var[0].slice(1).toLowerCase();
    name_var[1] = name_var[1].toUpperCase();
    return name_var[0] + " " + name_var[1];
  };

   //display international name
  inName(name);

  //append internationalize button
  $("#main").append(internationalizeButton);
  
  //append google map
  $("#mapDiv").append(googleMap);
