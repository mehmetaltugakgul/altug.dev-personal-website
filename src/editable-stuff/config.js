// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mehmet",
  middleName: "Altuğ",
  lastName: "Akgül",
  message: "Electrical / Software Engineer @PapilonSavunma",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mehmetaltugakgul",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/mehmetaltugakgul",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/mehmetaltugakgul",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mehmetaltugakgul",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/altugakgul",
    },
  ],
};



const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/1.jpg"),
  imageSize: 375,
  message:
    "Electrical electronics / software engineer. He was born in 1995 in Ankara. Graduated from Master of Business Administrations. He is studying Management Information Systems as the second university. He works as a Software Engineer in the Product Strategy department of Papilon Savunma. He is interested in art, plays the baglama and the oud",
  resume: "https://www.linkedin.com/in/mehmetaltugakgul/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "mehmetaltugakgul", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/1.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/1.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 75 },
    { name: "SQL", value: 80 },
    { name: "Databases", value: 75 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 85 },
    { name: "React", value: 85 },
    { name: "HTML/CSS", value: 90 },
    { name: "Flutter", value: 60 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 87 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I usually focus full time on product strategy and software development. You can reach me through my social media channels and e-mail address. I will return as soon as possible. --> ",
  email: "mehmetaltugakgul@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/Resim1.png'),
      date: 'Jan 2022 – Present',
    },
    {
      role: 'Software Development Asistant Specialist',
      companylogo: require('../assets/img/Resim1.png'),
      date: 'Aug 2021 – Jan 2022',
    },
    {
      role: 'Research Asistant Specialist',
      companylogo: require('../assets/img/Resim1.png'),
      date: 'Oct 2020 – Aug 2021',
    },
    {
      role: 'E-Commerce Software and Database Specialist',
      companylogo: require('../assets/img/logo pg.png'),
      date: 'Oct 2018 – Oct 2020',
    },
    {
      role: 'Digital Marketing Specialist',
      companylogo: require('../assets/img/fokusAkademiCalisma-e1512823236190.png'),
      date: 'Nov 2017 – Jul 2020',
    },
    {
      role: 'Web Design and Social Media Specialist',
      companylogo: require('../assets/img/vatozlogo.png'),
      date: 'May 2013 – Jun 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
