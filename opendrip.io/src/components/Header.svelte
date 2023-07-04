<script>
  import Icon from 'svelte-icons-pack/Icon.svelte'
  import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub'

  let githubUrl = 'https://github.com/cameronfyfe/opendrip'
</script>

<div class="header">
  <div class="left">
  </div>
  <div class="right">
    <a href={githubUrl} target="_blanke" class="github-link">
      <Icon src={AiFillGithub} size="32" />
    </a>
  </div>
</div>

<style>
  .header {
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    padding: 10px;
  }
  .left {
    flex-grow: 1;
    text-align: left;
  }
  .right {
    text-align: right;
  }
</style>
