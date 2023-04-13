<template>
    <div class="copy-info-box">
      <div ref="contentDiv" class="content">
        <slot></slot>
      </div>
      <button ref="copyButton" @click="copyToClipboard">
        Copy to Clipboard
      </button>
    </div>
  </template>
  

  <script>
  export default {
    props: {
      content: String,
    },
    methods: {
  async copyToClipboard() {
    const contentDiv = this.$refs.contentDiv;
    let copiedText = '';

    if (contentDiv) {
      contentDiv.childNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'P') {
          if (copiedText.length > 0) {
            copiedText += '\n\n'; // Add newline characters between paragraphs.
          }
          copiedText += node.innerText.trim();
        } else if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          if (copiedText.length > 0) {
            copiedText += '\n\n';
          }
          copiedText += node.textContent.trim();
        }
      });

      await navigator.clipboard.writeText(copiedText);
      this.$refs.copyButton.textContent = 'Copied!';
      setTimeout(() => {
        this.$refs.copyButton.textContent = 'Copy to Clipboard';
      }, 2000);
    } else {
      this.$refs.copyButton.textContent = 'Unable to Copy';
      setTimeout(() => {
        this.$refs.copyButton.textContent = 'Copy to Clipboard';
      }, 2000);
    }
  },
},





  };
  </script>
  
  <style scoped>
  .copy-info-box {
    background-color: #fff9db; /* subtle yellow background */
    border-radius: 10px; /* rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* slight box-shadow */
    transition: background-color 0.3s ease; /* transition for background color change on hover */
    padding-left: 2rem; /* Add padding to space the content and button */
    padding-right: 2rem;
    padding-top: 0.2rem;
    padding-bottom: 1rem;
    position: relative; /* needed for the button positioning */
    max-width: 600px; /* adjust the max-width to match your desired width for the component */
    margin-top: 1.2rem;
    margin-bottom: 2rem;
    color: black;
}
@media (prefers-color-scheme: dark) {
  .copy-info-box {
    --text-color: #333;
  }
}
  
  .copy-info-box:hover {
    /*background-color: #fffcf0; /* slightly lighter yellow background on hover */
  }
  

  
  .copy-info-box button {
    background-color: #ffd965;
    border: none;
    border-radius: 5px; /* rounded corners */
    font-size: 0.8rem;
    color: #333; /* you may want to match this color with the text color of the content */
    cursor: pointer;
    position: absolute;
    bottom: 0.5rem; /* control the space between the button and the bottom edge */
    right: 0.5rem; /* control the space between the button and the right edge */
    padding: 4px 8px; /* add padding for a better visual appearance */
  transition: background-color 0.3s ease; /* transition for background color change on hover */
  }
  .copy-info-box button:hover {
  background-color: #ffc53d; /* change background color on hover */
}
  .copy-info-box .content {
  margin-bottom: 2rem; /* create some space between content and button */
  line-height: 2.2; /* adjust the line height; bigger values create larger gaps between lines */
  white-space: pre-line; /* respect newline characters in content */
}
  </style>
  