import "./portfolio.css";

const Portfolio = () => {
  // const soloProjects = [
  //   {
  //     id: 1,
  //     title: "Bookstore",
  //     img: IMG1,
  //     description:
  //       "BookStore app that allows users to store books and update progress",
  //     technologies: "React | Redux | Ruby on Rails",
  //     link: "https://melodic-boba-111583.netlify.app/",
  //     github: "https://github.com/Meri-MG/bookstore---react",
  //   },
  //   {
  //     id: 2,
  //     title: "FakeStore",
  //     img: IMG4,
  //     description:
  //       "FakeStore app that provides information about available products and their details",
  //     technologies: "React | Redux",
  //     link: "https://fakestore-metrics.netlify.app/",
  //     github: "https://github.com/Meri-MG/Fakestore---react",
  //   },
  //   {
  //     id: 3,
  //     title: "To-Do-App",
  //     img: IMG2,
  //     description: "User friendly app to plan your day and manage tasks",
  //     technologies: "JavaScript | Webpack",
  //     link: "https://meri-mg.github.io/To-Do-List/dist/",
  //     github: "https://github.com/Meri-MG/To-Do-List",
  //   },
  //   // {
  //   //   id: 4,
  //   //   title: 'Shelter',
  //   //   img: IMG3,
  //   //   description:
  //   //     'Fully responsive interactive website built based on Figma design',
  //   //   technologies: 'JavaScript | CSS',
  //   //   link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
  //   //   github: 'https://github.com/Meri-MG/shelter',
  //   // },
  //   // {
  //   //   id: 5,
  //   //   title: 'World News',
  //   //   img: IMG5,
  //   //   description:
  //   //     'Fully responsive interactive website built based on Adobe XD design',
  //   //   technologies: 'JavaScript | CSS',
  //   //   link: 'https://meri-mg.github.io/Unilab-world-news/',
  //   //   github: 'https://github.com/Meri-MG/Unilab-world-news',
  //   // },
  //   // {
  //   //   id: 6,
  //   //   title: 'Math Resource',
  //   //   img: IMG6,
  //   //   description:
  //   //     'Real-world group project which is still in progress and will provide educational platform for future young developers',
  //   //   technologies: 'JavaScript | Scss | Python',
  //   //   link: 'https://lukinoo.github.io/math-resource/',
  //   //   github: 'https://github.com/lukinoo/math-resource',
  //   // },
  // ];

  const soloProjects = [
    {
      id: 1,
      title: "Bookstore",
      img: "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/08/What-is-Computer-Vision-scaled.jpg",
      description: "This my first app in react and node",
      technologies: "Html | Css | Node",
      link: " ",
      github: " ",
    },
    {
      id: 2,
      title: "FakeStore",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWF6_IkpuA-BVIQyf2H8OlX2l46XuuAN_bgHG6An86cOuTDuHf4TR53vbt01ccyaytUTE&usqp=CAU",
      description:
        "FakeStore app that provides information about available products and their details",
      technologies: "React | Redux",
      link: " ",
      github: " ",
    },
    {
      id: 3,
      title: "To-Do-App",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      description: "User friendly app to plan your day and manage tasks",
      technologies: "JavaScript | Webpack",
      link: " ",
      github: " ",
    },
    // {
    //   id: 4,
    //   title: 'Shelter',
    //   img: IMG3,
    //   description:
    //     'Fully responsive interactive website built based on Figma design',
    //   technologies: 'JavaScript | CSS',
    //   link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
    //   github: 'https://github.com/Meri-MG/shelter',
    // },
    // {
    //   id: 5,
    //   title: 'World News',
    //   img: IMG5,
    //   description:
    //     'Fully responsive interactive website built based on Adobe XD design',
    //   technologies: 'JavaScript | CSS',
    //   link: 'https://meri-mg.github.io/Unilab-world-news/',
    //   github: 'https://github.com/Meri-MG/Unilab-world-news',
    // },
    // {
    //   id: 6,
    //   title: 'Math Resource',
    //   img: IMG6,
    //   description:
    //     'Real-world group project which is still in progress and will provide educational platform for future young developers',
    //   technologies: 'JavaScript | Scss | Python',
    //   link: 'https://lukinoo.github.io/math-resource/',
    //   github: 'https://github.com/lukinoo/math-resource',
    // },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
