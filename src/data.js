import screen1 from "./screen1.png"
import carbonfootprint from "./carbonfootprint.png"
import travelbucket from "./travelbucket.png"

export const projects = [
    {
        title: "Movie Time",
        subtitle: "React Native and Java/Spring Boot",
        description: "React Native App showing movies a user can add on to their watchlist or mark as favourites and get recommendations based upon these choices.",
        image: screen1,
        link: "https://github.com/mldrenth/Movies_App",
        mobile: true,
    },
    {
        title: "Carbon Footprint App",
        subtitle: "JavaScript and React",
        description: "An interactive carbon footprint tracker, that lets the user input their lifestyle choices and shows them how these impact the planet.",
        image: carbonfootprint,
        link: "https://carbon-footprint-app-a58e2.web.app/",
        mobile: false,
    },
    {
        title: "Travel Bucket List",
        subtitle: "Python and Flask",
        description: "Web application that lets the user keep track of all the countries, cities and sights they want to visit and have visited.",
        image: travelbucket,
        link: "https://github.com/mldrenth/travel_bucket_list",
        mobile: false,
    },
    
]

export const skills = [
    "Python", "JavaScript", "Java", "React", "React Native"
]