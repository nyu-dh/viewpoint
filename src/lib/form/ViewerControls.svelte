<script>
	import { manifests, placeholderText, viewers } from '$lib/vars/constants.js';
	import { manifestURI, selectedViewer, selectedTheme, query } from '$lib/vars/stores.js';
</script>

<div class="field">
	<label class="label">Viewer</label>
	<div class="control">
		<div class="select">
			<select bind:value={$selectedViewer}>
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
			<select bind:value={$selectedTheme}>
				{#each $selectedViewer.themes as theme}
					<option value={theme}>{theme}</option>
				{/each}
			</select>
		</div>
	</div>
</div>
