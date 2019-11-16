Vue.component('measurement-item', {
    template: '\
    <li>\
        \
        <p v-on:click="$emit(\'remove\')"><span>&times</span>{{ num }}</p>\
    </li>\
    ',
    props: ['num']
})

var app = new Vue({
    el: '#app',
    data: {
        //Коэффициенты и погрешности
        tpn: 0,
        bpn: 0,
        upn: 0, 
        vpn: 0,
        instrument_error: '',
        new_instrument_error: 0,
        random_error: 0,
        range_error: 0,
        complete_error: 0,
        relative_error: 0,

        choise: null,
        measurements: [],
        newMeasurementNumber: '',
        nextMeasurementId: 0,
        
        //Рассчеты
        average: 0,
        range: 0,
        V: 0,
        SKO: 0,
        SKOS: 0
    },
    methods: {
        choise_direct: function() {
            this.choise = 'direct'
        },
        choise_inderect: function() {
            this.choise = 'inderect'
        },
        addNewMeasurement: function () {
        if(this.newMeasurementNumber!="" && this.measurements.length<11){
            this.measurements.push({
                id: this.nextMeasurementId++,
                num: +this.newMeasurementNumber
            }) 
        }
        if(this.instrument_error!=''){
            this.new_instrument_error = this.instrument_error
            this.instrument_error=''
        }

        this.newMeasurementNumber = ''
        },
        computing_direct: function() {
            //Определение коэффициентов
            switch (this.measurements.length) {
                case 2:
                    this.tpn = 12.7
                    break;
                case 3:
                    this.tpn = 4.3
                    this.bpn = 1.3
                    this.upn = 0.94
                    this.vpn = 1.15
                    break;
                case 4:
                    this.tpn = 3.2
                    this.bpn = 0.72
                    this.upn = 0.76
                    this.vpn = 1.46
                    break;
                case 5:
                    this.tpn = 2.8
                    this.bpn = 0.51
                    this.upn = 0.64
                    this.vpn = 1.67
                    break;
                case 6:
                    this.tpn = 2.6
                    this.bpn = 0.4
                    this.vpn = 1.82
                    break;
                case 7:
                    this.tpn = 2.5
                    this.bpn = 0.33
                    this.upn = 0.51
                    this.vpn = 1.94
                    break;
                case 8:
                    this.tpn = 2.4
                    this.bpn = 0.29
                    this.vpn = 2.03
                    break;
                case 9:
                    this.tpn = 2.3
                    this.bpn = 0.25
                    this.vpn = 2.11
                    break;
                case 10:
                    this.tpn = 2.3
                    this.bpn = 0.23
                    this.upn = 0.41
                    this.vpn = 2.18
                    break;
                default:
                    alert( "Ну емае, измерений должно быть больше 1 и меньше 10!!"  );
            }
            //Среднее значение измерений
            this.average = 0
            for(let i = 0; i < this.measurements.length; i++) {
                this.average = (+this.average + this.measurements[i].num)
            }
            this.average = this.average/this.measurements.length
            this.average = this.average.toFixed(4)
            //Рамах
            var min      = this.measurements[0].num;
            var max      = min;
            for (i = 1; i < this.measurements.length; ++i) {
                if (this.measurements[i].num > max) max = this.measurements[i].num;
                if (this.measurements[i].num < min) min = this.measurements[i].num;
            }           
            this.range   = max - min
            
            //Погрешности
            //Cчитаем случайную погрешность
            this.random_error        = this.tpn*this.SKOS

            //Для проверки по размаху выборки
            this.range_error         = this.bpn*this.range

            //Полная погрешность
            this.complete_error      = (this.random_error**2 + this.new_instrument_error**2)**0.5

            //Относительная погрешность
            this.relative_error      = (this.complete_error/this.average)*100

            //СКО и СКОС
            let sum = 0
            for (let i = 0; i < this.measurements.length; i++) {
                x         = (Math.pow(this.measurements[i].num - this.average, 2))
                sum      += x
                this.SKO  = Math.pow(sum/(this.measurements.length-1), 1/2).toFixed(4)
                this.SKOS = Math.pow(sum/((this.measurements.length-1)*this.measurements.length), 1/2).toFixed(4)  
            }

        }
    },
    // computed: {
        
    // }
})

