<script>
  import { scrollto } from "svelte-scrollto";
  import { link, Link } from "../svelte-routing/index";
  import { _ as t } from "svelte-i18n";

  export let currentRoute = "/";
  let activeRoute = "/";
  let whiteHeader = false;

  $: activeRoute = currentRoute
    ? currentRoute.params["*"]
      ? currentRoute.params["*"]
      : "/"
    : "/";

  $: whiteHeader = ["faq", "user-guide", "privacy-policy", "term-of-use"].some(
    route => activeRoute.includes(route)
  );
</script>

<style lang="scss">
  header {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 74px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 48px;
    background: transparent;
    z-index: 1000;

    &.white {
      color: $white;
      a,
      a:visited {
        color: $white !important;
      }
    }
  }
  .left {
    display: flex;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      img {
        height: 50px;
        display: inline-block;
        width: auto;
      }

      span {
        display: block;
        font-weight: bold;
        font-size: 18px;
        margin-left: 8px;
      }
    }

    .separator {
      width: 1px;
      height: 18px;
      border-left: 1px solid $pickledBluewood;
      margin: 0 3%;
      opacity: 0.2;
      margin: 0 30px;
    }

    ul.nav-links {
      list-style-type: none;
      display: flex;
      align-items: center;
      height: 100%;
      margin: 2px 0 0 0;
      padding-left: 0;

      &.guide a {
        color: $white;
      }

      li {
        display: inline-block;
        font-size: 12px;
        margin-right: 36px;
        text-transform: uppercase;
        opacity: 0.7;
        font-weight: 500;
        white-space: nowrap;

        &:hover {
          opacity: 1;
        }

        a {
          text-decoration: none;

          &:visited {
            color: $paleSky;
          }
        }
      }
    }
  }

  .user {
    display: flex;
    align-items: center;

    a {
      margin-left: 25px;
      font-weight: 600;
      font-size: 12px;
      text-transform: uppercase;
      color: $white;
    }
  }
</style>

<header class={whiteHeader ? 'white' : ''}>
  <div class="left">
    <Link to="/">
      <div class="logo">
        <img src="/images/logo.png" alt="Logo" />
        <span>Kazan</span>
      </div>
    </Link>
    <div class="separator" />
    <nav>
      <ul class="nav-links">
        <li>
          <a href="#" use:scrollto={'#why'}>Why Kazan?</a>
        </li>
        <li>
          <a href="#" use:scrollto={'#about'}>About Us</a>
        </li>
        <li>
          <a href="user-guide/download-and-install" use:link>User Guide</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="right">
    <div class="user">
      <a href="https://portal.kazantrading.com " class="button button--nav">
        {$t('login')}
      </a>
    </div>
  </div>
</header>
