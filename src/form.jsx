function Form() {
  return (
    <div class="main_div">
      <form action="/action_page.php">
        <label for="fname"></label>
        <input type="text" class="textbox" id="fname"placeholder=" Email address or phone no" name="fname" />
        <br />
        <br  />
        <label for="lname"></label>
        <input type="text" class="textbox" placeholder=" Password
        " id="lname" name="lname" />
        <br />
        <br />
        <button type="button" class="login_button">Log In</button>
       <p class="forgot">forgotten Password?</p>
       <hr/>
       <button type="button" class="account_btn">Create New Account</button>
       
      </form>
    </div>
  );
}
export default Form;
