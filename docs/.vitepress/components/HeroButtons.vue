<template>
  <div class="btns">
    <button class="btn watch">
      <div class="circle">
        <img class="triangle" src="/play.png" width="24px"  height="24px" />
      </div>
      <p>WHY IMPACTER?</p>
    </button>
    <button id="getstarted" class="btn start">GET STARTED</button>
    <button class="btn github">
      <img class="githubimg" src="/github.png" width="30px" height="30px" />
      GITHUB
    </button>
  </div>
</template>

<style scoped lang="css">
.btn {
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 52px;
  font-weight: 600;
  background-color: rgb(255, 109, 73);
  color: white;
  border-radius: 26px;
  font-size: 16px;
  cursor: pointer;
}

.btns {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btns .start {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: rgb(255, 109, 73);
  border: 1px solid rgb(255, 109, 73);
  padding: 0 20px;
  margin-right: 20px;
}

.btns .watch {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  padding-left: 10px;
  padding-right: 20px;
}

.btns .watch .circle {
  width: 34px;
  height: 34px;
  background-color: white;
  border-radius: 17px;
  margin-right: 14px;
  display: grid;
  place-content: center;
}

.btns .watch .triangle {
  transform: translateX(1.5px) translateY(1px);
}

.btns .github {
  border: 1px solid gray;
  color: gray;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 20px;
}

.btns  .github .githubimg {
  margin-right: 20px;
}
</style>
