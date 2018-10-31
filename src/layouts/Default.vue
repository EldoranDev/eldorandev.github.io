<template>
  <div class="application">
    <div class="container mb-5">
      <slot></slot>
    </div>
    <footer class="footer">
      <div class="container">
        Made with <i class="fa fa-heart ml-1 mr-1" style="color: red;"></i> and <a href="https://gridsome.org" target="_blank"><gridsome-logo textColor="#FFFFFF" class="logo-small ml-2 mt-1"/></a>
      </div>
    </footer>
  </div>
</template>

<script>
import GridsomeLogo from '@/components/logos/Gridsome';

export default {
  components: {
    GridsomeLogo
  }  
}
</script>


<style>
  .application {
    max-width: 100%;
    min-height: 100vh;
  }

  .footer {
    background: #212121;
    color: #fff;
    width: 100%;

    position: fixed;
    bottom: 0;
    left: 0;
    min-height: 36px;
    
    align-items: center;
    display: flex;
    flex: 0 1 auto!important;
  }

  .footer .container {
    align-items: center;
    display: flex;
    flex: 0 1 auto!important;
  }

  .logo-small {
    max-width: 80px;
    height: auto;
  }
</style>
