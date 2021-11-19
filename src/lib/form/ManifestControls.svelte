<script>
	import { sampleManifests, placeholderText, viewers } from '$lib/vars/constants.js';
	import { selectedManifests, selectedViewer, queryObject } from '$lib/vars/stores.js';

	import Icon from 'svelte-awesome';
	import { minus, remove } from 'svelte-awesome/icons';
	import { faDice } from '@fortawesome/free-solid-svg-icons';

	$: $queryObject['manifests'] = $selectedManifests;
	let maxResources = 4;

	function clearManifest(index) {
		$selectedManifests[index] = '';
	}

	function removeManifest(index) {
		let len = $selectedManifests.length;
		let filtered = $selectedManifests.slice(0, index).concat($selectedManifests.slice(index + 1, len));
		$selectedManifests = filtered;
	}

	function randomManifest(index) {
		while (true) {
			let random = Math.floor(Math.random() * sampleManifests.length);
			let randomManifest = sampleManifests[random];
			if (randomManifest !== $selectedManifests[index]) {
				$selectedManifests[index] = randomManifest;
				break;
			}
		}
	}

	function addManifest() {
		let newSlot = $selectedManifests.length;
		$selectedManifests[newSlot] = sampleManifests[newSlot];
	}
</script>

<h2 class="title is-6 mt-5">IIIF Manifest</h2>
<p class="subtitle is-7">Input your own URI or use a random example.</p>



{#each $selectedManifests as m, i}
	<div class="field has-addons fullwidth">
		<div class="control">
			{#if i == 0}
				<button title="Remove" class="button is-small" disabled><Icon data={minus} /></button>
			{:else}
				<button title="Remove" on:click={() => removeManifest(i)} class="button is-small"><Icon data={minus} /></button>
			{/if}
		</div>
		<div class="control fullwidth">
			<input bind:value={m} class="input is-expanded is-small" type="text" placeholder={placeholderText} />
		</div>
		<div class="control">
			<button on:click={() => randomManifest(i)} title="Random" class="button is-success is-small"><Icon data={faDice} /></button>
		</div>
		<div class="control">
			<button on:click={() => clearManifest(i)} title="Clear" class="button is-danger is-small"><Icon data={remove} /></button>
		</div>
	</div>
{/each}

{#if $selectedManifests.length >= maxResources}
<p class="subtitle is-7">{maxResources} items is the current maximum</p>
{:else}
<a href="" class="subtitle is-7" on:click={addManifest}>Add another +</a>
{/if}

<div class="pt-3 pb-5"></div>
