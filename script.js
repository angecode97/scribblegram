// These are the only images that should appear in the post grid.
// The profile picture is intentionally not included because it is only the avatar.
const postImages = [
  "assets/post2.jpg",
  "assets/post3.jpg",
  "assets/post4.jpg",
  "assets/post6.jpg",
  "assets/post7.jpg",
  "assets/post8.jpg",
  "assets/post9.jpg",
  "assets/post10.jpg",
  "assets/post11.jpg",
  "assets/post12.jpg",
  "assets/post13.jpg",
  "assets/post14.jpg",
  "assets/post15.jpg",
  "assets/post16.jpg",
  "assets/post17.jpg"
];

// Find the parts of the page that JavaScript needs to control.
const postGrid = document.querySelector("#postGrid");
const imageViewer = document.querySelector("#imageViewer");
const viewerImage = document.querySelector("#viewerImage");
const backButton = document.querySelector("#backButton");

// Build the grid automatically from the postImages array above.
postImages.forEach((imagePath, index) => {
  const post = document.createElement("img");

  post.src = imagePath;
  post.alt = `ScribbleGram post ${index + 1}`;
  post.className = "post";

  // Give each thumbnail a tiny tilt for the messy scribble-art style.
  post.style.setProperty("--tilt", `${(index % 5) - 2}deg`);

  // Only post images get this click event.
  post.addEventListener("click", () => {
    openViewer(imagePath, post.alt);
  });

  postGrid.appendChild(post);
});

// Show the selected image in the full-screen viewer.
function openViewer(imagePath, imageAlt) {
  viewerImage.src = imagePath;
  viewerImage.alt = imageAlt;
  imageViewer.classList.add("is-open");
  imageViewer.setAttribute("aria-hidden", "false");
}

// Close the full-screen viewer and return to the profile grid.
function closeViewer() {
  imageViewer.classList.remove("is-open");
  imageViewer.setAttribute("aria-hidden", "true");
  viewerImage.src = "";
}

// The back button is the only viewer control.
backButton.addEventListener("click", closeViewer);
