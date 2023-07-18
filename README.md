# Hack2skill_Assignment2

<p align = "center">
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
 <img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 
<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
  
</p>


**Backend:** Node, Express, MongoDB Atlas

**Frontend:** HTML, CSS ,Javascript


## Docker
 - Image created on Docker you can pull the docker image by using: docker pull nikhil0954/hack2skillassignment


## Features 
 - Save youtube Videos data in mongoDB atlas
 - Fetch videos data according to published time
 - Pagination avalable 


###  Run Locally Clone this Project

```
https://github.com/nikhiljangra0954/Hack2skill_Assignment2
```
### Runs the project in the development mode

[http://localhost:8088](http://localhost:8088)



**NPM Package**
```
 {
    "Axioss": "^1.4.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.3.4",
    "nodemon": "^3.0.1"
  }
```

**Schema**
```
{
    title: { type: String, required: true },
    description: { type: String },
    publishTime: { type: Date ,required: true},
    thumbnail: { type: String , required : true },
}
```

  #### Run Locally
```javascript
  step 1- clone the Repo 
  step 2- Install all dependencies npm install
  step 3- npm run server
  step 4- can also clone the image from Docker
```


## API Endpoints
```javascript
GET http://localhost:8088/api/cricketVideo
```

## Pagination 
-- BY default limit is 10 and page 1
```javascript
GET http://localhost:8088/api/cricketVideo?page=1&limit=10
```

## Search with title and description
```javascript
GET http://localhost:8088/api/search?q=cricket
```

| `Authors` |
| :-------: | 

[Nikhil](https://github.com/nikhiljangra0954)
