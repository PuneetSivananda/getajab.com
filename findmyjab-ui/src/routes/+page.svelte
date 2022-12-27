<script>
	import Hero from '$lib/pages/landing/hero.svelte';
	import Features from '$lib/pages/landing/features.svelte'; 
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- Hero Section -->
<section id="hero">
	<Hero />
</section>
<!-- Features Section -->
<section id="features">
	<!-- Flex Container -->
	<Features/>
</section>

<style>
</style>
