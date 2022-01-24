import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useState } from 'react';
import GithubButton from '../../../../components/buttons/GithubButton';
import PrimaryButton from '../../../../components/buttons/PrimaryButton';
import Spacer from '../../../../components/other/Spacer';
import { useWindowSize } from '../../../../hooks/useWindowSize';
import { shuffle } from '../../../../utils';
import HeaderTyper from './components/HeaderTyper';
import Rocket from './components/Rocket';
import styles from './styles.module.css';
import { trans } from '../../../../i18n';

const HeaderView: React.FC = () => {
  const { siteConfig, i18n } = useDocusaurusContext();
  const { windowHeight } = useWindowSize();
  const [toTypeWords] = useState(
    shuffle(trans('landing.typer', i18n))
  );

  const getStartedUrl = useBaseUrl('/tutorials/get_started/installation')
  return (
    <div
      className={styles.Container}
      style={{ height: windowHeight > 800 ? windowHeight : undefined }}>
      <div>
        <h1 className={styles.HeaderTitle}>
          <span className={styles.SeparatorText}>Colossal-AI</span> {translate({ message: 'made distributed training', id: 'landing.description' })}
        </h1>
        <Spacer height={20} />
        <HeaderTyper
          className={styles.HeaderTyper}
          words={toTypeWords}
          delay={5000}
          defaultText={toTypeWords[0] || 'simple'}
        />
        <Spacer height={50} />
        <div className={styles.ButtonContainer}>
          <PrimaryButton
            className={styles.GetStartedButton}
            to={getStartedUrl}>
            {translate({ message: 'GET STARTED', id: 'landing.getStarted' })}
          </PrimaryButton>
          <GithubButton
            className={styles.GithubButton}
            to={siteConfig.customFields.githubUrl as any}
          />
        </div>
      </div>
      <Rocket className={styles.RocketImage} />
    </div>
  );
};

export default HeaderView;