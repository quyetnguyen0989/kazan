<style lang="scss">
  section {
    display: flex;
    justify-content: space-between;
    height: $subSectionHeight;
    align-items: center;
    max-width: $maxWidth;
    margin: 0 auto;
  }

  .left {
    width: 40%;
  }

  .right {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    &__img {
      width: 100%;
      display: block;
      justify-content: center;

      img {
        height: 100%;
      }
    }
  }

  p {
    font-size: 12px;
    line-height: 2;
  }
</style>

<section>
  <div class="left">
    <h1>Trước tiên phải giữ được tiền.</h1>

    <p>
      Giữ được tiền: Là bài học xương máu và đắt giá nhất mà mỗi Trader phải mất
      rất nhiều thời gian chỉ để trải qua và hiểu thấu. Vì ít ai hiểu được: Kỷ
      luật luôn là yếu tố cốt lõi để hình thành nên cơ sở Quản trị vốn và Rủi ro
      tối ưu của một Trader để từ đó đi đến được sự thành công.
    </p>
    <p>
      Kazan luôn tôn trọng Tri thức của Trader: Vì Kaizan không can thiệp hay
      thay thế phương pháp của Trader. Chỉ tập trung vào hỗ trợ yếu tố rèn luyện
      Kỉ luật qua: Quản trị Tâm lí & Quản trị vốn. Từ đó, Kazan vừa là một Trợ
      tá đắc lực để giúp hoàn thiện hơn hệ phương pháp giao dịch của Trader,
      cũng vừa là Người Vợ tốt để Quản trị chi tiêu dòng vốn tối ưu nhất, bảo vệ
      tối đa người dùng.
    </p>
    <button class="button button--primary button--section">How it works</button>
  </div>
  <div class="right">
    <div class="right__img">
      <img src="/images/Money.svg" />
    </div>
  </div>

</section>
