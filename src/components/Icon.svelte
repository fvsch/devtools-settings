<script>
  export let id;
  export let size = 16;
</script>

<svg width={size} height={size} aria-hidden="true">
  <use href="/icons.svg#{id}" />
</svg>
