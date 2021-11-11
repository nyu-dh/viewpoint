<script>
	export const prerender = true;
	export const site_title = 'nyu-dss/viewpoint';
	export const site_description = 'embeddable iiif viewers from uri params';
</script>

<svelte:head>
	<title>{site_title}</title>
</svelte:head>

<section class="hero is-info is-fullheight">
	<div class="hero-body">
		<div class="">
			<p class="title">{site_title}</p>
			<p class="subtitle">{site_description}</p>

			<div class="field">
				<label class="label">Manifest</label>
				<div class="control">
					<input
						class="input"
						type="text"
						value="https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json"
						placeholder="URI input"
					/>
				</div>
			</div>

			<div class="field">
				<div class="control pt-3 pb-5">
					<button class="button is-link">Clear</button>
					<button class="button is-link">Validate</button>
				</div>
			</div>

			<div class="field">
				<label class="label">Viewer</label>
				<div class="control">
					<div class="select">
						<select>
							<option>Mirador</option>
							<option>Universal Viewer</option>
						</select>
					</div>
				</div>
			</div>

			<div class="field">
				<label class="label">Theme</label>
				<div class="control">
					<div class="select">
						<select>
							<option>Light</option>
							<option>Dark</option>
						</select>
					</div>
				</div>
			</div>

			<div class="field">
				<div class="control pt-3">
					<button class="button is-link">Submit</button>
				</div>
			</div>
		</div>
	</div>
</section>
