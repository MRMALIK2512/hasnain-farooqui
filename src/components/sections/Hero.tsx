import Image from "next/image";
import { Users, Handshake, TrendingUp, Heart, LucideIcon } from "lucide-react";
import "./Hero.css";

type ValueItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  color: string;
};

const values: ValueItem[] = [
  { icon: Users, title: "People First", text: "Your needs, our priority always.", color: "gold" },
  { icon: Handshake, title: "Integrity", text: "Transparent leadership you can trust.", color: "green" },
  { icon: TrendingUp, title: "Development", text: "Building infrastructure for a better future.", color: "gold" },
  { icon: Heart, title: "Equality", text: "Working for every citizen, without discrimination.", color: "green" },
];

export default function Hero() {
  return (
    <section className="hero fade-in">
      <div className="hero-bg zoom-bg">
        <Image
          src="/background.png"
          alt="Hero Background"
          fill
          priority
          className="bg-image"
        />
      </div>

      <div className="hero-container">
        <div className="hero-left slide-left">
          <Image
            src="/hasnain_farooqui.png"
            alt="Hasnain Imtiaz Farooqui"
            width={580}
            height={760}
            priority
            className="hero-person float-image"
          />
        </div>

        <div className="hero-right slide-right">
          <div className="hero-tag">
            <div className="hero-line line-grow"></div>
            <span>For The People, Always</span>
          </div>

          <h1 className="hero-title">
            Leadership<span>.</span>
            <br />
            Service<span>.</span>
            <br />
            Better Bhiwandi<span>.</span>
          </h1>

          <p className="hero-desc">
            Committed to the progress, peace and prosperity of Bhiwandi.
            Together, let’s build a stronger tomorrow for our community.
          </p>

          <div className="hero-name">
            <h3>Hasnain I. Farooqui</h3>
            <p className="full-name">Hasnain Imtiaz Farooqui</p>
            <p className="location">Bhiwandi, Maharashtra</p>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary">Know More About Me →</button>

            <button className="btn-video">
              <span className="play-circle pulse-ring">▶</span>
              Watch Intro
            </button>
          </div>
        </div>
      </div>

      <div className="hero-cards-wrapper">
        <div className="hero-cards">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="card card-hover" key={index}>
                <Icon className={`card-icon ${item.color}`} strokeWidth={1.8} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}