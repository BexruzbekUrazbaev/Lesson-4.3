alert("Sizda hozir random sonlar chiqishni boshledi")

let a = Math.trunc(100 * Math.random())
alert("Random orqali chiqqan son: " + a)
confirm("Biz random sonni 2 ga ko'paytirmoqchi va bo'lmoqchimiz!")
b = a * 2
c = a / 2
d = a / 3
alert("Random orqali chiqqan son " + a + " edi" + "\nBiz uni 2 ga ko'paytirib " + b + " sonini chiqardik" + "\nva shu sonni 2 ga bo'lib " + c + " sonini chiqardik" + "\nva shu sonn 3 ga bo'lgandagi qoldiq " + d + " ga teng")