$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var postId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/cms?post_id=1, postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }

  // Getting jQuery references to the post description, name, form, and category select
  var descriptionInput = $("#description");
  var projectNameInput = $("#name");
  var todoForm = $("#to-do");
  var projectUrgency = $("#urgency");
  var projectStatus = $("status");
  var dueDate = $("due-date");
  var projectCategorySelect = $("#category");
  // Giving the projectCategorySelect a default value
  projectCategorySelect.val("Personal");
  // Adding an event listener for when the form is submitted
  $(todoForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a description or a name
    if (!projectNameInput.val().trim() || !descriptionInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newProject = {
      name: projectNameInput.val().trim(),
      description: descriptionInput.val().trim(),
      urgency: projectUrgency.val(),
      status: projectStatus.val(),
      date: dueDate.val().trim(),
      category: projectCategorySelect.val()
    };

    console.log(newPost);

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    }
    else {
      submitProject(newProject);
    }
  });

  // Submits a new post and brings user to blog page upon completion
  function submitProject(Project) {
    $.post("/api/projects/", Project, function() {
      window.location.href = "/list";
    });
  }

  // Gets post data for a post if we're editing
  function getPostData(id) {
    $.get("/api/posts/" + id, function(data) {
      if (data) {
        // If this post exists, prefill our to-do forms with its data
        projectNameInput.val(data.name);
        descriptionInput.val(data.description);
        projectUrgency.val(data.urgency);
        projectStatus.val(data.status);
        dueDate.val(date);
        projectCategorySelect.val(data.category);
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
      .then(function() {
        window.location.href = "/list";
      });
  }
});
