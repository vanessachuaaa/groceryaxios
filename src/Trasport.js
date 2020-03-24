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
              label: 'Total number of riders',
               data:[],
              //backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"red",
              backgroundColor:'orange',
              fill:false
            }
          ]
          
        },
        options: {
            title:{
                display:true,
                text:'Average ridership for MRT by year',
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
        axios.get('https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a').then(response=>{
        this.results=response.data.result.records
        //console.log(this.results)
        for(let ele = 0; ele < this.results.length; ele++){
            if (this.results[ele].type_of_public_transport == "MRT") {
                this.chartdata.datasets[0].data.push(this.results[ele].average_ridership)
                this.chartdata.labels.push(this.results[ele].year + '')
            }
            
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