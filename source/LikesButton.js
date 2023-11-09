// 좋아요 버튼 구성하기
// Function to set a cookie
// Function to get the value of a cookie

// Function to set a cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/; domain=onpagethree.github.io.`; // Change 'yourdomain.com' to your actual domain
}

// Function to get the value of a cookie
function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

// Initialize an array to store like counts
let likeCounts = [];

// Retrieve like counts from cookies or default to 0
for (let i = 0; i < 24; i++) {
  likeCounts[i] = parseInt(getCookie(`likeCount${i}`)) || 0;
  updateLikeCounter(i);
}

// Get all like buttons and counters
const likeButtons = document.querySelectorAll('.likeButton');
const likeCounters = document.querySelectorAll('.likeCounter');

// Add click event listeners to each like button
likeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleLike(index);
  });
});

function toggleLike(index) {
  likeCounts[index]++;
  updateLikeCounter(index);

  // Store the updated like count in a cookie
  setCookie(`likeCount${index}`, likeCounts[index]);

  const likeCounter = likeCounters[index];

  // Apply 'liked' class to likeCounter when there's at least 1 like
  if (likeCounts[index] >= 1) {
    likeCounter.classList.add('liked');
  }

  // Reset the 'liked' class after 1 second
  setTimeout(() => {
    likeCounter.classList.remove('liked');
  }, 1000);
}

function updateLikeCounter(index) {
  const likeCounter = likeCounters[index];
  likeCounter.innerHTML = likeCounts[index];
}
