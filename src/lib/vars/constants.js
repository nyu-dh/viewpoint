export const siteTitle = 'nyu-dss/viewpoint';
export const siteDescription = 'embeddable iiif viewers with svelte-kit';
export const sampleManifests = [
	'https://purl.stanford.edu/wr796rv9498/iiif/manifest',
	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b90266728/manifest.json',
	'https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json',
	'https://jsonstorage.net/api/items/1a6e2d6e-fa90-4d44-95a5-35bb6c011aa2',
	'https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0007/manifest.json',
	'https://www.e-codices.unifr.ch/metadata/iiif/bc-s-0058/manifest.json',
	'https://www.e-codices.unifr.ch/metadata/iiif/snm-AG002760/manifest.json',
	'https://www.e-codices.unifr.ch/metadata/iiif/hmtg-T09393/manifest.json',
	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b53212522c/manifest.json',
	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b8400342f/manifest.json',
	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b84006642/manifest.json',
	'https://gallica.bnf.fr/iiif/ark:/12148/btv1b8490923n/manifest.json',
	'https://jsonstorage.net/api/items/ce49ca3a-3031-4914-bb60-069a65642f9f'
];
export const staticPath = import.meta.env.DEV ?  '' : '/viewpoint';
export const placeholderText = 'URI input';
export const viewers = [
	{
		id: 'mirador',
		label: 'Mirador',
		options: [
			{
				id: 'theme',
				label: 'Theme',
				values: ['Dark', 'Light'],
				icon: 'paintBrush'
			},
			{
				id: 'view',
				label: 'View style',
				values: ['Single', 'Book', 'Gallery']
			},
			{
				id: 'thumbs',
				label: 'Thumbnail view',
				values: ['Off', 'Right', 'Bottom']
			},
			// {
			// 	id: 'sidebar',
			// 	label: 'Open metadata sidebar',
			// 	values: ['False', 'True']
			// },
			{
				id: 'workspacecontrols',
				label: 'Show controls',
				values: ['False', 'True'],
				icon: 'cog'
			}
		]
	},
	// {
	// 	id: 'uv',
	// 	label: 'Universal Viewer',
	// 	options: []
	// }
];
