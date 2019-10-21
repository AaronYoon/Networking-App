	/*
	$('#post').click(function() {
		$('#forumbox').append($('<li class="flex-item">').text('Hello'));
		$(this).insertAfter($('[class="flex-item"]').last());
	}); 

	*/

function openprofile() {
}

function postForum(){
	$('#forumbox').append($('<li class="flex-item">').text('Hello'));
	$(this).insertAfter($('[class="flex-item"]').last());
} 


function openForum() {
	document.getElementById("myForm").style.display = "block";
}
function closeForum() {
	document.getElementById("myForm").style.display = "none";
}

/*

document.getElementById("WRITEFORUM").addEventListener("click", e => {
	openForum();
});
document.getElementById("CLOSEFORUM").addEventListener("click", e => {
	closeForum();
});
document.getElementById("post").addEventListener("click", e => {
	postForum();
});

*/
//firebase

firebase.auth().onAuthStateChanged(user => {
	if(user) {
		getUserName();
	}
	else {
		window.location.href = "/login.html";
	}
});

const logoutbtn = document.getElementById("LOGOUTBTN");
const usernametxt = document.getElementById("USERNAME");

var firestore = firebase.firestore();
var userName = "";


var userDocRef = "";



function getUserName(){
	if (firebase.auth().currentUser !== null) {
		userDocRef = firestore.doc("Users/"+firebase.auth().currentUser.uid);
	}
	if (userDocRef !== "") {
		userDocRef.onSnapshot(function (doc) {
			if (doc && doc.exists) {
				const docdata = doc.data();
				usernametxt.innerHTML = "Welcome back " + docdata.UserName + "!";
			}
		});
	}	
}

realtimeUserUpdate = function() {
	getUserName();
};

logoutbtn.addEventListener("click", e => {
	firebase.auth().signOut();
});

// Need to grab the title from Firebase Document 
// Need to grab the forum text from Firebase Document

/*

function addPosts(){

	var posts = db.collection("Forum").doc("Puppy");

	userDocRef.get().then(function(doc){
		if(doc.exists){
			console.log("Document data: ", doc.data());	
			var asda = 
			`<div class = forumpost>
				<ul id = "forumbox" class = "flex-container"> 
					<h3>How do I train a puppy? </h3>
				</ul><br>
				<ul>Help me sign this petition to get this person into jail! Make a difference a change in the world.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam nibh, rhoncus eu posuere nec, blandit et diam. Integer laoreet elit enim, 
				sit amet vulputate nisi imperdiet id. In felis turpis, malesuada vel vestibulum bibendum, tristique vel sem. Mauris semper aliquam facilisis. Morbi 
				sodales aliquam tempus. Ut eu eros at turpis dictum condimentum et scelerisque tortor. Quisque ut odio sit amet mauris eleifend bibendum. Nam hendrerit, tellus in venenatis imperdiet, velit dolor faucibus augue, at efficitur turpis tellus eget urna. Aliquam eros neque, aliquam vel ipsum a, aliquet rutrum est. In finibus orci nunc, sed ultrices nulla aliquam quis.</ul>
			</div>`;

			$('#mainbody').append(asda);
		} else {
			console.log("No such document!");
		}
	}).catch(function(error){
		console.log("Error getting document: ", error);
	});
	$('#mainbody').append(posts);
	$('#mainbody').append(asda);

	
	var docRef = db.collection("Forum").doc("Puppy");
	docRef.get().then(function(doc) {
		if (doc.exists) {
			console.log("Document data:", doc.data(test));
			$('#forumlist').append(
				`<div class = forumpost>
					<ul id = "forumbox" class = "flex-container"> 
						<h3>How do I train a puppy? </h3>
					</ul><br>
					<ul>Help me sign this petition to get this person into jail! Make a difference a change in the world.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam nibh, rhoncus eu posuere nec, blandit et diam. Integer laoreet elit enim, 
					sit amet vulputate nisi imperdiet id. In felis turpis, malesuada vel vestibulum bibendum, tristique vel sem. Mauris semper aliquam facilisis. Morbi 
					sodales aliquam tempus. Ut eu eros at turpis dictum condimentum et scelerisque tortor. Quisque ut odio sit amet mauris eleifend bibendum. Nam hendrerit, tellus in venenatis imperdiet, velit dolor faucibus augue, at efficitur turpis tellus eget urna. Aliquam eros neque, aliquam vel ipsum a, aliquet rutrum est. In finibus orci nunc, sed ultrices nulla aliquam quis.</ul>
				</div>`);

				$('#forumlist').append(doc.data(test));

		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
		}).catch(function(error) {
			console.log("Error getting document:", error);
	});
}

/*

function postforum() {
    //var x = document.getElementById("myText").value;
    //document.getElementById("demo").innerHTML = x;
    
    var database = firebase.database();
    var ref = database.ref('newpost');
    console.log(firebase);

    var forumtitle = document.getElementById("forumtitle").value;
    var forumtext = document.getElementById("forumtext").value;

    var data = {
        forumtitle: forumtitle,
        forumtext: forumtext,
    };
    ref.push(data);
  }
  */


/*
// Show main recipe card with image and name
function showRecipeCard (recipe) {

	var recipeCard =
	`<div class="card m-3 overflow-hidden" data-toggle="modal" recipe-id=${recipe.id} data-target="#recipe-modal-${recipe.id}" style="width: 21rem; height: 21rem;" onclick="setCurrentRecipe(event)">
		<img src="" class="card-img-top" id="img-${recipe.id}" style="pointer-events:none">
		<div class="card-body py-1">
		  <div id="card-tags-${recipe.id}" class="row my-2 justify-content-center d-flex flex-nowrap overflow-hidden"></div>
		  <div class="row justify-content-center my-1 px-5">
			<h5 class="card-title text-center" style="line-height: 120%;">${recipe.recipeName}</h5>
		  </div>
		</div>
	</div>`;
  
	$('#recipe-card-container').append(recipeCard);
  
	// fetch recipe page and display modal
	var requestURL = 'https://api.yummly.com/v1/api/recipe/' + recipe.id + '?_app_id=' + API_ID + '&_app_key=' + API_KEY + '&maxResult=20';
	$.getJSON(requestURL, function (recipePage) {
	  showRecipeModal(recipePage);
	});
  }

  */