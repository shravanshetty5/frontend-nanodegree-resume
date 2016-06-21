/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var awesomeThoughts = "I am Shravan and i am AWESOME!";
//var email = "shravanshetty.ec@gmail.com";
//var newEmail = email.replace("gmail","cisco");
var name = "Shravan Shetty";
//var role = "Software Developer Intern";
formattedName = HTMLheaderName.replace("%data%",name);
//formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").append(formattedName);
//$("#header").append(formattedRole);

var ContactInfo = {
  "email": "shravash@cisco.com",
  "mobile": "(979) 422 7984",
  "github":"shravanshetty5",
  "twitter":"",
  "location":"College Station, TX"
};

var skills = ['Python','NoSql','Java','MySQL','R','Data Analysis'];
var bio = {
  "Name" : "Shravan Shetty",
  "Role" : " Software Intern",
  "ContactInformation" : ContactInfo,
  "pictureURL":"images/me.jpg",
  "skills" : skills,
  "WelcomeMessage" : "Hi Guys, Thank you for taking the time to go through my profile"
};
formatedEmail = HTMLemail.replace("%data%",bio.ContactInformation.email)
$("#header").append(formatedEmail);

formatedMobile = HTMLmobile.replace("%data%",bio.ContactInformation.mobile)
$("#header").append(formatedMobile);

formatedGithub = HTMLgithub.replace("%data%",bio.ContactInformation.github)
$("#header").append(formatedGithub);

formatedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL)
$("#header").prepend(formatedBioPic);

//var work = {};
//work.currentPosition = "Software Intern";
//work.employer = "Cisco";
//work.years = "1 Month";
//work.city = "Dallas";

//Education Object
var education = {
	"schools": [{
		"Name": "Texas A&M University",
		"Majors": ["Management Information Sysytems"],
		"dates": "2015-2017",
    "degree":"MS",
		"location": "College Station, TX",
    "url":"https://www.tamu.edu/"
	}, {
		"Name": "NMAMIT Nitte",
		"Majors": ["ECE"],
		"dates": "2008-2012",
    "degree":"B.E",
		"location": "Managlore, KA",
    "url":"http://nmamit.nitte.edu.in/"
	}],
  "onlineCourses":[
    {
      "title":"JavaScript Basics",
      "school":"Udacity",
      "dates":"June 2016",
      "url":"https://classroom.udacity.com/courses/ud804"
    }
  ]
};

//WOrk Object
var work = {
	"jobs": [{
		"employer": "Cisco",
		"title": "Software Intern",
		"location": "Dallas, TX",
		"dates": "June 2016-Aug 2016",
		"description": "Working as a full stack developer on Atlas and Spark"
	}, {
		"employer": "Texas A&M University",
		"title": "Research Assistant",
		"location": "College Station, TX",
		"dates": "Aug 2015-May 2016",
		"description": "Worked on developing an application that integrates multiple safety databases"
	}, {
		"employer": "Accenture",
		"title": "Software Engineer",
		"location": "Hyderabad, AP",
		"dates": "Jan 2013-April 2015",
		"description": "ERP Developer working on CRM"
	}]
};



if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills){
    var skillsformated = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(skillsformated);
  }
}

function displayWork(){
  if (work.jobs.length > 0){
    for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formatedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formatedJobTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    $("#workExperience").append(formatedWorkEmployer + formatedJobTitle);

    var formatedWorkDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $("#workExperience").append(formatedWorkDate);

    var formatedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    $("#workExperience").append(formatedWorkLocation);

    var formatedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $("#workExperience").append(formatedWorkDescription);
    }
  }
};

displayWork();


function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1]
}

var projects = {
	"projects": [{
		"title": "System Safety Data Network",
		"dates": "Aug 2015-May 2016",
		"description": "This paper presents the current status in the design of the System Safety Database, a comprehensive object-oriented database capable of generating reports, statistics, and lessons learned from a variety of disparate system contexts.",
		"images": ["images/Database.png"]
	}]
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formatedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formatedProjectTitle);
    var formatedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formatedProjectDates);
    var formatedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formatedProjectDescription);

    if (projects.projects[project].images.length > 0) {
		    for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
  }
}
projects.display();

$("#main").append(internationalizeButton);

$("mapDiv").append(googleMap);

//employerName1 = HTMLworkEmployer.replace("%data%",work.employer);
//$("#main").append(employerName1)

//educationName1 = HTMLschoolName.replace("%data%",education.schools[0].school);
//$("#main").append(educationName1)
