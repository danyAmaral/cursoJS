<template>
    <div id="app">
        <h1>Calculadora</h1>
        <Calculator></Calculator>
    </div>
</template>

<script>
import Calculator from './main/Calculator';

export default {
    components: { Calculator }
}
</script>

<style>

@font-face {
    font-family: "RobotoMono";
    src: url('./fonts/Roboto-Thin.ttf');
}

* {
    font-family: "RobotoMono", monospace;
}


body {
  margin: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #FFF;
  background: linear-gradient(to right, rgb(83,105,118), rgb(41,46,73));
}

</style>