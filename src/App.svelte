<script>
  import { Router, Link, Route } from "./svelte-routing";
  import Home from "@/routes/Home/index.svelte";
  import About from "./routes/About.svelte";
  import UserGuide from "@/routes/UserGuide/index.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  let currentRoute = "/";
  const onChange = route => {
    currentRoute = route;
  };
</script>

<style global lang="scss">
  @import "./styles/styles.scss";
</style>

<Router {onChange}>
  <Header {currentRoute} />
  <div>
    <Route path="/" component={Home} />
    <Route path="*" component={UserGuide} />
    <!-- <Route path="/" component={UserGuide} /> -->
    <!-- <Route component={Redirect} /> -->
  </div>
  <Footer />
</Router>
