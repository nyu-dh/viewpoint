<script>
	import { viewers } from '$lib/vars/constants.js';
	import { queryObject, selectedViewer } from '$lib/vars/stores.js';
</script>


<h2 class="title is-6 mt-5">Viewer Settings</h2>

<div class="field has-addons has-addons-left fullwidth">
	<div class="control button no-hover is-primary is-small">Viewer</div>
	<div class="control fullwidth">
		<div class="select is-small fullwidth">
			<select bind:value={$selectedViewer} class="fullwidth">
				{#each viewers as viewer}
					<option value={viewer}>{viewer.label}</option>
				{/each}
			</select>
		</div>
	</div>
</div>

{#each $selectedViewer.options as option}
	<div class="field has-addons has-addons-left fullwidth">
		<div class="control button no-hover is-primary is-small">{option.label}</div>
    <div class="control fullwidth">
			<div class="select is-small fullwidth">
				<select bind:value={$queryObject[option.id]} class="fullwidth">
					{#each option.values as value}
						<option value={value.toLowerCase()}>{value}</option>
					{/each}
				</select>
			</div>
    </div>
	</div>
{/each}
