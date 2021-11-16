<script>
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';

	let placeholderText = 'URI input';
	let visibleValidCheck = false;
	let manifests = [
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
	let manifestURI = manifests[0];
	let viewers = [
		{
			id: 'mirador',
			label: 'Mirador',
			themes: ['Light', 'Dark']

		},
		// {
		// 	id: 'uv',
		// 	label: 'Universal Viewer',
		// 	themes: ['Dark']
		// }
	];
	let selectedViewer = viewers[0];
	let selectedTheme = selectedViewer.themes[0];
	let query = buildQuery();
	let iframeContainer;

	function buildQuery() {
		return `${base}/${selectedViewer.id}#manifest=${manifestURI}&theme=${selectedTheme.toLowerCase()}`;
	}

	function clearManifest() {
		manifestURI = '';
	}

	function randomManifest() {
		while (true) {
			let random = Math.floor(Math.random() * manifests.length);
			let randomManifest = manifests[random];
			if (randomManifest !== manifestURI) {
				manifestURI = randomManifest;
				break;
			}
		}
	}

	function validateAndSubmit() {
		query = buildQuery();
		let existing = document.getElementById('viewer-iframe');
		if (existing !== null) { existing.remove(); }

		let iframe = document.createElement('iframe');
    iframe.setAttribute('src', query);
		iframe.setAttribute('id', 'viewer-iframe');
		iframe.style.width = "100%";
		iframe.style.height = "500px";
		iframeContainer.appendChild(iframe);
	}
</script>

<div class="field">
	<label class="label">Manifest</label>
	<div class="control">
		<input bind:value={manifestURI} class="input" type="text" placeholder={placeholderText} />
	</div>
</div>

<div class="field">
	<div class="control pt-3 pb-5">
		<button on:click={clearManifest} class="button is-link">Clear</button>
		<button on:click={randomManifest} class="button is-link">Random</button>
	</div>
</div>

<div class="field">
	<label class="label">Viewer</label>
	<div class="control">
		<div class="select">
			<select bind:value={selectedViewer}>
				{#each viewers as viewer}
					<option value={viewer}>{viewer.label}</option>
				{/each}
			</select>
		</div>
	</div>
</div>

<div class="field">
	<label class="label">Theme</label>
	<div class="control">
		<div class="select">
			<select bind:value={selectedTheme}>
				{#each selectedViewer.themes as theme}
					<option value={theme}>{theme}</option>
				{/each}
			</select>
		</div>
	</div>
</div>

<form on:submit|preventDefault={validateAndSubmit}>
	<div class="field">
		<div class="control pt-3">
			<button disabled={!manifestURI} type="submit" class="button is-link">Submit</button>
		</div>
	</div>
</form>

<div class="content mt-5" bind:this={iframeContainer}>
	<h3>Your Query</h3>
	<p><a href={query} target="_blank">{query}</a></p>
</div>
