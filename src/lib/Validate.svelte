<script>
function validateManifest() {
  visibleValidCheck = !visibleValidCheck;
}
</script>

<div class="field">
	<div class="control pt-3 pb-5">
		<button on:click={validateManifest} class="button is-link">Validate
			{#if visibleValidCheck}
				<span in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>&nbsp&nbsp;✅</span>
			{/if}
		</button>
	</div>
</div>
