<script lang="ts">
	export let title: string;
	export let items = [];
	export let selectedItems = [];
	export let shouldShowTotal = true;
</script>

{title}
{#each items as item}
	{item} {selectedItems}
{/each}
<slot name="toolbar" />
{#if shouldShowTotal}
	<div>
		<span>Total:</span>
		<span>$1.00</span>
	</div>
{/if}
