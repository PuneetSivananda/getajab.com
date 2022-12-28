<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import '../app.css';
</script>

<Header />
<slot />
<Footer />

