import headshot from '../images/scott-sasaki.png';

export default function Contact() {
  return (
    <section className="bg-pink" id="contact">
      <h2>Contact</h2>
      <div className="glass text-center">
        <img src={headshot} alt="Cool looking guy" width="81" loading="lazy" />

        <div> If you would like to work together please send an email to</div>
        <span className="name-first">SCOTT</span>
        <span className="name-last">SASAKI</span>
        <a href="mailto:scott@tacos.vegas">scott@tacos.vegas</a>
      </div>
    </section>
  );
}
