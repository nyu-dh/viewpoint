---
layout: default
no_style: true
permalink: '/uv'
manifest: 'https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json'
---
<style>
  .viewer-embed {
    height: 500px;
    width: 100%;
  }
</style>

<iframe class="viewer-embed" src="{{ '/dist/uv/viewer' | absolute_url }}#&manifest={{ page.manifest }}" height="500" width="100%"/>
