<script>
	import Hero from '$lib/pages/landing/hero.svelte';
	import Features from '$lib/pages/landing/features.svelte';
	import Testimonials from '$lib/pages/landing/testimonial.svelte';
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
	<Features />
</section>
<section id="testimonials">
	<!-- Flex Container -->
	<Testimonials />
</section>

<style>
</style>
