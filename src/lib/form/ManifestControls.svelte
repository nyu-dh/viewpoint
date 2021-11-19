<script>
	import { manifests, placeholderText, viewers } from '$lib/vars/constants.js';
	import { manifestURI, selectedViewer, queryObject } from '$lib/vars/stores.js';

	import Icon from 'svelte-awesome';
	import { remove } from 'svelte-awesome/icons';
	import { faDice } from '@fortawesome/free-solid-svg-icons';

	$: $queryObject['manifest'] = $manifestURI;

	function clearManifest() {
		$manifestURI = '';
	}

	function randomManifest() {
		while (true) {
			let random = Math.floor(Math.random() * manifests.length);
			let randomManifest = manifests[random];
			if (randomManifest !== manifestURI) {
				$manifestURI = randomManifest;
				break;
			}
		}
	}
</script>

<h2 class="title is-6 mt-5">IIIF Manifest</h2>
<p class="subtitle is-7">Input your own URI or use a random example.</p>
<div class="field has-addons fullwidth">
	<div class="control fullwidth">
		<input bind:value={$manifestURI} class="input is-expanded is-small" type="text" placeholder={placeholderText} />
	</div>
	<div class="control">
		<button on:click={randomManifest} title="Random" class="button is-success is-small"><Icon data={faDice} /></button>
	</div>
	<div class="control">
		<button on:click={clearManifest} title="Clear" class="button is-danger is-small"><Icon data={remove} /></button>
	</div>
</div>
<div class="pt-3 pb-5">
</div>
