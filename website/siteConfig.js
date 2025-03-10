/**
 * Copyright 2019 Parity Technologies
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects listed on the "users" page.
const users = require('./data/users');

const siteConfig = {
  title: 'Substrate Developer Hub', // Title for your website.
  tagline: 'The place for blockchain innovators.',

  url: 'https://substrate-developer-hub.github.io/', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'substrate-developer-hub.github.io',
  organizationName: 'substrate-developer-hub',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting-started/index', label: 'Docs'},
    {href: '/rustdocs/v1.0/', label: 'Reference Docs'},
    {page: 'tutorials', label: 'Tutorials'},
    {page: 'community', label: 'Community'},
    {href: 'https://github.com/paritytech/substrate', label: 'GitHub'},
    {search: true},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/Substrate-logo.svg',
  footerIcon: 'img/Substrate-logo.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#ff1864',
    secondaryColor: '#222222',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Parity Technologies`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
    defaultLang: 'rust',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  // Collapsible Categories
  docsSideNavCollapsible: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/substrate-dev-hub-card.png',
  twitterImage: 'img/substrate-dev-hub-card.png',

  // Show documentation's last contributor and update time
  // at the bottom of the page:
  enableUpdateBy: true,
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/substrate-developer-hub/substrate-developer-hub.github.io',

  // Directories inside which any CSS files will not be processed and
  // concatenated to Docusaurus' styles. This is to support static HTML pages
  // that may be separate from Docusaurus with completely separate styles.
  separateCss: [],

  // Use prism for syntax highlighting
  usePrism: true,

  // Edit this page button
  editUrl: "https://github.com/substrate-developer-hub/substrate-developer-hub.github.io/edit/source/docs/",

  // Scroll to top button at the bottom
  scrollToTop: true,

  // Style sheets to import
  stylesheets: ["https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"],

  // Generate CNAME file when building
  cname: "substrate.dev",

  // Translation recruitment link, appears in the language drop down as "Help Translate"
  translationRecruitingLink: "https://crowdin.com/project/substrate-developer-hub",

  // Algolia Search
  algolia: {
    apiKey: '5cd09916f4ba4c283b2d45ee7386fc34',
    indexName: 'substrate',
    algoliaOptions: {
      // https://www.algolia.com/doc/api-reference/api-parameters/
      facetFilters: ["language:LANGUAGE"]
    }
  },

};

module.exports = siteConfig;
