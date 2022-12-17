/* dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日 */

function dateFormat(date, str){
  let result = str;
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate()
  result = result.replace("yyyy",year)
  result = result.replace("MM",month)
  result = result.replace("dd",day)
  console.log(result)
  return result
}
dateFormat(new Date('2020-12-01'), 'yyyy年MM月dd日')