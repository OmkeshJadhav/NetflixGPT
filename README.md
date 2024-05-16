# Netflix-GPT

## Configuration
- Install Create-react-app
- Install TailwindCSS
- Setup Routing
- Setup Github Repo

## Features
- Home (Not loggedIn)
    - SignIn / SignUp form
        - Sign In/Up header
        - Sign In form - Email field, Password field, Sign In button
        - Sign Up form - Name field, Email field, Password Field
        - On successful login redirect to browse page / If tried to go to browse without auth re-direct to signIn page
    - Form Validation using RegEx
    - Firebase setup
    - Deploying app to production
    - Authentication using firebase
    - Setup Redux store with userSlice
    - Implemented Signout
    - Updated Name and Profile : Update Profile API from firebase
    - BugFix : IF user is not loggedin redirect to login/browse page and vice-versa.
    - Unsubscribed to onAuthStateChanged callback 
    - Registered for TMDB API + token and key
    - Configured and Made API call for Now Playing Movie list API
    
- Browse Page (Only comes after authentication)
    - Header
    - video/movie trailer playing in the background
    - Movie Title and Description
    - Play Button
    - Description Button
    - Movies list as rows which 
        - scrolls horizontally
        - Scale on hover

- NetflixGPT
    - Searchbar
    - Movie suggestions
