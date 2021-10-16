<template>
    <div>
        <h2 class="text-center mb-3">Vue Get Full Date and Time Example</h2>
        <ul class="list-group">
          <li class="list-group-item" v-show="timestamp"><strong>Timestamp:</strong> {{ timestamp }}</li>
          <li class="list-group-item" v-show="date"><strong>Date:</strong> {{ date }}</li>
          <li class="list-group-item" v-show="time"><strong>Time:</strong> {{ time }}</li>
          <li class="list-group-item" v-show="year"><strong>Current Year:</strong> {{ year }}</li>
          <li class="list-group-item" v-show="fulldatetime"><strong>Full Date:</strong> {{ fulldatetime }}</li>
        </ul>
    </div>  
</template>

<script>
    export default {
        name: "DateComponent",
        data: () => ({
          date: '',
          time: '',
          year: '',
          timestamp: '',
          fulldatetime: ''
        }),
        methods: {
          //printDate: function () {
          //  return new Date().toLocaleDateString();
          //},
          //printTime: function () {
          //  return new Date().toLocaleTimeString();
          //},
          //printYear: function () {
          //  return new Date().getFullYear();
          //},          
          printTimestamp: function () {
            return Date.now();
          },
          //printFullDate: function(){
          //  return new Date();
          //}
        },
        mounted: function () {
          this.date = this.printDate();
          this.time = this.printTime();
          this.timestamp = this.printTimestamp();
          this.year = this.printYear();
          this.fulldatetime = this.printFullDate();
        },
    };
</script>