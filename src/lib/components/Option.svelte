<script>
	import { parts } from "../../stores";
	import { get } from "svelte/store";
	export let title = '';
	let hovering = false;
  export let selectedAttribute = '';
  export let selectedOption = '';
  $: selected = selectedAttribute == title || selectedOption == title
	function enter() {
		hovering = true;
	}
	function leave() {
		hovering = false;
	}
	// TODO: Highlight chosen option
</script>

<button
	class="{hovering || selected
		? 'bg-sky-500 text-white'
		: 'bg-transparent text-sky-500'} capitalize border-2 border-solid border-sky-500 py-2 px-6 rounded-3xl"
	on:mouseenter={enter}
	on:mouseleave={leave}
  on:click
>
	{title}
</button>