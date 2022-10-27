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
	'paths': { name: 'Paths', prev: 'groups', next: 'viewport' },
	'viewport': { name: 'Viewport', prev: 'groups', next: 'styling' },
	'styling': { name: 'Styling', prev: 'viewport', next: 'animating' },
	'animating': { name: 'Animating', prev: 'styling', next: 'optimizing' },
	'optimizing': { name: 'Optimizing', prev: 'animating', next: 'creating' },
	'creating': { name: 'Creating', prev: 'optimizing', next: 'more' },
	'more': { name: 'More', prev: 'creating', next: null }
}

export default pages;
