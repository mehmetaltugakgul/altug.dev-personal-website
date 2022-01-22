import React from 'react';
import Greeter from '../views/Greeter';
import Diploma from '../views/Diploma';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, pink } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import baData from './json/ba.json';
import pkg from '../../package.json';

import { calculateDiplomaProgress } from '../utils';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
];

export const tabs: TabLink[] = [
  {
    name: 'homepage.html',
    url: '/',
    icon: 'home',
    color: midBlue,
    mdFileName: 'skills',
  },
  {
    name: 'skills.js',
    url: '/skills',
    icon: ['fab', 'js'],
    color: jsOrange,
    mdFileName: 'skills',
  },
  {
    name: '.educationrc',
    url: '/education',
    icon: 'university',
    color: midBlue,
    mdFileName: 'education',
  },
  {
    name: 'projects.config',
    url: '/projects',
    icon: 'sliders-h',
    color: green,
    mdFileName: 'projects',
  },
  {
    name: 'certificates.sass',
    url: '/certificates',
    icon: ['fab', 'sass'],
    color: pink,
    mdFileName: 'certificates',
  },
];
