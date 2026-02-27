// BEP Chart
new Chart(document.getElementById('bepChart'), {
    type: 'line',
    data: {
        labels: ['0%', '25%', '50%', '75%', '100%'],
        datasets: [{
            label: 'Revenue',
            data: [0, 165, 330, 495, 660],
        },{
            label: 'Total Cost',
            data: [152, 270, 390, 510, 538],
        }]
    }
});

// Cashflow Chart
new Chart(document.getElementById('cashflowChart'), {
    type: 'bar',
    data: {
        labels: ['Year 1','Year 2','Year 3','Year 4','Year 5'],
        datasets: [{
            label: 'Cashflow (Billion IDR)',
            data: [109,109,109,109,109]
        }]
    }
});
