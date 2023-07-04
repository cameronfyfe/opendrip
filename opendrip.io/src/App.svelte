<script lang="ts">
  import Header from './components/Header.svelte'
</script>

<main>
  <Header />

  <div class="container">
    <h1 class="opendrip">opendrip</h1>

    <p>Open Source Drip Irrigation Systems</p>

    <a href="/spec/" class="btn">opendrip specification</a>
  </div>
</main>

<style>
  :global(body) {
    background-color: #f7f7f7;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .container {
    text-align: center;
    padding-top: 150px;
  }
  h1 {
    font-size: 48px;
    color: #333;
    margin-bottom: 20px;
  }
  h1.opendrip {
    font-family: "Source Code Pro", Consolas, "Ubuntu Mono", Menlo, "DejaVu Sans Mono", monospace, monospace;
    font-weight: 100;
  }
  p {
    font-size: 18px;
    color: #777;
    margin-bottom: 40px;
  }
  .btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: #007bff;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  .btn:hover {
    background-color: #0056b3;
  }
</style>
