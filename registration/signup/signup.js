// User class
function User(username, password) {
    this.username = username;
    this.password = password;
}

// Authentication factory function
function Authentication() {
    var users = [];  // storing the new users in an empty array

    function createUser(username, password) {
        var user = new User(username, password)
        users.push(user)
    }
    // when a new user is created it get's pushed in the users array (storage)

    function loginUser(username, password) {
        // using the find method we serch for the user in 
        //the users array
        
        var foundUser = users.find(function(user) {
            // the find method take an anonymos function as param that 
            //returns the users username and password
            return user.username === username && user.password === password
        })
        return foundUser // last step we return founduser 
    }

    return {
        createUser: createUser, // create user method (creation)
        loginUser: loginUser // loginUSER METHOD (check)
    }
}

// Authentication instance :
var auth = Authentication()

//hide sign-up card 
$('#signup-card').hide()

// Show signup button by clicking
$('#showSignupBtn').click(function() {
    $('#signup-card').show()
})


// Sign up button click event
$('#signupBtn').click(function() {
    var username = $('#newUsername').val()
    var password = $('#newPassword').val()
    //trim() method to ensure that the input is not empty
    if (username.trim() !== '' && password.trim() !== '') {
        auth.createUser(username, password)
        alert('Account created successfully!')
        // Automatically log in the user
        $('#signup-card').hide()

        // Hide the sign up page  after successful signup
        window.location.href ="./profile/profile.html"
    } else {
        alert('Please enter a valid username and password.')
    }
})


