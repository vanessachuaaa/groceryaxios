<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>
        </div>

        <div id="chart">
            <PSIIndex></PSIIndex>
        </div>

        <div id="chart">
            <CovidChart></CovidChart>
        </div>

        <div id="chart">
            <Transport></Transport>
        </div>

        <div id="chart">
            <CallAPI></CallAPI>
        </div>
        
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js'
import PSIIndex from '../PSIIndex.js'
import CovidChart from '../CovidChart.js'
import Transport from '../Transport.js'
import CallAPI from '../CallAPI.js'

export default {
    components:{
        axiosExample,PSIIndex, CovidChart, Transport, CallAPI
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
</style>