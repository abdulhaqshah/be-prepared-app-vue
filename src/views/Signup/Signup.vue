<template>
  <div>
    <Header btnName="Log In" redirectTo="{LOGIN}"/>
    <div class="signup-container">
      <div class="inner-container">
        <h1 class="heading" align="center">Sign Up</h1>
        <form @submit.prevent="submitForm">
          <div>
            <label class="labels">Your name</label>
            <br>
            <input class="field" name="name" type="text" v-model="user.name">
            <div class="error-msg">
                {{showSpecificErrorMsg(this.$v.user.name,"name")}}
            </div>
          </div>
          <div>
            <label class="labels">
              Email <span class="required-indicator">*</span>
            </label>
            <br>
            <input class="field" name="email" v-model="user.email">
            <div class="error-msg" v-show="$v.user.email.$error">
                {{showSpecificErrorMsg(this.$v.user.email,"email")}}
            </div>
          </div>
          <div>
            <label class="labels">
              Password <span class="required-indicator">*</span>
            </label>
            <br>
            <input class="field" name="password" type="password" v-model="user.password">
            <div class="error-msg" v-show="$v.user.password.$error">
                {{showSpecificErrorMsg(this.$v.user.password,"password")}}
            </div>
          </div>
          <div>
            <label class="labels">
              Confirm Password <span class="required-indicator">*</span>
            </label>
            <br>
            <input class="field" name="confirmPassword" type="password" v-model="user.confirmPassword">
            <div class="error-msg" v-show="$v.user.confirmPassword.$error">
                {{showSpecificErrorMsg(this.$v.user.confirmPassword,"confirmPassword")}}
            </div>
          </div>
          <div class="term-conditions">
            By clicking 'Create account', you agree to our Terms and
            Conditions and acknowledge that you have read our Privacy Policy
            and Disclosure Guidelines.
          </div>
          <div>
            <button class="button" name="signUpBtn" type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header  from "@/components/Header";
import Footer  from "@/components/Footer";
import { required, minLength, maxLength, sameAs, email } from 'vuelidate/lib/validators'

export default {
    name: "Signup",
    components: {
        Header,
        Footer
    },
    data(){
        return {
            user: {
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            errors:{}
        }
    },
    methods: {
        showSpecificErrorMsg(item, itemName) {
            debugger

            switch (itemName){
                case "name":
                    if (!item.max) {
                    return "Name can be max 20 charachter";
                    }else if (!item.min) {
                        return "Name should be min 3 charachter";
                    }
                    break;
                case "email":
                    if (!item.max) {
                        return "Email can be max 30 charachter";
                    }else if (!item.email) {
                        return "Invalid email format";
                    }else if (!item.required) {
                        return "Email is required";
                    }
                    break;
                case "password":
                    if (!item.max) {
                        return "Password can be max 20 charachter";
                    }else if (!item.min) {
                        return "Password should be min 6 charachter";
                    }else if (!item.required) {
                        return "Password is required";
                    }
                    break;
                case "confirmPassword":
                    if (!item.sameAsPassword) {
                        return "Confirm Password is not matching with Password";
                    }else if (!item.required) {
                        return "confirmPassword is required";
                    }
                    break;
                    
            }

        },
        submitForm() {
            this.$v.user.$touch();
            debugger
            console.log (this.$v.user.$error)
        }

    },
    validations: {
        user: {
            name: { min: minLength(3), max: maxLength(25) },
            email: { required, email, max: maxLength(30) },
            password: { required, min: minLength(6), max: maxLength(20) },
            confirmPassword: { required, sameAsPassword: sameAs('password') }
        },
    },
}
</script>

<style>
.signup-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
}
.inner-container {
  background: #fffdfd;
  padding-top: 4px;
  border: 2px solid black;
  border-radius: 15px;
  height: 625px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 80px;
}
.button {
  color: white;
  background-color: rgb(101, 119, 18);
  padding: 14px 20px;
  margin: 15px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  font: bold;
  font-family: cursive;
  font-size: 25px;
  border-radius: 8px;
}
.labels {
  margin-top: 6px;
  float: left;
}
.heading {
  padding-top: 10px;
  font: bold;
  font-family: cursive;
  font-size: 38px;
  align-items: center;
}
.field {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;
}
.field:hover {
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
}
.required-indicator {
  color: red;
  font-size: 19px;
  float: right;
}

.term-conditions {
  padding-top: 15px;
  font-size: 14px;
  color: #9e9e9e;
  line-height: 20px;
}
.error-msg {
  color: red;
}
</style>
