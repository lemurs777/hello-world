import React from 'react';

import Header from '../partials/Header';
import Menu from '../partials/Menu';
import Hello from '../partials/Hello';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      <Menu />

      {/*  Page content */}
      <main className="page page--index">
        <Hello />
      </main>
    </div>
  );
}

export default Home;