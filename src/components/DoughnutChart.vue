<script>
import { Doughnut, mixins } from 'vue-chartjs';

export default {
    extends: Doughnut,
    props: ['chartData'],
    mixins: [mixins.reactiveProp],
    mounted() {
        this.renderChart(this.chartData);
    }
};
</script>
