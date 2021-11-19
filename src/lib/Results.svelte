<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { sampleManifests, placeholderText, viewers } from '$lib/vars/constants.js';
	import { selectedManifests, selectedViewer, query } from '$lib/vars/stores.js';

	import Icon from 'svelte-awesome';
	import { copy, externalLink } from 'svelte-awesome/icons';


	let embedCode, absoluteQuery;
	let appURL = '';
	let embedCopiedMessage = false;

	$: absoluteQuery = appURL + $query;
	$: embedCode = `<iframe src="${absoluteQuery}" height="400"/>`;

	$: $query, generateIframe();

	// $: $query, pushState();
	//
	// function pushState() {
	// 	if (typeof window !== 'undefined') {
	// 		history.pushState(null, null, `#${$query})}`);
	// 	}
	// }

	function copyToClipboard(id) {
		let text = document.getElementById(id).textContent;
		navigator.clipboard.writeText(text);
	}

	function triggerEmbedCopiedMessage() {
		embedCopiedMessage = true;
		setTimeout(() => { embedCopiedMessage = false;  }, 1000)
	}

	function generateIframe() {
		if (typeof window !== 'undefined') {
			let existing = document.getElementById('viewer-iframe');
			let iframeContainer = document.getElementById('iframe-container');

			if (existing !== null) {
				existing.remove();
			}

			let iframe = document.createElement('iframe');
			iframe.setAttribute('src', $query);
			iframe.setAttribute('id', 'viewer-iframe');
			iframe.style.width = '100%';
			iframe.style.height = '75vh';
			iframeContainer.prepend(iframe);
		}
	}

	onMount(async () => {
		appURL = window.location.protocol + '//' + window.location.host;
		generateIframe();
	});
</script>

<div class="columns is-gapless is-multiline fullwidth">
	<div id="iframe-container" class="column is-12" style="height:75vh;background:#292929"></div>
	<div class="column is-half" style="display: flex;">
		<article class="message is-primary">
		  <div class="message-header">
		    <p>
					Link to Full Screen Viewer&nbsp;&nbsp;
					<a title="Open in new window" href={absoluteQuery} target="_none"><Icon data={externalLink} /></a>
				</p>
		  </div>
		  <div class="message-body">
				<p style="font-size:.8rem;word-wrap:break-word;max-width:100%">
					<a href={absoluteQuery} target="_none">{absoluteQuery}</a>
				</p>
		  </div>
		</article>
	</div>

	<div class="column is-half" style="display: flex;">
		<article class="message is-link mr-5">
		  <div id="embed-header" class="message-header">
		    <p>
					Embed Code&nbsp;&nbsp;
					<a title="Copy to clipboard" on:click={() => copyToClipboard('embed-code')} on:click={triggerEmbedCopiedMessage}><Icon data={copy} /></a>
					{#if embedCopiedMessage}
					<span transition:fade class="ephemeral-message">&nbsp;Copied to clipboard!</span>
					{/if}
				</p>
		  </div>
		  <div class="message-body">
		    <p id="embed-code" style="font-size:.8rem;word-wrap:break-word;font-family:monospace;max-width:100%" on:click={() => copyToClipboard('embed-code')} on:click={triggerEmbedCopiedMessage}>{embedCode}</p>
			</div>
		</article>
	</div>
</div>
