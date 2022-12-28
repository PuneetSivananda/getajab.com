<script>
	import Hero from '$lib/pages/landing/hero.svelte';
	import Features from '$lib/pages/landing/features.svelte';
	import Testimonials from '$lib/pages/landing/testimonial.svelte';
</script>

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

<section id="cta" class="bg-brightRed">
	<!-- Flex Container -->
	<div class="conatiner flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
		<h2 class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
			Simplify how your team works today
		</h2>
		<!-- Button -->
		<a
		href="#top"
		class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline hover:bg-gray-300 shadow-2xl"
	>
		Get Started
	</a>
	</div>
</section>

<style>
</style>
