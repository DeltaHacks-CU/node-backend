# Welcome to Streats
The best way to find some great eats!

## Our team
Colin McCormack - Full Stack - https://github.com/orgs/DeltaHacks-CU/people/colin-mccormack
Kevin Wu - Frontend Developer - https://github.com/orgs/DeltaHacks-CU/people/kevinwu15
Ryan Zhang - Backend Developer - https://github.com/orgs/DeltaHacks-CU/people/kevinwu15
Aekus Singh - Ai Specialist - https://github.com/orgs/DeltaHacks-CU/people/ayekus

---
### Inspiration
For our project, we wanted to help a group of people in need of support. We decided that we wanted to help street vendors because they got hit hard by COVID regulations and the decrease in traffic. Everywhere around the world street vendors have a huge impact on the community and culture with their delicious foods so we wanted to make a project that could return the favour and boost their businesses back up.

### What it does
With Streats, we are putting them on the map. Streats is an app that allows people to find and share unique street food. This gives street vendors exposure that they normally would not get from sources like Google Maps.

Upon accessing the web app, users can view a map which displays markers where other users have found food vendors. Upon discovering a food vendor, users can add it to the map, sharing the type of vendor, food ethnicity, a brief description, and a rating. Upon clicking a marker on the map, the corresponding information will be displayed

### How we built it
In order to complete our project we all took on new roles that allowed us to learn a variety of different technologies and interfaces.

Our front-end map interface is made of simple html//js with bootstrap taking care of our css. We made use of the free open-source mapping software Leafletjs in order to create our map. In order to securely deal with sign in we made use of google’s authentication api’s and sign in workflow.

Our back-end was built with Nodejs and Expressjs. We used Postgresql in order to store data on all marker locations. We chose to store our data in a relational database since we planned on keeping the same structure for data with each entry so it made sense to use a structured database. Furthermore the performance benefits of a NoSQL database would not benefit us since out data is returned in bulk and would require us to iterate through each entry anyway. We made use of a REST architecture style with our backend code consisting of api’s and middleware. We have a secure authentication style that uses middleware to authenticate data stored using the session npm package.

Our artificial intelligence was created using Google Colab. We built our own training model in order to accurately identify food trucks when users submit photos to our backend. Unfortunately we ran out of time and were unable to integrate image verification to our app as an api. Despite this unfortunate setback, our ai works as a standalone project to verify that the image provided is in fact a food truck.

### Challenges we ran into
We came across a variety of issues while developing our app including file issues when attempting to download photos from users as well as issues restricting users access and issues implementing middleware. Building the ai was also extremely difficult since we first attempted to use Jupyter and Tensorflow which unfortunately did not work out forcing us to pivot to Google Collab on the second day with only hours remaining.

### Accomplishments that we're proud of
This was the first Hackathon for ¾ of our members. We all had to get out of our comfort zones by working with technologies that we had little experience with. More importantly, we are extremely proud of how well we were able to adjust to each other and work as a team. Our communication and peer support was the reason we could create the product that we developed with this little time.

### What we learned
Since it was the first Hackathon for a lot of us, it was also the first time some of worked us on a collaborative project at this scale. Because of this, we learned a lot about collaborating with Github. Additionally, new tech…

### What's next for Streats
We plan on finishing the integration with the ai with our app to complete the project. We genuinely believe that this is a project that is in demand. We are looking to polish the app to let the public use it.

### Built With
express.js, google-identity, leaflet.js, node.js, postgresql, python

## Next steps
- Integrate Ai with live app
- Setup photo binding to popup
- Hosting and set up domain
- Monetization 
> - Setting up google analytics to collect data
> - Subscription based admin privleges (vendors)
> - ...?

## Contact
Check our team or for questions about the repository please contact contact.developer.colin@gmail.com