<style lang="scss">
  section {
    height: 100vh;
    padding: 50px 150px;
    display: flex;
    justify-content: space-between;
    max-width: $maxWidth;
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
      padding-right: 20px;
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
      justify-content: center;

      img {
        height: 100%;
      }
    }
  }
</style>

<section>
  <div class="left">
    <h1>Kaizan không đơn thuần là EA</h1>
    <p>
      Khác với phần nhiều các EA trên thị trường được tạo lập nhằm hướng đến mục
      đích xây dựng một hệ thống tự động (hoặc bán tự động) với một phương pháp
      giao dịch nào đó.
      <br />
      Sứ mệnh Kaizan được tạo lập: Chỉ tập trung Duy nhất vào Quản trị Vốn & Tâm
      lí – 02 yếu tố chiếm đến 90% sự thành công trong giao dịch.
      <br />
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
