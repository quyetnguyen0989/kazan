<script>

</script>

<style lang="scss">
  section {
    background: #f7fbfe;
    width: 100%;
  }

  .wrapper {
    max-width: $maxWidth;
    padding: 120px 120px;
    margin: 0 auto;
  }

  .quotes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 40px;
    // max-width: $maxWidth;
    // margin: 0 auto;
  }

  .quote {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    background: $white;
    display: flex;
    flex-direction: column;

    blockquote {
      margin: 0;
      padding: 30px 40px;
      line-height: 1.5;

      &::before,
      &::after {
        content: "“";
        font-size: 28px;
        line-height: 16px;
      }

      &::before {
        margin-right: 10px;
      }

      &::after {
        margin-left: 10px;
      }
    }

    &__customer {
      margin-top: auto;
      padding: 20px 40px;
      background: #f6fafd;
      display: flex;
      flex-direction: row;
      align-items: center;
      max-height: 80px;

      img {
        width: 40px;
        max-width: 40px;
        border-radius: 50%;
        margin-right: 24px;
        height: 40px;
        max-height: 40px;
        object-fit: cover;
        object-position: center;
      }

      .title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 36px;
        b {
          font-size: 14px;
          color: #000;
        }

        span {
          font-size: 12px;
        }
      }
    }
  }
</style>

<section>
  <div class="wrapper">
    <h1>Trader nói gì về chúng tôi</h1>
    <div class="quotes">
      <div class="quote">
        <blockquote>
          Tôi rất thích con Kazan. Nó giúp tôi tiết kiệm thời gian và tránh sai
          sót khi đặt lệnh. Sử dụng và quản lý vốn dễ dàng. Kazan có tính năng
          cảnh báo những tin tức quan trọng trong ngày giúp tôi tiết kiệm thời
          gian trong trading.
        </blockquote>
        <div class="quote__customer">
          <img src="/testimonials/TrangPham.jpg" />
          <div class="title">
            <b>Trang Pham</b>
            <span>Trader, Nội trợ</span>
          </div>
        </div>
      </div>
      <div class="quote">
        <blockquote>
          Hiện nay tôi và đội nhóm của mình đang sử dụng Kazan. Kazan rất thuận
          tiện trong việc trao đổi với các thành viên khác. Trước đây chúng tôi
          phải share ảnh lên group và khi muốn sửa hoặc góp ý gì về phân tích,
          chúng tôi phải vẽ lại hoặc sử dụng phần mềm sửa ảnh. Nhưng với kazan
          chúng tôi chỉ cần "PUSH" và "GET". Đây là phần mềm rất tiện dụng cho
          việc trading.
        </blockquote>
        <div class="quote__customer">
          <img src="/testimonials/HuyDo.jpg" />
          <div class="title">
            <b>Huy Do</b>
            <span>Trader, Chuyên viên Oracle</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
