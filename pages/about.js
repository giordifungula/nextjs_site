import Layout from '../components/Layout';

const About = () => (
  <Layout>

    <h1>About Me</h1>
    <ul className="company-info">
      <li>
        <span className="company">Giordi Fungula</span>
      </li>
      <li>Streets of the Cape</li>
      <li>Cape Town, ZA</li>
      <li>
        <a href="mailto:jodi.fungula@gmail.com">email</a>
      </li>
    </ul>
    <div className="about-text">
      <img src="/static/about/studio.jpeg" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut est euismod, iaculis ante efficitur, sodales
        nisl. Nulla non orci vitae nibh ullamcorper finibus. Morbi a nisl tempor, sodales ex quis, aliquet neque. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Praesent gravida a diam ut faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed sed nibh a ipsum sagittis finibus ac in magna. Curabitur id mauris quis nulla commodo
        tristique.
      </p>
      <p>
        Nunc eu mi et justo sodales vehicula. Vestibulum velit erat, tincidunt sed tortor id, viverra egestas felis.
        Cras in ullamcorper ex. Etiam diam lacus, interdum sed rhoncus vel, ultricies ut nisi. Nam ut orci at ante
        auctor mollis. Phasellus eget augue ac nibh vestibulum pellentesque. Nulla enim augue, placerat id malesuada at,
        maximus sed tortor.
      </p>
    </div>
    <style jsx>{`
      .company-info {
        margin: 0 0 100px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
        background: linear-gradient(to left, #000,#fff);
      }
      .company {
        font-weight: 700;
        font-size: 24px;
      }
      .about-text {
        color: #777;
        text-align: left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding: 20px;
      }
      img {
        float: right;
        margin: 10px 0 20px 20px;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}</style>
  </Layout>
);

export default About;