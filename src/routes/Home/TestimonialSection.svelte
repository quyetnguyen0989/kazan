<style lang="scss">
  section {
    background: #f7fbfe;
    padding: 120px 180px;
  }

  .quotes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 40px;
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
  <h1>Testimonial</h1>
  <div class="quotes">
    <div class="quote">
      <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate
        mi sit amet mauris commodo quis. Erat nam at lectus urna duis.
      </blockquote>
      <div class="quote__customer">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <div class="title">
          <b>Han Trong Binh</b>
          <span>Front-end Developer</span>
        </div>
      </div>
    </div>
    <div class="quote">
      <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet
        massa vitae tortor condimentum lacinia quis. Ultricies tristique nulla
        aliquet enim tortor.
      </blockquote>
      <div class="quote__customer">
        <img
          src="http://baogialai.com.vn/dataimages/201805/original/images2653011_h_7.jpg" />
        <div class="title">
          <b>Nguyen Ngoc Phuong Vy</b>
          <span>Student</span>
        </div>
      </div>
    </div>
  </div>
</section>
