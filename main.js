const userRondomNumber = alert("Sizda hozir rondom sonlar chiqish boshlanadi😏")
const RondomNumber = Math.round(Math.random() * 100);
alert(`Random orqali tanlangan son: ${RondomNumber}`) 
confirm(`Biz ${RondomNumber} ni 2ga kopaytrmoqchi va bo'lmoqchimiz !`) 

alert(`
Random orqali chiqqan son: ${RondomNumber} edi
Biz uni 2 ga kopaytirib ${RondomNumber  * 2} soni chiqardi
Biz uni 2 ga bolib ${RondomNumber  / 2} soni chiqardik
va shu raqamni 3 ga bolganda qoldigini chiqardik ${RondomNumber % 3}
`)