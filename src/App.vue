<template>
	<div id="app">
		<h1>Starbase Router</h1>
		<h3>
			<router-link class="link" to="/data/people">Meet the Characters</router-link> |
			<router-link class="link" to="/data/planets">Discover the Planets</router-link>
		</h3>
		<router-view></router-view>
	</div>
</template>

<style>
body{
	background: #263238;
}

#app{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: white;
	margin-top: 60px;
}

.link, .link:hover, .link:visited, .link:active{
	color: #4FC08D;
}
</style>