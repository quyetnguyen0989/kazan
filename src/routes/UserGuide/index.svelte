<script>
  import UserGuideAside from "@/components/UserGuideAside.svelte";
  import { Router, Route } from "svelte-routing";
  import {
    DownloadAndInstall,
    AddKazanToMT4,
    FeaturesOfKazan
  } from "@/contents/UserGuide/index.js";
  import {
    TurnOnAutoTrading,
    WrongEmailPassword,
    CannotFindGroup,
    ServerError
  } from "@/contents/FAQ/index.js";
  import { PrivacyPolicy, TermsOfUse } from "@/contents/index.js";
</script>

<style lang="scss">
  main {
    padding-top: 74px;
  }
  aside {
    padding: 40px;
  }
  .menu {
    &__title {
      color: $paleSky;
      margin-top: 20px;
      font-size: 16px;
      font-weight: bold;
    }

    &--active {
      font-weight: bold;
    }

    &__list {
      list-style-type: none;
      font-size: 14px;

      &--active {
        color: black;
      }
    }

    &__children {
      margin-top: 14px;
    }
  }
</style>

<Router>
  <div style="display: flex">
    <UserGuideAside />
    <main>
      <Route path="user-guide/download-and-install">
        <DownloadAndInstall />
      </Route>
      <Route path="user-guide/add-to-mt4">
        <AddKazanToMT4 />
      </Route>
      <Route path="user-guide/features">
        <FeaturesOfKazan />
      </Route>
      <Route path="faq/turn-on-auto-trading">
        <TurnOnAutoTrading />
      </Route>
      <Route path="faq/wrong-email-password">
        <WrongEmailPassword />
      </Route>
      <Route path="faq/cannot-find-group">
        <CannotFindGroup />
      </Route>
      <Route path="faq/server-error">
        <ServerError />
      </Route>
      <Route path="privacy-policy">
        <PrivacyPolicy />
      </Route>
      <Route path="terms-of-use">
        <TermsOfUse />
      </Route>
    </main>
  </div>
</Router>
