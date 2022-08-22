function hideForm() {
    $("#myModal").modal("hide");
  }

  function showLoading() {
    $("#loading").modal();
  }

  function hideLoading() {
    $("#loading").modal("hide");
  }

  function requestCreateUser() {
    const form = document.forms.userForm;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (!payload.email) return alert("Please enter your email address");
    if (!payload.password || payload.password.length < 6)
      return alert("Password should not be shorter than 6 characters");

    form.reset();
    hideForm();
    showLoading();
    window.signup(payload)
      .then((user) => {
        alert("User Created Successfully");
        hideLoading();
      })
      .catch((error) => {
        alert(error.message);
        hideLoading();
      });
  };