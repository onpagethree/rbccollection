// Initialize an array to store like counts
let likeCounts = [];

// Retrieve like counts from local storage or default to 0
for (let i = 0; i < 24; i++) {
  likeCounts[i] = parseInt(localStorage.getItem(`likeCount${i}`)) || 0;
  updateLikeCounter(i);
}

function toggleLike(index) {
  likeCounts[index]++;
  updateLikeCounter(index);

  // Store the updated like count in local storage
  localStorage.setItem(`likeCount${index}`, likeCounts[index]);

  const likeButton = document.querySelectorAll('.likeButton')[index];
  const likeCounter = document.querySelectorAll('.likeCounter')[index];

  likeButton.classList.toggle('liked');

  // Apply 'liked' class to likeCounter when there's at least 1 like
  if (likeCounts[index] >= 1) {
    likeCounter.classList.add('liked');
  }

  // Reset the 'liked' class and color after 2 seconds
  setTimeout(() => {
    likeButton.classList.remove('liked');
    likeCounter.classList.remove('liked');
  }, 1200);
}

function updateLikeCounter(index) {
  const likeCounter = document.querySelectorAll('.likeCounter')[index];
  likeCounter.innerHTML = likeCounts[index];
}
