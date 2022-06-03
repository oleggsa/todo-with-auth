<template>
  <div class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="upper-side">
          <img src="@/assets/images/logo-footer.svg" alt="logo">
          <ul>
            <li v-for="item in links" :key="links[item]">
              <a :href="item.link">{{item.name}}</a>
            </li>
          </ul>
        </div>
        <hr class="footer__line">
        <div class="footer__copyright">
          <span>Copyright © 2020 Citigroup Inc. Citibank, N.A. </span><span>Member FDIC. Equal Opportunity Lender.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: [
        {name: 'Terms & Conditions', link: '#'},
        {name: 'Privacy', link: '#'},
        {name: 'Notice at Collection', link: '#'},
        {name: 'CA Privacy Hub', link: '#'},
        {name: 'Contact Us\n', link: '#'},
        {name: 'Sitemap', link: '#'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>