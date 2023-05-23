document.addEventListener('DOMContentLoaded', function() {
    // 数据
    var data = [
        { date: '2023-05-01', value: 100 },
        { date: '2023-05-02', value: 150 },
        { date: '2023-05-03', value: 200 },
        // 更多数据...
    ];

    // 生成数据表格
    var tableBody = document.querySelector('#dataTable tbody');
    for (var i = 0; i < data.length; i++) {
        var row = document.createElement('tr');
        var dateCell = document.createElement('td');
        var valueCell = document.createElement('td');
        dateCell.textContent = data[i].date;
        valueCell.textContent = data[i].value;
        row.appendChild(dateCell);
        row.appendChild(valueCell);
        tableBody.appendChild(row);
    }

    // 生成图表
    var ctx = document.getElementById('chartContainer').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(function(item) { return item.date; }),
            datasets: [{
                label: '数值',
                data: data.map(function(item) { return item.value; }),
                backgroundColor: 'rgba(75, 192, 192, 0.5)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
