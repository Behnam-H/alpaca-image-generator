<script>
  export let title = ''
  let hovering = false

  function enter() {
    hovering = true
  }
  function leave(){
    hovering = false
  }
</script>
<button class="{hovering ? 'bg-sky-400 text-white' : 'bg-transparent text-sky-400'} border-2 border-solid border-sky-400 py-2 px-6 rounded-3xl" on:mouseenter={enter} on:mouseleave={leave}>
  {title}
</button>

