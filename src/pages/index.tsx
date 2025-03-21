import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroOverlay} />
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Join Kenya's premier blockchain learning community. Master Rust programming
            and build decentralized systems from scratch.
          </p>
          <div className={styles.buttonGroup}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaButton)}
              to="/docs/intro">
              Start Learning 🚀
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.secondaryButton)}
              to="/docs/getting-started">
              View Curriculum 📚
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Chain Masters - Kenya's premier blockchain learning community. Master Rust programming and build decentralized systems from scratch.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <Heading as="h2">Ready to Begin Your Journey?</Heading>
              <p>Join our vibrant community of blockchain developers and start building the future.</p>
              <div className={styles.ctaButtons}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
