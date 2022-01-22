/**
 * Greeter component.
 */
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { createUseStyles } from 'react-jss';
import MainButtons, { MainButtonsProps } from './components/MainButtons';
import SEO from '../../components/SEO';
import { Static } from '../../models';
import { randomHello } from '../../utils';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface GreeterProps extends MainButtonsProps {
  staticData: Static;
}

const Greeter: React.FC<GreeterProps> = ({
  staticData,
  contactData,
  repoUrl,
}) => {
  const classes = useStyles();

  useEffect(() => {
    const options = {
      strings: staticData.typed,
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    };

    const typed = new Typed('#typed-insert-point', options);

    return () => {
      // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      typed.destroy();
    };
  }, [staticData]);

  const hello = randomHello();

  return (
    <>
      <SEO title={hello} />
      <section className={classes.root}>
        <h1 className={classes.heading}>{staticData.mainLine}</h1>
        <div className={classes.typedWrap} style={{ width: '90%',textAlign: 'center' }}>
          <span id="typed-insert-point" style={{ whiteSpace: 'pre' }} />
        </div>
        <text>
          <br />

          <br />
        </text>
        <h4
          className={classes.typedWrap}
          style={{ textAlign: 'center', fontSize: '15px', width: '65%' }}
        >
          I'm an Electrical - Electronics / Software Engineer. I was born in 1995
          in Ankara. Graduated from Master of Business Administrations. I
          continue Management Information Systems as the second university. I
          work as a Software Engineer in the Product Strategy department of
          Papilon Savunma. I'm interested in art, plays the baglama and the oud.
        </h4>
        <MainButtons contactData={contactData} repoUrl={repoUrl} />
      </section>
    </>
  );
};

export default Greeter;
