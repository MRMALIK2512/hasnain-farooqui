import "./About.css";
import {
  Flag,
  Trophy,
  X,
  Star,
} from "lucide-react";

const timeline = [
  {
    year: "2002",
    title: "First Victory",
    status: "won",
    icon: Flag,
    details: [
      "Indian National Congress",
      "Corporator elected",
      "Panel with Salauddin Ansari & Husu Mushtaque",
    ],
  },

  {
    year: "2007",
    title: "Re-Elected",
    status: "won",
    icon: Trophy,
    details: [
      "Indian National Congress",
      "Won second term",
      "Selected as Sabhapathi – Prabhag 01",
    ],
  },

  {
    year: "2012",
    title: "Election Contested",
    status: "lost",
    icon: X,
    details: [
      "Indian National Congress",
      "Contested with Ishrat Ansari",
    ],
  },

  {
    year: "2017",
    title: "Election Contested",
    status: "lost",
    icon: X,
    details: [
      "Nationalist Congress Party",
      "Panel of four candidates",
    ],
  },

  {
    year: "2025",
    title: "Historic Victory",
    status: "historic",
    icon: Star,
    details: [
      "NCP (Sharad Pawar Faction)",
      "Historic majority of 10,225 votes",
      "Largest margin in Bhiwandi history",
      "Selected again as Sabhapathi",
    ],
    votes: "10,225 Votes",
  },
];

export default function Journey() {
  return (
    <section className="journey-section">
      <div className="journey-header">
        <span>POLITICAL JOURNEY</span>

        <h2>
          A Journey of
          <br />
          Dedication
        </h2>
      </div>

      {/* DESKTOP */}

      <div className="journey-desktop">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`milestone ${item.status}`}
            >
              {item.status === "historic" && (
                <div className="historic-rays" />
              )}

              <div className="circle">
                {item.status === "historic" ? (
                  <Star
                    size={42}
                    fill="currentColor"
                    stroke="currentColor"
                  />
                ) : (
                  <Icon
                    fill={
                      item.status === "won"
                        ? "currentColor"
                        : "none"
                    }
                  />
                )}
              </div>

              {item.status === "historic" ? (
                <>
                  <h2>{item.year}</h2>

                  <h3>{item.title}</h3>

                  <div className="votes">
                    {item.votes}
                  </div>

                  <p>
                    Largest margin in Bhiwandi history
                  </p>

                  <span className="badge historic">
                    HISTORIC WIN
                  </span>
                </>
              ) : (
                <>
                  <h3>{item.year}</h3>

                  <h4>{item.title}</h4>

                  <span
                    className={`badge ${item.status}`}
                  >
                    {item.status.toUpperCase()}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* MOBILE */}

      <div className="journey-mobile">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`mobile-step ${item.status}`}
            >
              <div className="mobile-icon">
                {item.status === "historic" ? (
                  <Star
                    fill="currentColor"
                    stroke="currentColor"
                  />
                ) : (
                  <Icon
                    fill={
                      item.status === "won"
                        ? "currentColor"
                        : "none"
                    }
                  />
                )}
              </div>

              <div className="mobile-content">
                
                <h3>{item.year}</h3>

                <h4>{item.title}</h4>

                <span
                  className={`badge ${item.status}`}
                >
                  {item.status === "historic"
                    ? "HISTORIC WIN"
                    : item.status.toUpperCase()}
                </span>

                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}