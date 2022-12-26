<script lang="ts">
	import {onMount} from "svelte"
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton, {Icon} from '@smui/icon-button';
	import {mdiMenu, mdiWeatherSunny, mdiWeatherNight} from '@mdi/js';
	import {Svg} from '@smui/common';

	let topAppBar: TopAppBar;
	let darkTheme: boolean | undefined | MediaQueryList = undefined

	onMount(()=>{
		darkTheme = window.matchMedia('(prefers-color-scheme: dark)')
	})
</script>

<svelte:head>
	{#if darkTheme === undefined}
		<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	{:else if darkTheme}
		<link rel="stylesheet" href="/smui.css" />
		<link rel="stylesheet" href="/smui-dark.css" media="screen" />
	{:else}
		<link rel="stylesheet" href="/smui.css" />
	{/if}
	
</svelte:head>

<header>
	<TopAppBar bind:this={topAppBar} variant="fixed">
		<Row>
			<Section>
				<IconButton>
					<Icon component={Svg} viewBox="0 0 24 24">
						<path fill="currentColor" d={mdiMenu}/>
					</Icon>
				</IconButton>
				 
				<Title>Fixed</Title>
			</Section>
			<Section align="end" toolbar>
				<IconButton 
				on:click={()=> darkTheme = !darkTheme}
				>
				<Icon component={Svg} viewBox="0 0 24 24">
					<path fill="currentColor" d={darkTheme? mdiWeatherSunny: mdiWeatherNight}/>
				</Icon>
			</IconButton>
			</Section>
		</Row>
	</TopAppBar>
	<AutoAdjust {topAppBar}>
		
	</AutoAdjust>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
</style>
