interface Page {
  name: string;
  prev: string | null;
  next: string | null;
}

interface Pages {
  [key: string]: Page
}

const pages:Pages = {
	'intro': { name: 'Intro', prev: null, next: 'what' },
	'what': { name: 'What?', prev: 'intro', next: 'why' },
	'why': { name: 'Why?', prev: 'what', next: 'how' },
	'how': { name: 'How?', prev: 'why', next: 'shapes' },
	'shapes': { name: 'Shapes', prev: 'how', next: 'groups' },
	'groups': { name: 'Groups', prev: 'shapes', next: 'paths' },
	'paths': { name: 'Paths', prev: 'groups', next: 'viewbox' },
	'viewbox': { name: 'Viewbox', prev: 'paths', next: 'use' },
	'use': { name: 'Use', prev: 'viewbox', next: 'styling' },
	'styling': { name: 'Styling', prev: 'viewbox', next: 'animating' },
	'animating': { name: 'Animating', prev: 'styling', next: 'optimizing' },
	'optimizing': { name: 'Optimizing', prev: 'animating', next: 'creating' },
	'creating': { name: 'Creating', prev: 'optimizing', next: 'more' },
	'more': { name: 'More', prev: 'creating', next: 'thanks' },
	'thanks': { name: 'Thank You!', prev: 'more', next: null }
}

export default pages;
