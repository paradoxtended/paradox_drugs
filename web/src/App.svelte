<script lang="ts">
import { isEnvBrowser } from "./lib/utils/misc";

if (isEnvBrowser()) {
  const root = document.getElementById('app');

  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}
</script>

<div>
    CERT TO ZOBER NEVADI AJ TAK SI S VAMI DAM
</div>