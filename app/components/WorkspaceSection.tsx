import styles from "./WorkspaceSection.module.scss";
import { workspaceSection } from "../content/workspace";
import { ArrowRight, CalendarRange, MapPin, Users, Wifi } from "lucide-react";

const highlights = [
  {
    icon: Wifi,
    title: "Enterprise WiFi",
    copy: "Fast, reliable internet built for focused work, hybrid teams, and smooth collaboration.",
  },
  {
    icon: Users,
    title: "Team-ready",
    copy: "Flexible setups that work for solo sessions, small teams, and client meetings.",
  },
  {
    icon: CalendarRange,
    title: "Flexible booking",
    copy: "Browse spaces, compare options, and secure the right room in just a few steps.",
  },
];

export default function WorkspaceSection() {
  const browseUrl = `${workspaceSection.bookingBaseUrl}${workspaceSection.browsePath}`;

  return (
    <section className={styles.workspaceSection} id="workspace" data-aos="fade-up">
      <div className="container">
        <div className={styles.workspaceGrid}>
          <div className={styles.copyColumn} data-aos="fade-right">
            <div className={styles.kickerRow}>
              <span className={styles.kicker}>Premium coworking spaces</span>
              <span className={styles.kickerNote}>Book in minutes</span>
            </div>
            <h2>{workspaceSection.title}</h2>
            <p className={styles.description}>{workspaceSection.description}</p>

            <div className={styles.locationCard} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.locationLabel}>
                <MapPin size={16} strokeWidth={2.3} />
                Location
              </div>
              <p>{workspaceSection.location}</p>
            </div>

            <div className={styles.actions} data-aos="fade-up" data-aos-delay="150">
              <a
                href={browseUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Explore workspaces
                <ArrowRight size={18} strokeWidth={2.3} />
              </a>
            </div>
          </div>

          <div className={styles.highlightsColumn} data-aos="fade-left">
            <div className={styles.highlightsHeader}>
              <p>Workspace highlights</p>
              <span>Designed for focus, comfort, and productivity.</span>
            </div>

            <div className={styles.highlightsGrid}>
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;

                return (
                <article
                  key={highlight.title}
                  className={styles.highlightCard}
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className={styles.highlightIcon}>
                    <Icon size={20} strokeWidth={2.3} />
                  </div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.copy}</p>
                </article>
                );
              })}
            </div>

            <div className={styles.featureStrip} data-aos="fade-up" data-aos-delay="250">
              <div>
                <span>Flexible booking</span>
                <strong>Daily, team, and event-friendly options</strong>
              </div>
              <div>
                <span>Fast confirmation</span>
                <strong>Clear paths to the room you need</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}