<script>
  const events = [
    { name: "Ý tưởng và lập trình trên metatrader", time: "Aug 2016" },
    {
      name: "Hoàn thành version đầu tiên, Kazan 0.1, đăng ký hạn chế",
      time: "Feb 2018"
    },
    {
      name: "Đưa Kazan cho 4 nhóm trader forex và 1 nhóm trader stock VN",
      time: "May 2018"
    },
    {
      name: "Giới thiệu Kazan tại hội thảo Tickmill Vietnam",
      time: "Oct 2018"
    },
    {
      name: "Thu nhận những ý kiến đóng góp và đưa ra Kazan 1.0",
      time: "Feb 2019"
    },
    {
      name: "Hoàn thành kazan 1.1 và đưa ra phiên bản cho MT5",
      time: "May 2019"
    }
  ];
  const length = events.length - 1;
  const current = 2;

  const calculatePosition = index => {
    const left = (100 / length) * index;
    return `left: ${left}%;`;
  };

  const calculatePointPosition = index => {
    return calculatePosition(index);
  };

  const getEventConClass = index => {
    return `event-container ${index % 2 === 0 ? "" : "event-container--even"} ${
      index === current ? "event-container--current" : ""
    }`;
  };

  const getPointClass = index => {
    const classes = ["point"];
    if (index < current) {
      classes.push("point--active");
    }
    if (index === current) {
      classes.push("point--current");
    }
    return classes.join(" ");
  };
</script>

<style lang="scss">
  $eventOffset: 45px;
  section {
    height: 800px;
    background-image: radial-gradient(
      circle,
      #1a6fa3,
      #25628f,
      #2a557b,
      #2b4867,
      #293c54
    );
    padding: 100px 150px;
  }

  h1 {
    text-align: center;
    color: #dfe8f8;
  }

  .roadmap {
    display: flex;
  }

  .timeline {
    position: relative;
    background: rgba(#66d7f1, 0.4);
    height: 4px;
    width: 100%;
    margin-top: 250px;
    box-shadow: 0 0 16px 0 rgba(#81daf1, 0.5);

    .active {
      position: absolute;
      height: 4px;
      width: 25%;
      z-index: 1;
      background-image: linear-gradient(
        to bottom,
        #00bde8,
        #3cc4ea,
        #58ccec,
        #6ed3ee,
        #81daf1,
        #81daf1,
        #6ed3ee,
        #58ccec,
        #3cc4ea,
        #00bde8
      );
    }
  }

  .point {
    position: absolute;
    z-index: 1;
    left: 25%;
    height: 18px;
    width: 18px;
    background: #80a3e3;
    border: 5px solid #eff3fb;
    border-radius: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &--active {
      height: 12px;
      width: 12px;
      background: #3cc4ea;
      border: none;
      background: #a8e4f4;

      &:before {
      }
      .shadow {
        &:before {
          position: absolute;
          box-shadow: 0 0 12px 8px #6ed3ee;
          top: 6px;
          left: 50%;
          transform: translate(-50%, -50%);
          content: " ";
          background: transparent;
        }
      }
    }

    &--current {
      height: 26px;
      width: 26px;
      background: #3cc4ea;
      border: none;
      // background: #a8e4f4;
      border: 5px solid #eff3fb;

      &:before {
      }
      .shadow {
        &:before {
          position: absolute;
          box-shadow: 0 0 12px 8px #6ed3ee;
          top: 6px;
          left: 50%;
          transform: translate(-50%, -50%);
          content: " ";
          background: transparent;
        }
      }
    }
  }

  .moment {
    display: contents;
  }

  .event-container {
    position: absolute;
    left: 25%;
    transform: translateX(-50%);
    top: $eventOffset;
    text-align: center;

    &--current {
      .event {
        opacity: 0.75;
        box-shadow: 2px 0 24px 0 rgba(#131c2c, 0.3);

        &:after,
        &:before {
          bottom: 100%;
          left: 50%;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }

        &:after {
          border-bottom-color: #4d70b0;
          border-width: 10px;
          margin-left: -10px;
        }
        &:before {
          border-bottom-color: #4d70b0;
          border-width: 12px;
          margin-left: -12px;
        }

        &__name {
          background: #80a3e3;
        }

        &__date {
          background: #4d70b0;
        }
      }
    }

    &--even {
      bottom: calc(100% + #{$eventOffset});
      top: auto;

      .event {
        flex-direction: column-reverse;
      }
    }
  }

  .event {
    opacity: 0.65;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 190px;

    &__date {
      font-size: 22px;
      padding: 12px 10px;
      color: #bfd1f1;
    }

    &__name {
      color: #ffffff;
      font-size: 16px;
      line-height: 1.5;
      padding: 10px;
    }

    &--current & {
    }
  }
</style>

<section>
  <h1>Roadmap</h1>
  <div class="roadmap">
    <div class="timeline">
      <div class="active" style="width: {(100 / length) * current}%" />
      {#each events as event, index}
        <div class="moment">
          <div class={getPointClass(index)} style={calculatePosition(index)}>
            <div class="shadow" />
          </div>
          <div class={getEventConClass(index)} style={calculatePosition(index)}>
            <div class="event">
              <div class="event__date">{event.time}</div>
              <div class="event__name">{event.name}</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
