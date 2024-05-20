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
    - Custom Hook for now playing movies
    - Updated store with movie data - movieSlice
    - Planning for main and secondary container
    - fetched data for trailer video
    - Update store with trailer video data
    - embedded youtube video and made it autoplay and mute
    - Added tailwind classes to make main container awesome
    - Created secondary container
    - fetched data for movie lists
    - Created movieCards
    - Used IMAGE_CDN_URL to get image for movie card
    - created useNowPlayingMovies hook and made it dynamic
    - Added CSS to movie list and card
    - created usePopularMovies custom hook to update movie list
    - GptSearch Page, GptSearchBar, GptSearch Button with toggle feature, g…
…ptSlice and addition to store

    
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
