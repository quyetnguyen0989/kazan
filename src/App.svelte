<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "@/routes/Home/index.svelte";
  import About from "./routes/About.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style global lang="scss">
  @import "./styles/styles.scss";
</style>

<Router>
  <Header />
  <div>
    <Route path="about" component={About} />
    <Route path="/">
      <Home />
    </Route>
  </div>
  <Footer />
</Router>
