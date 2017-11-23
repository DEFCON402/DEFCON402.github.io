# defcon402.org

A local DEF CON chapter based in Omaha, Nebraska.


## About Our Group

DC402 Meets at different local venues every second Tuesday of the month. Check the website or follow us at @defcon402 for the latest information.


Attendees give talks at our meetings, often security-related, but also drifting into other interesting areas of tech. Our meetings are informal, social and often tend to gravitate toward the technical side of things. That said, we are not afraid of topics like tech policy and we strive to be inclusive rather than exclusive. Many of our members have interesting histories in U.S. government, capture the flag competitions, digital forensics, law enforcement, and various involvement with a small gathering of people in Las Vegas every year known as DEF CON.



## Requirements

* [Node](https://nodejs.org/en/)
* GatsbyJS
	* `npm i -g gatsby-cli`
* gh-pages
	* `npm i -g gh-pages --save-dev`

## Installing Site

`npm i && npm run dev`

## Running in Development

`npm run dev` or `gatsby develop`

## Making Changes

Most changes that need to be made occur in `pages/primary-nav-pages/` or `pages/secondary-nav-pages/`.

Simply go to the directory of the page you would like to edit and modify the `index.md` file.  Most markdown syntax is accepted as well as basic HTML and CSS. 

For larger changes, to the functionality of the site itself it is recommended to contact github.com/clevernyyyy or open an issue on the site.


### Creating a New Page

Creating a new page is as simple as going to either `pages/primary-nav-pages/` or `pages/secondary-nav-pages/` and creating a new folder, with a nested `index.md` file.  The `index.md` file will contain all configuration information for the new page and it's content.

### Using the `index.md` file

Uses most standard markdown syntax, but can also utilize HTML/CSS/JS.  The configuration options *must be at the top of the file*.  The configuration options are:
```
---
navTitle: Text shown in navbar links
title: Title of page (browser)
layout: Chooses the layout style (should always be "page")
path: Path to the page - make sure to append trailing "/"
iconType: Icon enumeration table key
priority: What order to display link in the navbar 
className: Any class you'd like applied to the content as a whole
hide: Boolean value (true to show in navbar, false to not show in navbar).  False doesn't mean the page doesn't exist, just not in navbar - for example Code of Conduct page.
bigIcons: Boolean value used to trigger big icons in `components/SiteLinks/index.jsx`.  Similar config booleans can be used to do any number of things.
---
```

Note - not all options must be in the configuration heading.



### How It Works

This is a basic diagram of how the site works so you can find what [you're looking for](https://youtu.be/UBYnT8JY7sE?t=37) more easily.

```
+-- pages/_template.jsx---------------------------------------------------+
|                                                                         |
|  +-- pages/index.jsx-------------------------------------------------+  |
|  |                                                                   |  |
|  |  +-- components/Navbars/Navbars.jsx----------------------------+  |  |
|  |  |                                                             |  |  |
|  |  |  +-- components/SitePage/index.jsx-----------------------+  |  |  |
|  |  |  |                                                       |  |  |  |
|  |  |  |  +-- pages/primary-nav-pages/about/index.md--------+  |  |  |  |
|  |  |  |  |                                                 |  |  |  |  |
|  |  |  |  |   About Us                                      |  |  |  |  |
|  |  |  |  |                                                 |  |  |  |  |
|  |  |  |  |   DC402 Meets at different local venues every   |  |  |  |  |
|  |  |  |  |   second Tuesday of the month. Check the        |  |  |  |  |
|  |  |  |  |   website or follow us at @defcon402 for the    |  |  |  |  |
|  |  |  |  |   latest information.                           |  |  |  |  |
|  |  |  |  |                                                 |  |  |  |  |
|  |  |  |  +-------------------------------------------------+  |  |  |  |
|  |  |  +-------------------------------------------------------+  |  |  |
|  |  +-------------------------------------------------------------+  |  |
|  +-------------------------------------------------------------------+  |
+-------------------------------------------------------------------------+
```



## Publishing Changes 

* Push `/public/` to github pages
	* `npm run deploy`



## Technologies

* GatsbyJS
* ReactJS
* Markdown
* HTML/CSS
* SASS


## License

The MIT License (MIT)

Copyright (c) 2017 Adam Schaal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.