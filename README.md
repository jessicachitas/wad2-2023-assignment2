# Assignment 2 - Web API Assignment 2

Name: Jessica Chitas

## Features.

 + Added Upcoming Movies Page
 + Added Trending Movies Page

## Setup requirements.

Clone this repo:

```
git clone https://github.com/jessicachitas/wad2-2023-assignment2.git
```

Install npm on the nesseccary files using the command line:

In one cmd:
```
cd movies-api
npm install
npm run dev
```

In a seperate cmd: 

```
cd reactApp
npm install
npm start
```

## API Configuration

Created an `.env` file and what variables to put in it. Below is an example of how this might be done.

______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb+srv://<username>:<password>@movies.vyordho.mongodb.net/movies?retryWrites=true&w=majority
SEED_DB=True
SECRET=ilikecake
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 
- /api/movies/tmdb/upcoming | GET | Gets upcoming movies from TMBD database
- /api/movies/tmdb/trending | GET | Gets trending movies from TMBD database


## Security and Authentication

Has user functionality, can register a new user and log in with an existing user.

## Independent learning (if relevant)

None 
