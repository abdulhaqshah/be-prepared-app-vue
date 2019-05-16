<template>
  <div className="page-landing">
    <Header btnName="Log In" redirectTo="LOGIN" />
    <Section />
    <Footer />
  </div>
</template>

<script>
import Header  from "../components/Header";
import Footer  from "../components/Footer";
import Section from "./Section";

export default {
  name: "home",
  components: {
    Header,
    Section,
    Footer
  }
};
</script>
