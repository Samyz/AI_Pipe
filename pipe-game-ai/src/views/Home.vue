<template>
  <div
    class="bg"
    :style="{
      backgroundImage: `url('${require('../assets/background.svg')}')`,
    }"
  >
    <img id="x1_bt" class="x1_bt" src="../assets/x1.svg" />
    <img id="x2_bt" class="x2_bt" src="../assets/x2.svg" />
    <img id="x3_bt" class="x3_bt" src="../assets/x3.svg" />
    <img id="random_bt" class="random_bt" src="../assets/random.svg" />
    <img id="play_bt" class="play_bt" src="../assets/play.svg" @click="run" />
    <img id="reset_bt" class="reset_bt" src="../assets/reset.svg" />
    <img id="time" class="time" src="../assets/time.svg" />
    <span id="time-text" class="time-text">{{ time }}</span>
    <img id="space" class="space" src="../assets/space.svg" />
    <span id="space-text" class="space-text">{{ space }}</span>
    <div>
      <v-select
        :items="searchAlgo"
        label="Please select algorithm"
        dense
        solo
        class="select_search"
        color="#FA7799"
        filled
        required
      ></v-select>
    </div>
    <table
      style="position:absolute;top:55px;left:520px; line-height:0 !important;"
    >
      <tr v-for="(row, i) in map[0]">
        <td v-for="(col, j) in row" style="height:auto !important;">
          <img
            :id="`pipe-${i}-${j}`"
            :src="require(`../assets/${pipeNumberToName[col.type]}.svg`)"
            class="pipe"
            :style="{ '--rotateTime': rotateTime }"
          />
          <!-- transform: 'rotate(' + saveRotateMap[i][j] + 'deg)' -->
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { AI_Pipe_DFS } from "../store/lib/dfs";
import { data } from "../store/lib/data";
export default {
  name: "Home",
  components: {},
  data: () => ({
    searchAlgo: ["Depth first search", "Bidirectional search"],
    pipeNumberToName: [
      "Null",
      "straight_without_water",
      "curve_without-water",
      "straight_with_water",
      "curve_with-water",
    ],
    map: data,
    saveRotateMap: [],
    rotateTime: "2s",
    time: 0,
    space: 0,
    answerLength: 0,
  }),
  created() {},
  mounted() {
    for (var i = 0; i < 6; i++) {
      this.saveRotateMap.push([]);
      for (var j = 0; j < 8; j++) {
        this.saveRotateMap[i].push(0);
        this.saveRotateMap[i][j] = (this.map[0][i][j].direction - 1) * 90;
        document.getElementById(
          `pipe-${i}-${j}`
        ).style.transform = `rotate(${this.saveRotateMap[i][j]}deg)`;
      }
    }
  },
  methods: {
    async run() {
      var result = AI_Pipe_DFS(0);
      this.time = result.time;
      this.space = result.space;
      console.log("->start");
      this.loopPlay(0, result.answer, 0);
    },
    loopPlay(index, answer, ms) {
      setTimeout(() => {
        var isRotate = this.runIndex(
          answer[index].x,
          answer[index].y,
          answer[index].rotate
        );
        console.log(isRotate);
        if (index < answer.length - 1) {
          console.log("->index :" + index);
          if (isRotate) {
            this.loopPlay(index + 1, answer, 2000);
          } else {
            this.loopPlay(index + 1, answer, 0);
          }
        } else {
          console.log("->Finished");
        }
      }, ms);
    },
    runIndex(i, j, deg) {
      var newDegree = (deg + (this.map[0][j][i].direction - 1)) * 90;
      if (this.saveRotateMap[j][i] != newDegree) {
        this.saveRotateMap[j][i] = newDegree;
        document.getElementById(
          `pipe-${j}-${i}`
        ).style.transform = `rotate(${this.saveRotateMap[j][i]}deg)`;
        return true;
      } else {
        return false;
      }
      // console.log(
      //   `->saveRotateMap[j][i]:${this.saveRotateMap[j][i]},deg:${deg},map[0][${j}][${i}]:${this.map[0][j][i].direction}`
      // );
    },
  },
  computed: {
    getRotateMap() {
      return this.saveRotateMap;
    },
  },
};
</script>
<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: no-repeat center center;
  background-size: cover;
  z-index: 0;
}
.x1_bt {
  position: absolute;
  width: 64px;
  height: 56px;
  right: 40px;
  top: 110px;
  transform: scale(1.8);
}
.x2_bt {
  position: absolute;
  width: 64px;
  height: 56px;
  right: 40px;
  top: 190px;
  transform: scale(1.8);
}
.x3_bt {
  position: absolute;
  width: 64px;
  height: 56px;
  right: 40px;
  top: 270px;
  transform: scale(1.8);
}
.random_bt {
  position: absolute;
  width: 184px;
  height: 56px;
  left: 50px;
  top: 560px;
  transform: scale(1.5);
}
.play_bt {
  position: absolute;
  width: 64px;
  height: 56px;
  right: 1190px;
  top: 560px;
  transform: scale(1.5);
}
.reset_bt {
  position: absolute;
  width: 64px;
  height: 56px;
  right: 1100px;
  top: 560px;
  transform: scale(1.5);
}
.time {
  position: absolute;
  width: 336px;
  height: 48px;
  left: 65px;
  top: 380px;
  transform: scale(1.1);
}
.time-text {
  position: absolute;
  left: 250px;
  top: 380px;
  font-size: 35px;
}
.space {
  position: absolute;
  width: 336px;
  height: 71px;
  left: 65px;
  top: 450px;
  transform: scale(1.1);
}
.space-text {
  position: absolute;
  left: 250px;
  top: 450px;
  font-size: 35px;
}
.select_search {
  position: absolute;
  width: 336px;
  height: 48px;
  left: 65px;
  top: 313px;
  transform: scale(1.1);
}
.pipe {
  width: 104px;
  height: 104px;
  transition: transform var(--rotateTime);
}
</style>
