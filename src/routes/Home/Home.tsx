import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './Home.css';
import logo from '../../img/logo.webp';
import twoh from '../../img/home/twoh.webp';
import dungeonGate from '../../img/home/dungeon_gate.webp';
import campfire from '../../img/home/campfire.webp';

import Link from '../../components/Link';
import Card from '../../components/Card';
import CardWide from '../../components/CardWide';

const Home: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="home flex-container column">
      <div className="top">
        <img src={logo} alt="logo" className="top logo" />
        <div className="welcome flex-one">
          <p className="slogan">{t('guide.slogan')}</p>
          <p className="online">
            <span>20</span>
            {t('guide.online')}
          </p>
          <div className="info">
            <p>
              <span className="ip">{t('guide.server-ip')}</span>
            </p>
            <p>
              <span>
                <a href="https://discord.gg/qpqCSNH" target="_blank" rel="noreferrer">
                  {t('guide.join')}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid main">
        <div className="posts">
          <div className="flex-container column">
            <CardWide header={<p>{t('home.h1')}</p>} image={twoh}>
              <p>{t('home.p1')}</p>
            </CardWide>
            <CardWide header={<p>{t('home.h2')}</p>} image={dungeonGate}>
              <p>{t('home.p2')}</p>
            </CardWide>
            <CardWide header={<p>{t('home.h3')}</p>} image={campfire}>
              <p>
                {t('home.p3.text')}
                <Link to="/guide/introduction">{t('home.p3.link')}</Link>
              </p>
            </CardWide>
          </div>
        </div>

        <div className="sidebar flex-container column">
          <Card>
            <iframe
              src="https://discord.com/widget?id=452631187010093066&theme=dark"
              width="350"
              height="500"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              title="discord-iframe"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
