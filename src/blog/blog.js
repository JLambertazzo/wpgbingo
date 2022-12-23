const postId = new URLSearchParams(window.location.search).get("id");

posts
  .map((post) =>
    el(
      "div",
      [],
      { class: "post" },
      el("p", [], {}, t(post.title)),
      el("p", [], {}, t(post.date))
    )
  )
  .forEach((postEl) => {
    document.querySelector("#posts-container").appendChild(postEl);
  });
