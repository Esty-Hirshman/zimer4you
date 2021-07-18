### Zimer4you system 


to run the project please run in terminal main folder:
```
    npm install
    npm start
```
### watch demo:
https://youtu.be/sTDEAulN4-s

make sure the localstorage of port 3051 is clean
 
In this project there is a connection between server and client.
#### server
The server is running on port 8080
http://localhost:8080
data is saved in mongoDbAtlas. db name is Tzimmers and the collections are:
1. user - with validations of name, id, email, password avd valid password in sighnIn and in login.
    when sighnIn an email will be sent to the user
2. zimerOwner - Saves zimers owners and reservations for their zimers
3. zimers - saves all zimers data, validation of zimer when ziner added
4. chat - chat data
4. questions - Q&A data
there is validation in server and in client, Which constituted a high level of security to prevent errors and glitches
All the data base is in the Mongo Atlas
Data can be accessed in a server not through the client via the URL's as can be seen in the service files.

#### client
cliect run on port 3051
http://localhost:3051
Details on the site:
The zimer 4 you system mediates between zimers owners and customers who are interested in looking for a zimers for a vacation. When the site is a zimers advertising platform on the part of zimers owners in the country and on the other hand is a search engine for various zimerss in a variety of areas and prices all over the country for people who are looking for a perfect zimers for a pampering vacation and do not know where to find it.
The site has three types of users with different privileges:
##### 1.
 Guest user - may visit the site, view the existing zimers variety, filter by different search categories, compare prices, and search for a zimers, see the photos, read about it and the comments of the guests in the zimers, read about the site, see the frequently asked questions and read the The answers are for them, but he will not be able to choose dates, contact zimers owners, rate a zimers, add zimerss to the list of places he likes or chat with zimers owners and other users.
##### 2.
 User - may search for zimerss, filter by different search categories, add zimerss he is debating to the list of places he liked by clicking on the "Like" icon above each zimers, be able to be impressed by any zimers using photos, text and comments from people, He will be able to contact the owners of the zimers by filling in his personal details and receiving an email to start the conversation, he will be able to choose available dates in the zimers and save them, he will be able to read about the site and frequently asked questions, also chat in the site with the zimers owners and users. Better, he will also be able to rate the zimerss and add comments both after he has stayed in the zimers or from his general impression.

##### 3.
 zimers owner - can view all zimerss on the site as a guest user (to see his competitors 😊)
He will also be able to add the zimers he owns to the advertisement by a one-time payment of 150 NIS and enjoy extensive advertising on the site, the advertising option is easy and convenient to use, all he has to do is enter the zimers details and photos, pay and this, his zimers is famous.
He will also be able to enter the list of reservations at his zimers and view the details of the bookers in case any of them have not yet contacted him and will even be able to see the booking dates in order to prepare properly.


### Details on the site:
##### home page :
 On the home page, which can be reached from anywhere by clicking on the Zimmer For You logo, the user can start browsing the site with pleasure by going to "Let's get started"

##### Choose a zimers:
 Here all the existing zimerss will be displayed, where at the top of the table you can filter zimerss according to various parameters such as location, categories (pool, view, Jacuzzi, etc.), number of beds and price range. Filtering will save the user a lot of time searching for the zimers.
Each zimers is presented by a main picture, its location, price and whether it has a pool.
If the user is undecided about a particular zimers and does not want to go in to read about it at length, he can click on the "like" icon above each zimers, so this zimers will enter the list of places he liked and save him the next time he enters the site so he can remember which zimerss he is interested in.
And check them out in depth later.

Clicking on zimers I liked at the top of the site from wherever you are - will open this list of zimerss. Clicking on which of them will take you to the zimers page with the full details. You can remove zimerss from the list and clean it completely.

Clicking on a specific zimers in the general zimers list will take you to the zimers page where you can be impressed by the photo gallery by flipping through arrows, you can read about the zimers, you can contact the zimers owner by filling in details such as email address and phone name, then you will receive an email from the zimers owner To the email address entered.
You can select dates by clicking on Select dates, where a calendar will open and selecting a specific date and tapping "Save me this date" will give a message that the date is occupied if it is indeed occupied by other customers or "The date is saved for you" if not occupied, then Clicking on "Grab my zimers" will save the reservation and the zimers owner will contact the user about his visit to the zimers.
You can be impressed and read other users' comments about the zimers and see how much they rated it,
Also on the page of each zimers, a Google map will appear with the location of the zimers to plan how to get there.

##### about:
There you can read about the site, who it is for, what it has and a detail that explains to the user what to do and how to work on it to make the browsing experience more comfortable.

##### Common questions:
There are frequently asked questions about the site that may arise for anyone, by clicking on the icon next to the question the answer will appear as detailed as possible.

##### Login and / or registration:
A guest user can enter the system as a registered user by going through the user icon in the navigation menu and selecting one of the options - login as a user or login as a zimers. In each selection, the login window will open with two options - login or register.
To log in, the user must enter the email address with which they registered to the system and the password.
To register as a customer, the user must enter a username, email address and password, and to register as a zimers, the user must enter his zimers name and password.
After logging in, the user account can be viewed by clicking on the user icon in the navigation, where you can also change the password.
After registering a new user, he will immediately receive an email from zimers For You thanking him for registering.
When logging in to the account, if the user forgot a password, you can receive a new password by e-mail by selecting the Forgot password option.
When entering as a zimers owner, you can choose the option to add my zimers for a one-time payment of 150 NIS through People to secure the payment. The owner of the zimers must fill in all the details of his zimers, including photos for display in the gallery, and immediately after that, users will be able to view his zimers.
In addition, a zimers owner can enter his order list to see the status of the reservations and the details of the customers and contact them if he has not yet created.

###### chat:
From anywhere on the site you can enter the chat located at the bottom of the page (provided they are registered and not in guest mode)
And chat with other users or zimers owners, the username will appear on the user's call balloon.

I hope you enjoy this website as many hours and effort went into building it.
### Zimer4you team

For the development of the site I used the following directories:
        react-toastify
        react-bootstrap
        react-router-dom
        react geocode
        react-calendar
        google-maps-react
        react-star ratings
        
        


