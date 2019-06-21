<script>

</script>

<style lang="scss">
  footer {
    background: $white;
    padding: 20px 80px 20px;
    display: flex;
    justify-content: space-between;
  }

  .left {
  }

  .logo {
    img {
      height: 150px;
    }
  }

  .right {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .title {
      font-size: 22px;
    }

    table {
      margin-top: 20px;
      text-align: left;

      th {
        padding-right: 20px;
      }
    }
  }
</style>

<footer>
  <div class="left">
    <div class="logo">
      <img src="/images/logo.png" />
    </div>
    <div class="">Copyright © 2019 - Kazantrading</div>
  </div>
  <div class="right">
    <div class="title">Contact:</div>
    <table>
      <tbody>
        <tr>
          <th>Email:</th>
          <td>kazantrading@gmail.com</td>
        </tr>
        <tr>
          <th>Telegram:</th>
          <td>kazantrading</td>
        </tr>
      </tbody>
    </table>
  </div>
</footer>
