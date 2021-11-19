import { writable } from 'svelte/store';

export const selectedManifests = writable();
export const selectedViewer = writable();
export const query = writable('');
export const queryObject = writable({});

export const siteTitle = 'nyu-dss/viewpoint';
export const siteDescription = 'embeddable iiif viewers from uri params with svelte-kit';
export const sampleManifests = [
	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b90266728/manifest.json',
	'https://iiif.lib.harvard.edu/manifests/drs:4184689',
	'https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json',
	'https://sites.dlib.nyu.edu/viewer/api/presentation/photos/tamwag_tam630_cuid34887/manifest.json',
	'https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0007/manifest.json',
	'https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0058/manifest.json',
	'https://www.e-codices.unifr.ch/metadata/iiif/snm-AG002760/manifest.json',
	'https://www.e-codices.unifr.ch/metadata/iiif/hmtg-T09393/manifest.json',
	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b53212522c/manifest.json',
	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b8400342f/manifest.json',
	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b84006642/manifest.json',
	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b8490923n/manifest.json',
	'https://cmoa-records-images.s3.amazonaws.com/fv001_001_006_002_B008_002/manifest.json',
	'https://cmoa-records-images.s3.amazonaws.com/fv001_001_003_001_B003_F02_007/manifest.json'
];
export const placeholderText = 'URI input';
