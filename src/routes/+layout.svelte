<script>
	import '../app.css';
</script>

<head>
	<title>Alpaca generator</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Roboto+Condensed:wght@700&display=swap"
		rel="stylesheet"
	/>
</head>
<div class="w-full h-screen bg-slate-200 flex flex-col gap-y-4">
	<div class="py-12 px-20 w-10/12 mx-auto">
		<slot />
	</div>
</div>
