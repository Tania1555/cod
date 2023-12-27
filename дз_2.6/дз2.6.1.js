let a = 'aba aca aea abba adca abea'.match(/ab.a/g);
let b = 'aa aba abba abbba abbbba abbbbba'.match(/ab{1,3}a/g);
let c = '[e3kcekmlk23#usova15@yandex.ru3jn3$tanchik_us@mail.com2'.match(/[a-zA-Z-._0123456789]+@[a-z]+\.[a-z]{2,3}/g);