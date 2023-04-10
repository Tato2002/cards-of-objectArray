

let usersDiv = document.querySelector("#Users")


let users = [
{
	imageUrl: "https://i.insider.com/5df7b8a679d75701fb6bb3a5?width=700",
	name: "George",
	lastName: "giorgadze",
	age: 18,
	regDate: "2/14/2023",
	courseType: "international relations",
	attendance: 80,
	scholarship: true
},
{
	imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-109478107-1514328996.jpg",
	name: "Salome",
	lastName: "Beridze",
	age: 16,
	regDate: "6/7/2022",
	courseType: "computer science",
	attendance: 70,
	scholarship: false
},
{
	imageUrl: "https://blogs-images.forbes.com/natalierobehmed/files/2017/08/x-1-1200x800.jpg",
	name: "Mariam",
	lastName: "Imnadze",
	age: 25,
	regDate: "9/27/2012",
	courseType: "computer science",
	attendance: 90,
	scholarship: true
},
{
	imageUrl: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49111/article_full%403x.jpg",
	name: "Irakli",
	lastName: "Leselidze",
	age: 14,
	regDate: "12/4/2013",
	courseType: "international justice",
	attendance: 60,
	scholarship: false
},
{
	imageUrl: "https://i.insider.com/612f86d79ef1e50018f92070?width=700",
	name: "Nino",
	lastName: "Iremadze",
	age: 23,
	regDate: "6/18/2019",
	courseType: "tourism",
	attendance: 50,
	scholarship: false
},
{
	imageUrl: "https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2014/11/GeorgeClooney.jpg?ssl=1",
	name: "Levan",
	lastName: "Beridze",
	age: 17,
	regDate: "5/26/2017",
	courseType: "global politics",
	attendance: 100,
	scholarship: true
}
];






function displayUsers(usersArray) {

let usersDiv = document.querySelector("#Users")

usersDiv.innerHTML = "";

	for (const user of usersArray) {
		
	let ageBadge;
	let attendanceBadge;
	let scholarshipBadge;
	let regDateBadge;
	let courseTypeBadge;

	if (user.age >= 18) {
		ageBadge = '<span class="badge rounded-pill text-bg-success d-block">Age:18+</span>'
	} else {
		ageBadge = '<span class="badge rounded-pill text-bg-warning d-block">minor</span>'
	}
	
	if (user.attendance >= 80) {
		attendanceBadge = '<span class="badge rounded-pill text-bg-success d-block">successful</span>'
	} else {
		attendanceBadge = `<span class="badge rounded-pill text-bg-warning d-block">attendance: ${user.attendance}%</span>`
	}

	if (user.scholarship) {
		scholarshipBadge = '<span class="badge rounded-pill text-bg-success d-block">scholarship holder</span>'
	} else {
		scholarshipBadge = '<span class="badge rounded-pill text-bg-warning d-block">non-scholarship</span>'
	}

	if (Number(user.regDate.slice(-4)) >= 2022) {
		regDateBadge = `<span class="badge rounded-pill text-bg-success d-block">Reg.date: ${user.regDate}</span>`
	} else {
		regDateBadge = `<span class="badge rounded-pill text-bg-secondary d-block">Reg.date: ${user.regDate}</span>`
	}

	if (user.courseType === "computer science") {
		courseTypeBadge = `<span class="badge rounded-pill text-bg-primary d-block">course: ${user.courseType}</span>`
	} else {
		courseTypeBadge = `<span class="badge rounded-pill text-bg-secondary d-block">course: ${user.courseType}</span>`
	}

let cardContent = `
<div class="card col-md-3 d-inline-block">
	  <img src="${user.imageUrl}" class="card-img-top" alt="...">
	  	<div class="card-body text-center">
	    	<h4 class="card-title">${user.name} ${user.lastName}</h4>
	    	<h3 class="card-text">Age: ${user.age}</h3>
	    	${courseTypeBadge}
	    	${scholarshipBadge}
	    	${regDateBadge}
	    	${ageBadge}
	    	${attendanceBadge}
	  	</div>
</div>
`
usersDiv.innerHTML += cardContent;
}
}


displayUsers(users)

let legalBtn = document.querySelector(".mwvane");
let illegalBtn = document.querySelector(".stafilo"); 
let allBtn = document.querySelector(".lurji");
let searchInput = document.querySelector(".search");


	// 	let filteredUsers = users.filter(function(user) {
	// 	return user.scholarship == true
	// })
	// displayUsers(filteredUsers)


legalBtn.addEventListener("click", function() {
	 	let filteredUsers = users.filter(function(user) {
		return user.age >= 18;
	})
	displayUsers(filteredUsers)
});

illegalBtn.addEventListener("click", function() {
	 	let filteredUsers = users.filter(function(user) {
		return user.age < 18;
	})
	displayUsers(filteredUsers)
});

allBtn.addEventListener("click", function() {
	 	displayUsers(users)
});

// searchInput.addEventListener("input", function() {
// 	usersDiv.innerHTML = ""
// 	let userName = this.value;
// 	let filteredUsers = users.filter(function(user) {
// 		return user.name.includes(userName) || user.lastName.includes(userName);
// 	})
// 	displayUsers(filteredUsers)
// });

searchInput.addEventListener("keydown", function() {
	if (event.key === "Enter") {
		usersDiv.innerHTML = ""
 	let userName = this.value;
 	let filteredUsers = users.filter(function(user) {
 		return user.name.includes(userName) || user.lastName.includes(userName);
 	})
 	displayUsers(filteredUsers)
	}

	if (this.value.length <= 1) {
		usersDiv.innerHTML = "";
		displayUsers(users)
	}
})



