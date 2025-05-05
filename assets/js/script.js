$(function () {

  document.querySelectorAll(".copy-text-btn").forEach((button) => {
    button.addEventListener("click", () => {
      // Get the ID of the target text from the button's data attribute
      const targetId = button.getAttribute("data-target");
      const textElement = document.getElementById(targetId);

      // Check if the element exists
      if (textElement) {
        const textToCopy = textElement.textContent || "";

        // Use Clipboard API to copy text
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            alert(`Text copied: "${textToCopy}"`);
          })
          .catch((err) => {
            console.error("Failed to copy text:", err);
            alert("Failed to copy text. Please try again.");
          });
      } else {
        alert("Target text not found!");
      }
    });
  });
});