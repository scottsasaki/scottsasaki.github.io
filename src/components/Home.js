import logo from 'images/taco.svg';

export default function Navigation() {
  return (
    <div>
      <section className="bg-pink welcome text-center">
        <div className="card hero" role="banner">
          <img src={logo} id="taco" className="taco" alt="Glowing Taco" />
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
          <div className="text-center">
            <span className="text-avoidwrap">I aim to build websites that are </span>
            <span className="text-avoidwrap">friendly and accessible</span>
            <span className="text-avoidwrap">regardless of ability or device.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
