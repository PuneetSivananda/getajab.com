<script lang="ts">
</script>

<!-- maked header sticky below classes -->
<!-- <header class="sticky top-0 bg-brightRedLight"> -->
<header>
	<nav class="relative container mx-auto p-6 ">
		<!-- Flex Container -->
		<div class="flex items-center justify-between">
			<!-- logo -->
			<div class="pt-2">
				<img src="/img/logo.svg" alt="" />
			</div>
			<!-- Menu items -->
			<div class="md:flex space-x-6 hidden">
				<a href="#top" class="hover:text-darkGrayishBlue">Pricing</a>
				<a href="#top" class="hover:text-darkGrayishBlue">Product</a>
				<a href="#top" class="hover:text-darkGrayishBlue">About Us </a>
				<a href="#top" class="hover:text-darkGrayishBlue">Careers</a>
				<a href="#top" class="hover:text-darkGrayishBlue">Community</a>
			</div>
			<!-- Button -->
			<a
				href="#top"
				class="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
			>
				Get Started
			</a>
			<!-- hamburger icon -->
			<!-- open add js magic to toggle -->
			<button id="menu-btn" class="open block hamburger md:hidden focus:outline-none btn-brightRedLight">
				<span class="hamburger-top"></span>
				<span class="hamburger-middle"></span>
				<span class="hamburger-bottom"></span>
			</button>
		</div>
		
		<div class="md:hidden">
			 <div id="menu" class="absolute flex flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
				<a href="#">Pricing</a>
				<a href="#">Product</a>
				<a href="#">About us</a>
				<a href="#">Careers</a>
				<a href="#">Community</a>
			</div>
		</div>
	</nav>
</header>

<style>
</style>
