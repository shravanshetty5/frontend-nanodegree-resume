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
  "location":"College Station"
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
		"location": "College Station",
    "url":"https://www.tamu.edu/"
	}, {
		"Name": "NMAMIT Nitte",
		"Majors": ["ECE"],
		"dates": "2008-2012",
    "degree":"B.E",
		"location": "Managlore",
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
		"location": "Dallas",
		"dates": "June 2016-Aug 2016",
		"description": "Working as a full stack developer on Atlas and Spark"
	}, {
		"employer": "Texas A&M University",
		"title": "Research Assistant",
		"location": "College Station",
		"dates": "Aug 2015-May 2016",
		"description": "Worked on developing an application that integrates multiple safety databases"
	}, {
		"employer": "Accenture",
		"title": "Software Engineer",
		"location": "Hyderabad",
		"dates": "Jan 2013-April 2015",
		"description": "ERP Developer working on CRM"
	}]
};

var projects = {
  projects: [
    {
      "title":"System Safety Data Network",
      "dates":"Aug 2015-May 2017",
      "description":"This paper presents the current status in the design of the System Safety Database, a comprehensive object-oriented database capable of generating reports, statistics, and lessons learned from a variety of disparate system contexts.",
      "images":[]
    }
  ]
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
//employerName1 = HTMLworkEmployer.replace("%data%",work.employer);
//$("#main").append(employerName1)

//educationName1 = HTMLschoolName.replace("%data%",education.schools[0].school);
//$("#main").append(educationName1)
