<script>
  export let categories;
</script>

<style>
  .container {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: clamp(13px, 0.9375vw, 18px);
  }

  ul.ks-cboxtags {
    list-style: none;
  }
  ul.ks-cboxtags li {
    display: inline;
    margin-right: 20px;
  }
  ul.ks-cboxtags li label {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(139, 139, 139, 0.3);
    color: #adadad;
    border-radius: 25px;
    white-space: nowrap;
    margin: 3px 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.2s;
  }

  ul.ks-cboxtags li label {
    padding: 8px 12px;
    cursor: pointer;
  }

  ul.ks-cboxtags li input[type="checkbox"]:checked + label {
    border: 2px solid #eeb20d;
    background-color: #ffbe0b;
    color: #fff;
    transition: all 0.2s;
  }

  ul.ks-cboxtags li input[type="checkbox"] {
    display: absolute;
  }
  ul.ks-cboxtags li input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }
  /* ul.ks-cboxtags li input[type="checkbox"]:focus + label {
    border: 2px solid rgba(139, 139, 139, 0.3);
  } */
</style>

<div class="container">
  <ul class="ks-cboxtags">
    {#each categories as area, i}
      <li>
        <input type="checkbox" id={area} value={area} /><label
          for={area}
        >{@html area}</label>
      </li>
    {/each}
  </ul>
</div>
