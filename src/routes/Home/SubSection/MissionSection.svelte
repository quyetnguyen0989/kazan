<script>
  import { onMount } from "svelte";
  import { _ as t } from "svelte-i18n";

  const missions = [
    {
      img: "protect-balance.svg",
      title: $t("protectBalance"),
      description: $t("protectBalanceDesc")
    },
    {
      img: "money-manager.svg",
      title: $t("moneyManager"),
      description: $t("moneyManagerDesc")
    },
    {
      img: "trading-psychology.svg",
      title: $t("tradingPsycho"),
      description: $t("tradingPsychoDesc")
    }
  ];
</script>

<style lang="scss">
  section {
    text-align: center;
    max-width: $maxWidth;
    margin: 0 auto;
  }

  h1 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 100px;
  }

  .flex-container {
    display: flex;
  }

  .flex-item {
    width: 33.3%;
    padding: 20px;
    flex: 1 0 auto;
  }

  .mission {
    position: relative;
    border: 1px solid #fff;
    border-radius: 10px;
    box-shadow: 0 9px 47px -2px rgba(85, 149, 240, 0.31);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 30px 30px 30px;
    height: 100%;

    &__image {
      padding-bottom: 10px;

      img {
        padding: 20px;
        height: 125px;
        width: 125px;
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

<section id="why">
  <h1>Sứ mệnh Kazan</h1>

  <div class="flex-container">
    {#each missions as mission}
      <div class="flex-item">
        <div class="mission">
          <div class="mission__image">
            <img src={`/images/${mission.img}`} />
          </div>
          <div class="mission__content">
            <h3>{mission.title}</h3>
            <span>{mission.description}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
