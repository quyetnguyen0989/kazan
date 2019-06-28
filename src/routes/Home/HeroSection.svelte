<style lang="scss">
  section {
    height: 100vh;
    padding: 50px 150px;
    display: flex;
    justify-content: space-between;
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

  .right {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5%;

    &__img {
      width: 100%;
      display: block;
      display: flex;
      justify-content: center;

      img {
        height: 100%;
      }
    }
  }
</style>

<section>
  <div class="left">
    <h1>Sử dụng Kazan theo cách của bạn</h1>
    <p>
      - Hơn 80 tính năng(chia làm 3 nhóm chính)
      <br />
      - 46 phím tương tác và hiển thị
      <br />
      - 11 phím tắt
      <br />
      - 71 tùy chọn setup ban đầu
    </p>

    <div class="left__button">
      <button class="button button--primary">Get Started</button>
    </div>
  </div>
  <div class="right">
    <div class="right__img">
      <img src="/images/Main.svg" />
    </div>
  </div>
</section>
