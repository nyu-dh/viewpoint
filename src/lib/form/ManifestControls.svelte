<script>
	import { manifests, placeholderText, viewers } from '$lib/vars/constants.js';
	import { manifestURI, selectedViewer, queryObject } from '$lib/vars/stores.js';

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

<article class="panel is-info">
	<p class="panel-heading">
		IIIF Manifest
	</p>
	<p class="pl-4 is-7">Input your own URI or use a random example.</p>
	<div class="panel-block">
		<div class="field">
			<div class="control">
				<input bind:value={$manifestURI} class="input" type="text" placeholder={placeholderText} />
			</div>
		</div>
	</div>

	<div class="panel-block">
		<div class="field">
			<div class="control pt-3 pb-5">
				<button on:click={clearManifest} class="button is-link">Clear</button>
				<button on:click={randomManifest} class="button is-link">Random</button>
			</div>
		</div>
	</div>
</article>
