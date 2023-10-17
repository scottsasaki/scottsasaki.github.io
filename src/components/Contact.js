import headshot from 'images/scott-sasaki.png';

export default function Contact() {
  return (
    <section className="bg-pink" id="contact">
      <h2>Contact</h2>
      <div
        className="glass text-center"
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <img src={headshot} alt="Cool looking guy" width="81" loading="lazy" />

        <div> If you would like to work together please send an email to</div>

        <div>
          <a href="mailto:scott@tacos.vegas">scott@tacos.vegas</a>
        </div>
      </div>
    </section>
  );
}
