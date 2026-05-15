<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		const revealObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						revealObserver.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
		);

		document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

		return () => revealObserver.disconnect();
	});
</script>

<div class="relative">
	<Navbar />
	<main id="main-content">
		<Hero />
		<Projects />
		<Skills />
		<Contact />
	</main>
	<Footer />
</div>
