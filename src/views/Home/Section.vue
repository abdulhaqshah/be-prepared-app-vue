<template>
  <div>
    <section id="intro" class="mainPage_topBar">
      <h1>Mock interview with engineers</h1>
      <p>We provide the same experience as real interviews and you'll get real feedback in the end.</p>
      <Router-Link :to="signup">
        <button class="navigation-auth_signup-button">Sign Up</button>
      </Router-Link>
    </section>

    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Double Your Chance of Getting Hired in 45 Minutes</h2>
          </div>
        </div>
      </div>
      <div class="container content padding-top-30">
        <div class="row">
          <div class="col-lg-4 col-md-6 text-center">
            <div class="service-box">
              <font-awesome-icon icon="users" size="4x"/>
              <h3>Get introduced to interviewers</h3>
              <p>Tell us about your target companies, preferred time slots, etc. We'll introduce you to experienced interviewers who can help you.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 text-center">
            <div class="service-box">
              <font-awesome-icon icon="desktop" size="4x"/>
              <h3>Conduct interview online</h3>
              <p>Interviews are conducted via Skype with the help of code-sharing tools.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 text-center">
            <div class="service-box">
              <font-awesome-icon icon="heart" size="4x"/>
              <h3>Get real feedback</h3>
              <p>Get immediate feedback at the end of the interview. You are also encouraged to ask whatever questions you have.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="offers">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="section-heading">Weekly Tips</h2>
            <p class="section-description">Be Prepare provides weekly tips and tricks to help you prepare your coding interviews. Topics include coding questions, system design interviews, preparation tips etc..</p>
          </div>
        </div>
      </div>
    </section>

    <section id="join">
      <div class="container text-center">
        <div class="row">
          <p class="section-description col-lg-12">
            Want to become an interviewer? Shoot us an email about
            <b>info@beprepared.com</b>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FE_PATHS } from "../../constants/index";

library.add(faHeart);
library.add(faUsers);
library.add(faDesktop);

export default {
  data() {
    return {
      signup: FE_PATHS.SINGUP
    }
  }
};
</script>

<style>
section {
  padding: 100px 0;
}

.padding-top-30 {
  padding-top: 30px;
}

#intro {
  margin-top: 4%;
  color: whitesmoke;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://cdn-images-1.medium.com/max/4000/0*ngXgBNNdx6iiWP8q.png);
  background-position: center;
}

#about {
  padding: 60px;
}

#offers {
  padding: 60px;
  background-color: #439fe0;
}

#join {
  padding: 100px 0 10px;
}

.navigation-auth_signup-button {
  text-align: center;
  background-color: #f2bb13;
  color: #454c55;
  font-size: 14px;
  font-weight: 600;
  height: 52px;
  line-height: 52px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  padding: 0 5px;
  min-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background 0.2s;
  height: 42px;
  line-height: 42px;
  width: 50%;
  max-width: 150px;
  margin: 0 5px;
  min-width: 0;
  font-family: fantasy;
}
</style>
