
# 500.5px

500.5px is a single-page, web app clone of 500px, an online pohotography portfolio site.
500.5px uses a Ruby on Rails backend, with PostgresSQL as the database. React and Redux 
constitute the frontend of the web app.   

![Splash Image](readme_resources/splash_img.png)

# Key Features 

## User Profiles 

Users can sign in, sign up or use the demo login to try the website. 

![Sign Up Image](readme_resources/sign_up.png)

Profile picture and background image for each user is randomly generated and assigned after the user credentials are verified
![Code Snippet for signing up](readme_resources/user_creation.png)


## Uploading Photos 

Users can upload their pictures to the website

![Upload Image](readme_resources/upload.png)

Users can visit the picture show page to edit pictures, delete pictures, comment, like or follow the artist.

![Picture Show Image](readme_resources/pic_detail.png)

When closing a picture, the following method is run. 
![Closing Image](readme_resources/closing_pic.png)
This turns a boolean to true in state, thereby changing the class that is applied to the picture show page. The following CSS animation keyframes run. Midway through the animation, the timeout is complete and the feed page is pushed to the URL, giving the impression that the picture faded out
![Closing Image](readme_resources/closing_pic_animation.png)


![Picture Show Image](readme_resources/pic_detail_2.png)


## Profile Page 

Users can visit other users' profiles. On the profile, users can see all the pictures uploaded by other users,
follow the user, see the followers, and people followed of that user. In their own profile page, users can change 
their background or profile pictures.


![Profile Image](readme_resources/profile.png)

## Feed page

After signing in or signing up, users are taken to the feed page


![Feed Page Image](readme_resources/feed_page.png)



## Development Log

### Week 1

* Made authentication 
* Finished the Splash page 
* created backend for Pictures using aws 
* Made backend for Likes, Follows and Comments

### Week 2

* Made Picture Show page, Likes for Pictures
* Added feature to edit and delete pictures
* Made Comments feature
* Added Likes to Comments
* Made Profile page
* Added Follows feature 
* Added deleting Comments feature
* Added feature to change background and Profile Picture
