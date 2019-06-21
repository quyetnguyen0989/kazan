<style lang="scss">
  section {
    height: 100vh;
    padding: 50px 150px;
  }

  .left {
    width: 40%;
    height: 100%;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: $curciousBlue;
    }

    p {
      font-size: 12px;
      line-height: 2.5;
      color: rgba(#657180, 0.7);
    }

    &__button {
      margin-top: 40px;
      .button {
        padding: 18px 36px;
        font-size: 14px;
        border-radius: 25px;
      }
    }
  }
</style>

<section>
  <div class="left">
    <h1>Pretium Vulputate Sapien Nec Sagittis</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Egestas egestas
      fringilla phasellus faucibus scelerisque. Sollicitudin ac orci phasellus
      egestas tellus rutrum.
    </p>

    <div class="left__button">
      <button class="button button--primary">Get Started</button>
    </div>

  </div>
</section>
