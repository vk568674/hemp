document.addEventListener('DOMContentLoaded', function () {
    // Line Chart for Revenue vs Service
    var ctx1 = document.getElementById('lineChart').getContext('2d');
    var lineChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Revenue vs Service',
                data: [30, 50, 70, 40, 60, 90, 100],
                borderColor: '#4e73df',
                fill: false
            }]
        },
        options: {
            responsive: true
        }
    });

    // Bar Chart for Revenue and Support Costs
    var ctx2 = document.getElementById('barChart').getContext('2d');
    var barChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Revenue',
                data: [5000, 10000, 7500, 15000],
                backgroundColor: '#1cc88a'
            }, {
                label: 'Support Costs',
                data: [1000, 2000, 1500, 3000],
                backgroundColor: '#36b9cc'
            }]
        },
        options: {
            responsive: true
        }
    });

    // Doughnut Chart for Customer Satisfaction
    var ctx3 = document.getElementById('doughnutChart').getContext('2d');
    var doughnutChart = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['Satisfied', 'Unsatisfied'],
            datasets: [{
                data: [92, 8],
                backgroundColor: ['#f6c23e', '#e74a3b']
            }]
        },
        options: {
            responsive: true
        }
    });

    // Line Chart for Customer Retention
    var ctx4 = document.getElementById('lineChartRetention').getContext('2d');
    var lineChartRetention = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Customer Retention',
                data: [85, 80, 88, 90, 92, 87, 93],
                borderColor: '#858796',
                fill: false
            }]
        },
        options: {
            responsive: true
        }
    });

    // Area Chart for Visits Per Day
    var ctx5 = document.getElementById('areaChart').getContext('2d');
    var areaChart = new Chart(ctx5, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Visits Per Day',
                data: [150, 200, 250, 200, 300, 400, 450],
                backgroundColor: 'rgba(78, 115, 223, 0.5)',
                borderColor: '#4e73df',
                fill: true
            }]
        },
        options: {
            responsive: true
        }
    });

    // Bar Chart for Avg. Time Spent on Help Desk
    var ctx6 = document.getElementById('barChartTime').getContext('2d');
    var barChartTime = new Chart(ctx6, {
        type: 'bar',
        data: {
            labels: ['Email', 'Chat', 'Phone'],
            datasets: [{
                label: 'Avg. Time Spent (minutes)',
                data: [5, 8, 15],
                backgroundColor: '#f4b400'
            }]
        },
        options: {
            responsive: true
        }
    });
});
