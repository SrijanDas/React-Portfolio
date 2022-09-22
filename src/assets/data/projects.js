// import ProjectImg from "../images/projectImg.png";
import ReactNewsImg from "../images/react-news.png";
import SocialsImg from "../images/socials.jpg";
import GroceryStoreImg from "../images/grocery-store.jpg";
import EcomImg from "../images/ecom_web.png";
import ImageClassificationImg from "../images/image_class.png";
import UsedCarPriceImg from "../images/car_price.png";
import SalaryPredImg from "../images/sal_pred.png";
import MrsaImg from "../images/mrsa.png";

const projects = [
  {
    id: 1,
    name: "Social Media Website",
    category: "webdev",
    desc: "A Website to connect with people and chat with them.",
    img: SocialsImg,
    tags: ["MongoDb", "Express", "React", "Node", "Firebase", "Heroku"],
    code: "https://github.com/SrijanDas/socials-ui",
    demo: "https://socials-2bccb.web.app/",
  },
  {
    id: 2,
    name: "E-Commerce Website",
    category: "webdev",
    desc: "ecommerce website",
    img: EcomImg,
    tags: ["Vuejs", "Django"],
    code: "https://github.com/SrijanDas/ecom-website-frontend",
    demo: "https://ecom-web-d16ae.web.app/",
  },
  {
    id: 3,
    name: "Grocery Store Management System",
    category: "webdev",
    desc: "This webapp helps to manage orders and products of a grocery store.",
    img: GroceryStoreImg,
    tags: ["React", "Python", "Flask", "MySql", "Heroku", "Firebase"],
    code: "https://github.com/SrijanDas/Grocery-Store-App-UI",
    demo: "https://github.com/SrijanDas/Grocery-Store-App-UI",
  },
  {
    id: 4,
    name: "React News",
    category: "webdev",
    desc: "React News shows you top news headlines of different categories.",
    img: ReactNewsImg,
    tags: ["React"],
    code: "https://github.com/SrijanDas/react-news",
    demo: "https://github.com/SrijanDas/react-news",
  },
  {
    id: 5,
    name: "Sports Person Classifier",
    category: "ml",
    desc: "Classifies images of sports persons.",
    img: ImageClassificationImg,
    tags: ["Python", "Flask", "Machine Learning", "JavaScript", "Heroku"],
    code: "https://github.com/SrijanDas/Sports-person-image-classification",
    demo: "https://sports-person-classify.netlify.app/",
  },

  {
    id: 6,
    name: "Movie Review Sentiment Analysis",
    category: "ml",
    desc: "This website recommends you movies based on your search history.",
    img: MrsaImg,
    tags: ["Python", "Flask", "Machine Learning", "Heroku"],
    code: "https://github.com/SrijanDas/movie-review-sentiment-analysis",
    demo: "https://mrsa.netlify.app/",
  },
  {
    id: 7,
    name: "Used Car Price Prediction",
    category: "ml",
    desc: "Helps you to calculate price of a used car with the help of machine learning.",
    img: UsedCarPriceImg,
    tags: ["Python", "Flask", "Machine Learning", "Heroku"],
    code: "https://github.com/SrijanDas/used-car-price-prediction",
    demo: "https://used-car-price-predic.herokuapp.com/",
  },
  {
    id: 8,
    name: "Developer Salary Prediction",
    category: "ml",
    desc: "Predicts the salary of developers based on some factors.",
    img: SalaryPredImg,
    tags: ["Python", "Machine Learning", "Streamlit", "Heroku"],
    code: "#",
    demo: "#",
  },
];

export default projects;
