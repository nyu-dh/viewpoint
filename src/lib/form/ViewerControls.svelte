<script>
	import { viewers } from '$lib/vars/constants.js';
	import { queryObject, selectedViewer } from '$lib/vars/stores.js';
</script>

<article class="panel is-info">
	<p class="panel-heading">
		Viewer Settings
	</p>
	<div class="panel-block">
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
	</div>

	{#each $selectedViewer.options as option}
		<div class="panel-block">
			<div class="field">
				<label class="label">{option.label}</label>
				<div class="control">
					<div class="select">
						<select bind:value={$queryObject[option.id]}>
							{#each option.values as value}
								<option value={value.toLowerCase()}>{value}</option>
							{/each}
						</select>
					</div>
				</div>
			</div>
		</div>
	{/each}
</article>
