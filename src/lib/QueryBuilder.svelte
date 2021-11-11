<script>
  import { base } from '$app/paths';
  import { fade } from 'svelte/transition';

  let placeholderText   = 'URI input';
  let visibleValidCheck = false;
  let manifestURI       = 'https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json';
  let viewers           = [
    {
      label: 'Mirador',
      id: 'mirador'
    },
    {
      label: 'Universal Viewer',
      id: 'uv'
    }
  ];
  let selectedViewer = viewers[0];
  let themes = [ "Light", "Dark"];
  let selectedTheme = themes[0];
  let query = buildQuery();

  function clearManifest() {
    manifestURI = '';
  }

  function validateManifest() {
    visibleValidCheck = !visibleValidCheck;
  }

  function buildQuery() {
    let hotfix = (selectedViewer.id === 'uv') ? '#' : '';
    return `${base}/dist/${selectedViewer.id}/viewer${hotfix}?manifest=${manifestURI}?theme=${selectedTheme.toLowerCase()}`;
  }

  function handleSubmit() {
    query = buildQuery();
  }
</script>



<form on:submit|preventDefault={handleSubmit}>
  <div class="field">
    <label class="label">Manifest</label>
    <div class="control">
      <input bind:value={manifestURI} class="input" type="text" placeholder="{placeholderText}"/>
    </div>
  </div>


  <div class="field">
    <div class="control pt-3 pb-5">
      <button on:click={clearManifest} class="button is-link">Clear</button>
      <button on:click={validateManifest} class="button is-link">Validate{#if visibleValidCheck}<span in:fade={{duration: 200}} out:fade={{duration: 200}}>&nbsp&nbsp;✅</span>{/if}</button>
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
      		{#each themes as theme}
      			<option value={theme}>{theme}</option>
      		{/each}
      	</select>
      </div>
    </div>
  </div>

  <div class="field">
    <div class="control pt-3">
      <button type=submit class="button is-link">Submit</button>
    </div>
  </div>
</form>

<div class="field">
  <label class="label">Your Query</label>
  <div>
    <a href="{query}">{query}</a>
  </div>
</div>
