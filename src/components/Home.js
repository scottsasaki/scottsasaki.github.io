import logo from 'images/taco.svg';

export default function Navigation() {
  return (
    <div>
      <section className="bg-pink welcome text-center">
        <div className="card hero" role="banner">
          <img src={logo} id="taco" className="taco" alt="Glowing Taco" width="300" height="300" />
          <div className="greeting">Hello,</div>
          <div>
            <div>My name is </div>
            <div className="strong">Scott Sasaki</div>
            <div> and I do</div>

            <div className="strong">Frontend Web Development</div>
            <div>Remotely and in Las&nbsp;Vegas</div>
          </div>
        </div>
      </section>
      <section>
        <h2 id="philosophy">Philosophy</h2>
        <div
          className="card"
          style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="text-center">
            The web is a place for <em>everyone</em>.
          </div>
          <div className="text-center text-avoidwrap">
            I aim to build websites that are friendly and accessible regardless of ability or
            device.
          </div>
        </div>
        <div
          className="card"
          style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            Most recently I worked with enterprise companies to modernize customer facing tools and
            features. On the surface that means migrating legacy systems to React or Vue, but if you
            dive deeper there is more than Javascript. As part of the cross-functional team I work
            with design to audit accessibility, usability and feasibility. I work with product
            owners to plan, point and prioritize features. I work with backend developers to
            understand limitations and provide a path forward. I work with fellow frontend
            developers to upskill, test and build products that will scale and be performant and
            maintainable with an eye on developer experience.
          </div>
        </div>
      </section>
    </div>
  );
}
