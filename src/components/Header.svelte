<script>

</script>

<style lang="scss">
  header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 74px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 48px;
    background: $white;
    z-index: 1000;
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
    }
  }
</style>

<header>
  <div class="left">
    <div class="logo">
      <img src="/images/logo.png" alt="Logo" />
      <span>Kazan</span>
    </div>
    <div class="separator" />
    <nav>
      <ul class="nav-links">
        <li>
          <a>Why Kazan?</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>User Guide</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="right">
    <div class="user">
      <button class="button button--nav">Login</button>
      <a>Register</a>
    </div>
  </div>
</header>
