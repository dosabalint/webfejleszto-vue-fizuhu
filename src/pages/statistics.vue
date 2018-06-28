<template>
    <div class="container my-5">

        <div class="mb-5">
            <h2 class="mb-5">Kitöltések száma munkakörönként</h2>
            <DoughnutChart :height="100" :chartData="fillJobData"></DoughnutChart>
        </div>

        <div class="mb-5">
            <h2 class="mb-5">Átlagfizetések munkakörönként</h2>
            <BarChart :height="100" :chartData="jobIncomeData" :options="barOptions"></BarChart>
        </div>

    </div>
</template>

<script>
// data
import DataService from '../DataService';

// chart
import DoughnutChart from '../components/DoughnutChart.vue';
import BarChart from '../components/BarChart.vue';

export default {
    components: {
        DoughnutChart,
        BarChart
    },

    data() {
        return {
            rawData: [],
            defaultColors: [
                'red',
                'purple',
                'green',
                'aqua',
                'blue',
                'yellow',
                'pink'
            ]
        };
    },

    computed: {
        fillJobData() {
            // datasets
            let counts = this.jobs.map(job => {
                const count = this.rawData.filter(response => {
                    return response.job == job;
                }).length;

                return count;
            });

            // colors
            let backgroundColor = this.defaultColors.slice(0, this.jobs.length);

            return {
                labels: this.jobs,
                datasets: [
                    {
                        backgroundColor: backgroundColor,
                        data: counts
                    }
                ]
            };
        },
        jobIncomeData() {
            // datasets
            let datasets = this.jobs.map((job, index) => {
                let responsesInJob = this.rawData.filter(response => {
                    return response.job == job;
                });

                let incomes = responsesInJob
                    .map(response => {
                        return response.income;
                    })
                    .reduce((accumulator, income) => {
                        return +accumulator + +income;
                    });

                let avgIncome = incomes / responsesInJob.length;

                return {
                    label: job,
                    backgroundColor: this.defaultColors[index],
                    data: [+avgIncome]
                };
            });

            return {
                datasets: datasets
            };
        },

        // helper
        jobs() {
            let jobs = this.rawData.map(response => {
                return response.job;
            });

            return jobs.filter((job, index) => {
                return jobs.indexOf(job) == index;
            });
        },
        barOptions() {
            return {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            };
        }
    },

    created() {
        DataService.GetSurveyData().then(result => {
            this.rawData = Object.values(result);
        });
    }
};
</script>