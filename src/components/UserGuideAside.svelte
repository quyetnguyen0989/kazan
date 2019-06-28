<script>
  import { onMount } from "svelte";
  import { links, Link } from "svelte-routing";
  const menus = [
    {
      text: "Hướng dẫn sử dụng",
      link: "user-guide",
      redirect: "user-guide/download-and-install",
      childrens: [
        {
          text: "Download và cài đặt",
          link: "download-and-install"
        },
        {
          text: "Add kazan vào mt4",
          link: "add-to-mt4"
        },
        {
          text: "Tính năng của kazan",
          link: "features"
        }
      ]
    },
    {
      text: "Câu hỏi thường gặp",
      link: "faq",
      redirect: "faq/turn-on-auto-trading",
      childrens: [
        {
          text: "Bật auto trading",
          link: "turn-on-auto-trading"
        },
        {
          text: "Sai username và password",
          link: "wrong-email-password"
        },
        {
          text: "Không tìm thấy group",
          link: "cannot-find-group"
        },
        {
          text: "Lỗi gọi tới server kazan",
          link: "server-error"
        }
      ]
    },
    { text: "Chính sách bảo mật", link: "privacy-policy" },
    { text: "Điều khoản sử dụng", link: "terms-of-use" }
  ];

  let currentRoute = "";

  onMount(() => {
    currentRoute = window.location.pathname;
  });

  const onChangeRoute = path => {
    currentRoute = path;
  };
</script>

<style lang="scss">
  aside {
    padding: 74px 52px 40px 90px;
    min-width: 380px;
  }
  .menu {
    &__title {
      color: $paleSky;
      margin-top: 20px;
      font-size: 16px;
      font-weight: bold;

      &.active {
        color: $curciousBlue;
      }
    }

    &__list {
      list-style-type: none;
      font-size: 14px;
    }

    &__children {
      margin-top: 18px;

      &.active {
        font-weight: bold;
      }
    }
  }
</style>

<aside>
  {#each menus as menu}
    <div class="menu">
      <div class="menu__title" class:active={currentRoute.includes(menu.link)}>
        <Link
          to={menu.hasOwnProperty('redirect') ? menu.redirect : menu.link}
          getProps={({ isCurrent, href }) => isCurrent && onChangeRoute(href)}>
           {menu.text}
        </Link>
      </div>
      {#if menu.hasOwnProperty('childrens') && currentRoute.includes(menu.link)}
        <ul class="menu__list">
          {#each menu.childrens as child}
            <li
              class="menu__children"
              class:active={currentRoute.includes(child.link)}>
              <Link
                to={`${menu.link}/${child.link}`}
                getProps={({ isCurrent, href }) => isCurrent && onChangeRoute(href)}>
                 {child.text}
              </Link>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {/each}
</aside>
