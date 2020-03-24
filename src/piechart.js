import {Pie} from 'vue-chartjs'
export default{
    extends:Pie,
    data: () => ({
        chartdata: {
          labels: ['January', 'February','March','April'],

          datasets: [
            {
              label: 'Sales',
              data: [400, 300,355,500],
              //each part of the ring will have a different colour
              //1:1 matching with the data
              backgroundColor:['aqua','lightgreen','red','orange'],
              borderWidth:0.5,
              borderColor:"#000"
            },
            {
                label: 'Cost',
                data: [150, 130,125,197],
                backgroundColor:['aqua','lightgreen','red','orange']
              }
          ]
          
        },
        options: {
          title:{
            display:true,
            text:'Pie Chart',
            fontColor:'Black',
            fontSize:15

          },
          scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            },
            layout:{
              padding:{
                  left: 5,
                  right: 0,
                  top: 0,
                  bottom: 10
              }
          },
          legend:{
            position:'bottom'
         },
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}