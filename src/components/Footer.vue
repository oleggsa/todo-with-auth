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
@import "./src/assets/styles/mixin";
@import "./src/assets/styles/variables";

.container {
  max-width: 1175px;
  padding: 0 0 0 12px;
  @include _1200 {
    padding: 0 20px;
  }
}
.footer {
  width: 100%;
  background: $main-grey;
  &__inner {
    .upper-side {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 0 18px 5px;
      @include _825 {
        flex-direction: column;
      }
      ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        @include _825 {
          flex-direction: column;
          padding: 0;
          margin-bottom: 0;
        }
        li {
          margin-left: 20px;
          @include _1024 {
            margin-left: 15px;
            display: flex;
            justify-content: center;
          }
          @include _825 {
            margin-left: 0;
            margin-bottom: 12px;
            &:last-child {
              margin-bottom: 0;
            }
          }
          a {
            color: $white;
            font-size: 16px;
            font-weight: 500;
            line-height: 25px;
          }
        }
      }
    }
  }
  &__line {
    width: 100%;
    margin: 0;
  }
  &__copyright {
    padding: 31px 0 31px 2px;
    font-size: 12px;
    font-weight: 500;
    line-height: 19px;
    color: $white;
    @include _1024 {
      text-align: center;
    }
    @include _825 {
      padding: 15px 0;
    }
    @include _525 {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>