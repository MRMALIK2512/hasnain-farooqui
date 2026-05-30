import Image from "next/image";
import "./About.css";
import { Landmark, Vote, Award } from "lucide-react";

const stats = [
  {
    icon: Landmark,
    value: "25+",
    label: "Years Serving",
  },
  {
    icon: Vote,
    value: "3",
    label: "Election Wins",
  },
  {
    icon: Award,
    value: "2×",
    label: "Sabha Pathi",
  },
];

export default function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="about-intro-container">
        <div className="about-content">
          <span className="section-label">ABOUT</span>

          <h2 className="about-heading">
            25 Years of
            <br />
            Public Service
          </h2>

          <p className="about-description">
            For over two decades, public service has remained at the heart of
            every effort. From local governance to community leadership, the
            journey has been defined by trust, accessibility and a commitment to
            the people of Bhiwandi.
          </p>

          <div className="about-stats">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div className="about-stat" key={index}>
                  <Icon className="stat-icon" />

                  <div>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="about-illustration">
          <Image
            src="/about-building.png"
            alt="Heritage Illustration"
            width={700}
            height={700}
            className="about-building"
          />
        </div>
      </div>
    </section>
  );
}
