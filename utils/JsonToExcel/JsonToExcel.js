const XLSX = require('xlsx')
// 准备 JSON 数据
const jsonData = [
    {
        '供应商可见': 'eightD.gongyingshangkejian',
        '操作': 'eightD.caozuo',
    },


]
const jsonData2 = [


    {
        '删除': 'eightD.shanchu',
        '名称': 'eightD.mingcheng',
    },
]
// 创建工作簿
const workbook = XLSX.utils.book_new()
// 创建工作表
const worksheet = XLSX.utils.json_to_sheet(jsonData)
// 将工作表添加到工作簿中
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
// 创建工作表
const worksheet1 = XLSX.utils.json_to_sheet(jsonData2)
// 将工作表添加到工作簿中
XLSX.utils.book_append_sheet(workbook, worksheet1, 'Sheet2')
// 导出 Excel 文件
XLSX.writeFile(workbook, 'data.xlsx')
