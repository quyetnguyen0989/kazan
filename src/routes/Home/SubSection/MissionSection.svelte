<script>
  const missions = [
    {
      img: "",
      title: "Protect balance",
      description:
        "Eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis."
    },
    {
      img: "",
      title: "Money manager",
      description:
        "Turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris"
    },
    {
      img: "",
      title: "Trading psychology",
      description:
        "Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in"
    }
  ];
</script>

<style lang="scss">
  section {
    text-align: center;
    padding: 50px 0;
  }

  h1 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 100px;
  }

  .missions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mission {
    position: relative;
    height: 100%;
    width: 30%;
    border: 1px solid #fff;
    border-radius: 10px;
    box-shadow: 0 9px 47px -2px rgba(85, 149, 240, 0.31);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 40px 40px 40px;

    &__image {
      padding-bottom: 10px;

      img {
        padding: 25px;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: 1px solid rgba($paleSky, 0.3);
      }
    }

    &__content {
      bottom: 0;
      padding-bottom: 20px;

      h5 {
        font-size: 16px;
        font-weight: bold;
      }

      span {
        font-size: 12px;
        line-height: 2.4;
      }
    }
  }
</style>

<section>
  <h1>Sứ mệnh Kazan</h1>

  <div class="missions">
    {#each missions as mission}
      <div class="mission">
        <div class="mission__image">
          <img src="" />
        </div>
        <div class="mission__content">
          <h3> {mission.title} </h3>
          <span>{mission.description}</span>
        </div>
      </div>
    {/each}
  </div>
</section>
