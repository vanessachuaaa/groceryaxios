import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: () => ({
        results:[],
        chartdata: {
          //labels:['2020-3-05',4,5,6],
          labels:[],
          datasets: [
            {
              label: 'Number of cases',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"aqua",
              backgroundColor:'blue',
              fill:false
            }
          ]
          
        },
        options: {
            title:{
                display:true,
                text:'Covid-19 Cases on 2020-03-18 by Hour',
                fontColor:'Black',
                fontSize:15

            },
            legend:{
                display: false
            }
          
        }
      }),
    methods:{
    
    fetchData : function(){
        axios.get('https://covid19.soficoop.com/country/us').then(response=>{
        this.results=response.data.snapshots
        
        for(let ele = 0; ele < this.results.length; ele++){
            this.chartdata.datasets[0].data.push(this.results[ele].cases)
            //console.log(this.results[ele].cases)
            this.chartdata.labels.push(this.results[ele].timestamp.slice(11, 16) + '')
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })
    
    }
    
    },
     mounted(){
       // console.log('Do I come here')
        this.fetchData()
        
     }

    
    
    
}