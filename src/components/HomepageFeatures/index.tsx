import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn Rust Programming',
    image: 'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg',
    description: (
      <>
        Master Rust through our comprehensive 6-week course. Build strong foundations
        in systems programming with hands-on projects.
      </>
    ),
  },
  {
    title: 'Build Blockchain Systems',
    image: 'https://img.freepik.com/free-vector/cryptocurrency-blockchain-technology_23-2148745647.jpg',
    description: (
      <>
        Develop blockchain components from scratch. Learn cryptography, consensus,
        and distributed systems through practical implementation.
      </>
    ),
  },
  {
    title: 'Join Our Community',
    image: 'https://img.freepik.com/free-vector/team-professionals-analyzing-graphs_23-2148866843.jpg',
    description: (
      <>
        Connect with fellow developers in Kenya's growing blockchain ecosystem.
        Collaborate, learn, and build the future of finance.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureImage}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
