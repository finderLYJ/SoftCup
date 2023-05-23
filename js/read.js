function showData(machineNumber) {
    // 根据机器编号获取对应的数据，并更新右侧区域的内容
    var data = getDataByMachineNumber(machineNumber);
    var dataContainer = document.getElementById('dataContainer');
    // 更新dataContainer的内容
    // dataContainer.innerHTML = ...
}

function getDataByMachineNumber(machineNumber) {
    // 根据机器编号获取数据的逻辑，可以是从后端请求数据或者从本地获取
    // 返回对应机器编号的数据
}
