
console.log('hello')
let myChart = document.getElementById('myChart').getContext('2d');


// Global options
Chart.defaults.font.family = 'Lato';
Chart.defaults.font.size = 18;
Chart.defaults.color = '#777';

let massPopChart = new Chart(myChart, {
	type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
	data: {
		labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
		datasets: [{
			label: 'Population', 
			data: [
				617594,
				181045,
				153060,
				106519,
				105162,
				95072
			],
			// backgroundColor: 'green',
			backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
			],
			borderWidth: 4,
			borderColor: '#777',
			hoverBorderWidth: 3,
			hoverBorderColor: '#000',

		}],
	},
	options: {
		plugins: {
			title: {
				display: true,
				text: 'Largest Cities in Massachusetts',
				fontSize: 25
			}, 
			legend: {
				display: true,
				position: 'right',
				labels: {
					backgroundColor: 'red'
				}
			}, 
			layout: {
				padding: {
					left: 50,
					right: 0,
					bottom: 0,
					top: 0,
				}
			},
			tooltips: {
				enabled: false,
			}
		}
	}
});

