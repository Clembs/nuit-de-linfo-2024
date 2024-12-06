<script>
    export let message = '';
    export let visible = false;
    export let imageSrc = '';
  
    function closeAlert() {
      visible = false;
    }
  </script>
  
  {#if visible}
    <div class="alert">
      {#if imageSrc}
        <img src={imageSrc} alt="Alert image" class="alert-image" />
      {/if}
      <p>{message}</p>
      <button on:click={closeAlert}>Close</button>
    </div>
  {/if}
  
  <style>
    .alert {
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #f8d7da;
      color: #721c24;
      padding: 1rem;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .alert-image {
      width: 50px; /* Adjust size as needed */
      height: 50px; /* Adjust size as needed */
      margin-bottom: 10px;
    }
  
    .alert button {
      margin-top: 0.5rem;
      padding: 0.5rem;
      border: none;
      background-color: #721c24;
      color: white;
      cursor: pointer;
      border-radius: 3px;
    }
  </style>
  