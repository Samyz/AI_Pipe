<template>
  <div
    class="bg"
    :style="{
      backgroundImage: `url('${require('../assets/background.svg')}')`,
    }"
  >
    <img
      id="x1_bt"
      class="x1_bt"
      :src="
        rotateTime == '2s'
          ? require('../assets/x1.svg')
          : require('../assets/x1_disable.svg')
      "
      @click="rotateTime = '2s'"
    />
    <img
      id="x2_bt"
      class="x2_bt"
      src="../assets/x2.svg"
      :src="
        rotateTime == '1s'
          ? require('../assets/x2.svg')
          : require('../assets/x2_disable.svg')
      "
      @click="rotateTime = '1s'"
    />
    <img
      id="x3_bt"
      class="x3_bt"
      src="../assets/x3.svg"
      :src="
        rotateTime == '0.5s'
          ? require('../assets/x3.svg')
          : require('../assets/x3_disable.svg')
      "
      @click="rotateTime = '0.5s'"
    />
    <img
      id="random_bt"
      class="random_bt"
      src="../assets/random.svg"
      @click="random"
    />
    <img id="play_bt" class="play_bt" src="../assets/play.svg" @click="run" />
    <img
      id="reset_bt"
      class="reset_bt"
      src="../assets/reset.svg"
      @click="reset"
    />
    <img id="time" class="time" src="../assets/time.svg" />
    <span id="time-text" class="time-text">{{ time.toFixed(6) }}</span>
    <img id="space" class="space" src="../assets/space.svg" />
    <span id="space-text" class="space-text">{{ space }}</span>
    <!-- <span id="map-number" class="map-number">{{ mapNumber }}</span> -->
    <div>
      <v-form ref="form">
        <v-select
          v-model="selectedAlgo"
          :items="searchAlgo"
          label="Please select algorithm"
          dense
          solo
          class="select_search"
          color="#FA7799"
          filled
          :rules="[(v) => !!v || 'Search method is required']"
          required
        ></v-select>
      </v-form>
    </div>
    <table
      style="position:absolute;top:55px;left:520px; line-height:0 !important;"
    >
      <tr v-for="(row, i) in map[this.mapNumber]">
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
import { AI_Pipe_BI_DFS } from "../store/lib/bidirectional-dfs";
import { AI_Pipe_BFS } from "../store/lib/bfs";

import { data } from "../store/lib/data";
export default {
  name: "Home",
  components: {},
  data: () => ({
    searchAlgo: [
      "Depth first search",
      "Bidirectional search",
      "Breadth first search",
    ],
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
    mapNumber: 0,
    isRunning: false,
    handleTimeout: null,
    selectedAlgo: "",
  }),
  created() {
    this.mapNumber = 0; //Math.floor(Math.random() * 10);
  },
  mounted() {
    for (var i = 0; i < 6; i++) {
      this.saveRotateMap.push([]);
      for (var j = 0; j < 8; j++) {
        this.saveRotateMap[i].push(0);
        this.saveRotateMap[i][j] =
          (this.map[this.mapNumber][i][j].direction - 1) * 90;
        document.getElementById(
          `pipe-${i}-${j}`
        ).style.transform = `rotate(${this.saveRotateMap[i][j]}deg)`;
      }
    }
  },
  methods: {
    async run() {
      if (this.$refs.form.validate()) {
        this.isRunning = true;
        var result;
        if (this.selectedAlgo == "Depth first search") {
          result = AI_Pipe_DFS(this.mapNumber);
        } else if (this.selectedAlgo == "Bidirectional search") {
          result = AI_Pipe_BI_DFS(this.mapNumber);
          result.answer.pop();
        } else {
          result = AI_Pipe_BFS(this.mapNumber);
          // console.log(result.answer);
        }
        this.time = result.time;
        this.space = result.space;
        console.log("->start");
        this.loopPlay(0, result.answer, 0);
      }
    },
    loopPlay(index, answer, ms) {
      this.handleTimeOut = setTimeout(() => {
        // console.log("->index :" + index);
        // console.log(
        //   `->i:${answer[index].x},j:${answer[index].y},rotate:${answer[index].rotate}`
        // );
        var isRotate = this.runIndex(
          answer[index].x,
          answer[index].y,
          answer[index].rotate
        );
        // if (index < 5 && this.isRunning) {
        if (index < answer.length - 1 && this.isRunning) {
          if (isRotate) {
            var delayTime;
            if (this.rotateTime == "2s") {
              delayTime = 2000;
            } else if (this.rotateTime == "1s") {
              delayTime = 1000;
            } else {
              delayTime = 500;
            }
            this.loopPlay(index + 1, answer, delayTime);
          } else {
            this.loopPlay(index + 1, answer, 0);
          }
        } else {
          console.log("->Finished");
        }
      }, ms);
    },
    runIndex(i, j, deg) {
      var newDegree =
        (deg + (this.map[this.mapNumber][j][i].direction - 1)) * 90;
      if (this.saveRotateMap[j][i] != newDegree) {
        this.saveRotateMap[j][i] = newDegree;
        document.getElementById(
          `pipe-${j}-${i}`
        ).style.transform = `rotate(${this.saveRotateMap[j][i]}deg)`;
        return true;
      } else {
        return false;
      }
    },
    reset() {
      clearTimeout(this.handleTimeOut);
      this.time = 0;
      this.space = 0;
      this.isRunning = false;
      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 8; j++) {
          this.saveRotateMap[i][j] =
            (this.map[this.mapNumber][i][j].direction - 1) * 90;
          document.getElementById(
            `pipe-${i}-${j}`
          ).style.transform = `rotate(${this.saveRotateMap[i][j]}deg)`;
        }
      }
    },
    random() {
      this.reset;
      this.mapNumber = Math.floor(Math.random() * 10);
    },
  },
  computed: {},
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
.x1_bt:hover {
  transform: scale(2);
}
.x1_bt:active {
  transform: scale(1.6);
}
.x2_bt {
  position: absolute;
  width: 64px;
  height: 56px;
  right: 40px;
  top: 200px;
  transform: scale(1.8);
}
.x2_bt:hover {
  transform: scale(2);
}
.x2_bt:active {
  transform: scale(1.6);
}
.x3_bt {
  position: absolute;
  width: 64px;
  height: 56px;
  right: 40px;
  top: 290px;
  transform: scale(1.8);
}
.x3_bt:hover {
  transform: scale(2);
}
.x3_bt:active {
  transform: scale(1.6);
}
.random_bt {
  position: absolute;
  width: 184px;
  height: 56px;
  left: 50px;
  top: 560px;
  transform: scale(1.5);
}
.random_bt:hover {
  transform: scale(1.7);
}
.random_bt:active {
  transform: scale(1.4);
}
.play_bt {
  position: absolute;
  width: 64px;
  height: 56px;
  right: 1190px;
  top: 560px;
  transform: scale(1.5);
}
.play_bt:hover {
  transform: scale(1.7);
}
.play_bt:active {
  transform: scale(1.4);
}
.reset_bt {
  position: absolute;
  width: 64px;
  height: 56px;
  right: 1100px;
  top: 560px;
  transform: scale(1.5);
}
.reset_bt:hover {
  transform: scale(1.7);
}
.reset_bt:active {
  transform: scale(1.4);
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
  left: 200px;
  top: 380px;
  font-size: 35px;
  color: #fa7799;
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
  color: #fa7799;
}
.select_search {
  position: absolute;
  width: 336px;
  height: 48px;
  left: 65px;
  top: 313px;
  transform: scale(1.1);
}
.map-number {
  position: absolute;
  left: 150px;
  top: 250px;
}
.pipe {
  width: 104px;
  height: 104px;
  transition: transform var(--rotateTime);
}
</style>
