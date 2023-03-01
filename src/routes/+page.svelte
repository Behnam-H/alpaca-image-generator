<script>
	import { onMount } from 'svelte';
	import { parts } from '../stores';
	import Nav from '$lib/components/Nav.svelte';
	import PictureFrame from '$lib/components/PictureFrame.svelte';
	import Option from '$lib/components/Option.svelte';
	import data from '$lib/data.json';
	let selectedAttribute = '';
	let selectedOption = '';

	function handleAttrSelection(attribute) {
		selectedAttribute = attribute;
	}
	function handleOptSelection(opt) {
		selectedOption = opt;
    parts.update(oldParts => { 
			return {...oldParts, [selectedAttribute]: selectedOption}
    })
	}

	onMount(() => {
		parts.set({
			accessories: data.accessories[Math.floor(Math.random() * data.accessories.length)],
			backgrounds: data.backgrounds[Math.floor(Math.random() * data.backgrounds.length)],
			ears: data.ears[Math.floor(Math.random() * data.ears.length)],
			eyes: data.eyes[Math.floor(Math.random() * data.eyes.length)],
			hair: data.hair[Math.floor(Math.random() * data.hair.length)],
			leg: data.leg[Math.floor(Math.random() * data.leg.length)],
			mouth: data.mouth[Math.floor(Math.random() * data.mouth.length)],
			neck: data.neck[Math.floor(Math.random() * data.neck.length)]
		});
	});
</script>

<!-- TODO: update structure -->
<Nav />
<main class="flex flex-row mt-5 gap-4">
	<div class="flex-col w-1/2">
		<div>
			<PictureFrame />
		</div>
		<div class="flex flex-row justify-center mt-5">
			<button class="bg-white rounded-md px-10 py-4 font-medium mx-4">🔀 Random</button>
			<button class="bg-white rounded-md px-10 py-4 font-medium mx-4">🖼️ Download</button>
		</div>
	</div>
	<div class="flex flex-col w-1/2">
		<h2>ACCCESSORIZE THE ALPACA'S</h2>
		<div class="flex flex-row flex-wrap gap-2 my-3">
			{#each Object.keys(data) as attribute}
				<Option
					title={attribute}
					on:click={() => handleAttrSelection(attribute)}
					{selectedAttribute}
				/>
			{/each}
		</div>
		<!-- TODO: Highlight selected opt  -->
		<h2 class="mt-6">STYLE</h2>
		<div class="flex flex-row flex-wrap gap-2 my-3">
			{#if selectedAttribute}
				{#each data[selectedAttribute] as option}
					<Option title={option} on:click={() => handleOptSelection(option)} {selectedOption} />
				{/each}
			{:else}
						<p>First pick an accessory</p>
			{/if}
		</div>
	</div>
</main>
