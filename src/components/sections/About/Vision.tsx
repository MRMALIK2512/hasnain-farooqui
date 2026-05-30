import Image from "next/image";
import "./About.css";

export default function Vision() {
  return (
  <section className="thought-section">
  <div className="thought-main-card">

    <div className="quote-mark">“</div>

    <h2>
      Mere Naam Ki Pehchan Mere Kaam Se h
    </h2>

    <div className="thought-divider" />

    <p>
      Every election may define a term,
      but public service is a lifelong responsibility.
    </p>

    <span className="thought-signature">
      — For the People, Always.
    </span>

    <Image
      src="/about-building.png"
      alt=""
      width={700}
      height={700}
      className="thought-building"
    />

  </div>
</section>
  );
}