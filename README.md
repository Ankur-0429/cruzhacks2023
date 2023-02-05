# SlugSwap

## 💡 Inspiration
Our inspiration was first looking at the prizes that had some themes. We were interested in the topic of what can help UCSC! When brainstorming, we initially thought that the gym could be something to create an app for, but with further ideation, we landed upon Slug Points! Something that students struggle with are having too many points and some not having food at all. With Slug Points being implemented last quarter, many students struggled on what to do with the money they spent for food not being used. We looked at Reddit to understand students’ needs and concerns about Slug Points as we did not have time to interview students. After, we decided, why not do something about this food problem?! Everybody eats!


## 💻 What it does
With our app you can transform the way you save on meals with our app. Connect with peers for quick and effortless exchange of unused meal points. Our user-friendly interface and secure platform make it easy for students to trade points in real-time. Users are able to message each other to discuss details for meeting up. In addition, with our rating system, users can build trust and avoid scams. 

## ⚙️ How we built it
In terms of design, we first brainstormed ideas on what the overall purpose of the app was. What is the point of this? Why would students use this? Who are our competitors? After brainstorming ideas on what we wanted to include, especially in the posts students would make, we made low-fidelity sketches which later we turned into digital prototypes. These prototypes later became high-fidelity prototypes with images, colors, and connections on Figma.

For programming, we built the app using React Native for the frontend, Firebase to manage data, and websockets for messages between users. We used Expo Go to run the app on our phones. We made sure to constantly test it to ensure that requesting and messaging went through.

## 🧠 Challenges we ran into
For design, we faced challenges on how certain buttons should look and to not make our design too complicated for the purposes of time and understanding that programmers would have a lot of work. We decided to focus on the main parts of our app and tested it multiple times so that our designs made sense when clicking certain buttons. The main parts were seeing students’ posts, logging in, and being able to make a post yourself. Focusing on the main aspects was sometimes difficult as we wanted to add more, however, constraining ourselves and reminding ourselves of the main purpose of the app that will actually help students. It’s important to remember the USERS, empathize with them, just because something looks well does not mean it’s easy to use.

The nature of React Native websockets caused it to read from firebase excessive amounts of times. From there, we had to optimize what websockets were used for to ensure an app that consumes more resources.

For programming, a big challenge we ran into was our Firebase quota expiring. Due to us not properly maintaining the websockets, some parts of the app caused tons of socket requests, the main culprit being the photo selector in the profile customization menu, our Firebase app exceeded its quota of requests. We ultimately decided to buy a paid plan with a $20 budget to ensure our demo doesn't cost too much money.


## 🏅 Accomplishments that we're proud of
We are really proud of how the overall design went as we were able to create a high-fidelity prototype that already looked like an app within itself! With how the overall app design looks and feels, especially within this time frame, we are proud of how much we were able to create. 

For programming, we were able to create a messaging system using web sockets and authenticate users using the Google Cloud Console for Google Authentication as well as Apple Authentication. This took us a while because we would run into constant errors every time we tested it, but through not giving up, we eventually got it to work.



## 📖 What we learned
We honed our skills in cross-functional teamwork by effectively communicating with UX/UI designers and programmers. Our focus on collaboration and team management resulted in seamless project execution and delivered outstanding results. Being in a hackathon, it can feel daunting as one may only have skills in designing or only have skills in programming. However, with our collaboration of programmers and designers, we were able to communicate, brainstorm, and learn from one another much easier in a healthy environment. It gave us more insight as to what the professional world will look like through a collaborative, fast-paced lense! Although we did not implement everything we wanted to, we are so so proud of how much we were able to accomplish with the time we have and we are totally satisfied! 

## 🚀 What's next for SlugSwap
With more time, we would allow students affiliated with UCSC to use the app for safety and trust for all users. Similar to logging into your school portal, you can only be a student from UCSC. 

With more time, we would’ve added a rating system based upon whether you liked the person you met to exchange points. This can be used to evaluate how much trust can be put into these people to ensure they’re no ghosts or troll accounts. In addition, we would also add filtering for easy use for users to identify certain dining halls and ratings.

Built With
Figma, React Native, Firebase, Websockets 


Try It Out Links
Figma, code repository, demo
Figma: https://www.figma.com/file/o9DRjbAYXaFYDJGnwar4CV/SlugSwap?node-id=0%3A1&t=lh0TFCoX6rdGsA54-0
Code Repository: https://github.com/Ankur-0429/cruzhacks2023

Image Gallery 

