<script>
  import Nav from "$lib/components/Nav.svelte"
  import PictureFrame from "$lib/components/PictureFrame.svelte"
  import Option from "$lib/components/Option.svelte"
</script>

<!-- TODO: align with image -->
<!-- TODO: add hover effect -->
<Nav />
<main class="flex flex-row mt-5 gap-4">
  <div class="flex-col w-1/2">
    <div class="">
      <PictureFrame />
    </div>
    <div class="flex flex-row justify-center mt-5">
      <button class="bg-white rounded-md px-10 py-4 font-medium mx-4">🔀 Random</button>
      <button class="bg-white rounded-md px-10 py-4 font-medium mx-4">🖼️ Download</button>
    </div>
  </div>
  <div class="flex flex-col w-1/2">
    <!-- TODO: replace with components -->
    <!-- TODO: add hover effect -->
    <h2>ACCCESSORIZE THE ALPACA'S</h2>
    <div class="flex flex-row flex-wrap gap-2 my-3">
      <Option title="Ears" />
      <Option title="Eyes" />
      <Option title="Mouth" />
      <Option title="Neck" />
      <Option title="Neck" />
      <Option title="Neck" />
    </div>
    <!-- TODO: replace with components -->
    <h2 class="mt-6">STYLE</h2>
    <div class="flex flex-row flex-wrap gap-2 my-3">
      <Option title="Hair"/>
      <Option title="Ears"/>
      <Option title="Eyes"/>
      <Option title="Mouth"/>
      <Option title="Neck"/>
      <Option title="Neck"/>
      <Option title="Neck"/>
    </div>
  </div>
</main>