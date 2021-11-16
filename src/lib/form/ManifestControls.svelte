<script>
	import { manifests, placeholderText, viewers } from '$lib/vars/constants.js';
	import { manifestURI, selectedViewer, selectedTheme, query } from '$lib/vars/stores.js';

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

<div class="field">
	<label class="label">Manifest</label>
	<div class="control">
		<input bind:value={$manifestURI} class="input" type="text" placeholder={placeholderText} />
	</div>
</div>

<div class="field">
	<div class="control pt-3 pb-5">
		<button on:click={clearManifest} class="button is-link">Clear</button>
		<button on:click={randomManifest} class="button is-link">Random</button>
	</div>
</div>
