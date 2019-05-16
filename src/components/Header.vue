<template>
    <nav id="navigation" class="navigation-nav-container">
        <router-link class="navigation-logo" to="/">Be Prepared</router-link>
        <router-link to='redirectTo'>
          <div class="navigation-auth">
            <button class="navigation-auth-login-button">{{btnName}}</button>
          </div>
        </router-link>
    </nav>
</template>

<script>
export default {
  props:[
    'btnName',
    'redirectTo'
  ],
  components: {
  }
};
</script>

<style>
#navigation {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  height: 70px;
  width: 100%;
  background-color: #252e38;
  box-shadow: 0 0 25px 0 #131c25;
}
.navigation-logo {
  height: 100%;
  align-items: center;
  transition: opacity, 0.2s;
  height: 18px;
  padding-top: 30px;
  padding-left: 10px;
  font-size: 250%;
  color: white;
  font-display: bold;
  font-family: fantasy;
  display: flex;
}
.navigation-auth {
  display: flex;
  margin: -14px 15px;
  float: right;
  width:170px
}
.navigation-auth .navigation-auth-login-button {
  text-align: center;
  background-color: hsla(0, 0%, 100%, 0.08);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  border: black;
  cursor: pointer;
  padding: 1px 5px;
  min-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background 0.2s;
  height: 42px;
  line-height: 42px;
  width: 70%;
  max-width: 150px;
  margin: 0 5px;
  min-width: 0;
  float: right;
  flex: 1;
  padding-bottom: 4px;
  font-family: fantasy;
  padding-left: 5px;
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

