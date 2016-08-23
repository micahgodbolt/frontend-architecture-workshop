'use strict';


/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

fractal.components.engine('@frctl/nunjucks');
fractal.components.set('ext', '.nunj')

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Generate Workshop');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'library'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

fractal.components.set('default.preview', '@preview');


/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));
